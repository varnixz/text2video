from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from moviepy import AudioFileClip
import uvicorn
import textVideo
import process_video
import os
import glob

app = FastAPI()

# Add CORS middleware to allow cross-origin requests from your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, restrict this to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def cleanup_old_files(keep_final: bool = False):
    """
    Delete all temporary audio/video files and optionally keep final output
    
    Args:
        keep_final (bool): If True, preserves final_reel.mp4
    """
    temp_files = glob.glob("voice_*.mp3") + glob.glob("video_*.mp4")
    final_video = "final_reel.mp4"
    
    files_to_delete = temp_files.copy()
    if not keep_final:
        files_to_delete.append(final_video)
    
    for file in files_to_delete:
        try:
            if os.path.exists(file):
                os.remove(file)
                print(f"Cleaned up: {file}")
        except Exception as e:
            print(f"Error deleting {file}: {str(e)}")

@app.get("/")
def home():
    return {"message": "Welcome to AI Video Generator API!"}

@app.get("/generate")
def generate_video(prompt: str):
    try:
        # Clean up previous files first
        cleanup_old_files()
        
        # Create enhanced prompt while preserving original user input
        enhanced_prompt = f"Generate a story on {prompt} in 120 words"

        # Step 2: Generate script
        script = textVideo.script_generate(enhanced_prompt)
        if not script:
            raise HTTPException(status_code=500, detail="Failed to generate script")
        textVideo.save_script(script)

        # Step 3: Get background music
        bg_music = None
        try:
            textVideo.background_music(script)  # This creates background_music.mp3
            if os.path.exists("background_music.mp3"):
                bg_music = AudioFileClip("background_music.mp3")
        except Exception as e:
            print(f"Background music error: {str(e)}")

        # Step 3: Convert text to voice
        audio_files = textVideo.multiple_text_to_voice(script)
        if not audio_files:
            raise HTTPException(status_code=500, detail="Audio generation failed")

        # Step 4: Fetch video clips
        video_files = textVideo.multiple_text_to_video(script)
        if not video_files:
            cleanup_old_files()  # Clean up audio files if video fails
            raise HTTPException(status_code=500, detail="Video fetch failed")

        # Step 5: Process final video
        output_video = process_video.process_videos(video_files, audio_files, bg_music, script)
        if not os.path.exists(output_video):
            raise HTTPException(status_code=500, detail="Video processing failed")

        # Clean up intermediates (keep final video)
        cleanup_old_files(keep_final=True)

        return {
            "message": "Video successfully created!",
            "file": output_video,
            "prompt": prompt
        }

    except HTTPException:
        raise
    except Exception as e:
        cleanup_old_files()
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")


@app.get("/download")
async def download_video():
    video_path = "final_reel.mp4"
    if not os.path.exists(video_path):
        raise HTTPException(status_code=404, detail="Video not found. Generate one first.")
    
    # Set explicit headers for reliable download
    return FileResponse(
        path=video_path,
        filename="ai_video.mp4",
        media_type="video/mp4",
        headers={
            "Content-Disposition": "attachment; filename=ai_video.mp4"
        }
    )

# Add HEAD method support
@app.head("/download")
async def check_download_available():
    video_path = "final_reel.mp4"
    if not os.path.exists(video_path):
        raise HTTPException(status_code=404, detail="Video not found. Generate one first.")
    
    # Just return a 200 OK for HEAD requests
    return {}

@app.options("/download")
def download_options():
    """Handle preflight OPTIONS request"""
    return {}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
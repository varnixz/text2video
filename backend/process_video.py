from moviepy import VideoFileClip, AudioFileClip, concatenate_videoclips, vfx, CompositeAudioClip, concatenate_audioclips, TextClip, CompositeVideoClip
from PIL import ImageFont

def process_videos(video_clips, audio_clips, bg_music_clip=None, scripts=None, output_file="final_reel.mp4"):
    final_clips = []
    
    for i in range(len(video_clips)):
        video = VideoFileClip(video_clips[i])
        audio = AudioFileClip(audio_clips[i])
        script = scripts[i] if scripts else ""
        script = str(script)

        video = video.resized(width=1920, height=1080)

        # Sync video duration with audio
        if video.duration > audio.duration:
            video = video.subclipped(0, audio.duration)  
        else:
            video = video.with_effects([vfx.MultiplySpeed(video.duration / audio.duration)])
        
        final_video = video.with_audio(audio)

        # Create text clip with proper method chaining
        txt_clip = (TextClip(
            text=str(script),
            font="arial.ttf",
            font_size=60,
            color='white',
            stroke_color='black',
            # bg_color="white",
            method = 'caption',
            stroke_width=2,
            text_align="center",
            size=(final_video.w, None))
            .with_duration(final_video.duration)
            .with_position(('center', final_video.h - 200))
            .with_start(0))

        # Overlay text on video
        final_video = CompositeVideoClip([final_video, txt_clip])

        # Apply transition effect
        if i > 0:
            final_video = final_video.with_effects([vfx.CrossFadeIn(0.5)])

        final_clips.append(final_video)

    # Merge all video clips
    final_output = concatenate_videoclips(final_clips, method="compose")

    # Mix background music if provided
    if bg_music_clip:
        # Calculate required durations
        required_duration = final_output.duration
        bg_duration = bg_music_clip.duration
        
        # Adjust background music duration based on video length
        if required_duration <= bg_duration:
            # If video is shorter than music, just cut the music to fit
            bg_music = bg_music_clip.subclipped(0, required_duration-5)
        else:
            # If video is longer than music, loop the music to match video duration
            loops_needed = int(required_duration // bg_duration) + 1
            bg_segments = [bg_music_clip] * loops_needed
            bg_music = concatenate_audioclips(bg_segments).subclipped(0, required_duration-5)
        
        # Set volume and mix with video audio
        bg_music = bg_music.with_volume_scaled(0.1)
        final_output = final_output.with_audio(CompositeAudioClip([final_output.audio, bg_music.with_start(5)]))

    # Save final output
    final_output.write_videofile(output_file, codec="libx264", fps=24, threads=4, audio_codec='aac', preset='fast', bitrate='3000k')

    return output_file


# # Example video and audio files for testing
# video_clips = ["video_0.mp4", "video_1.mp4", "video_2.mp4", "video_3.mp4", "video_4.mp4", "video_5.mp4", "video_6.mp4"]
# audio_clips = ["voice_0.mp3", "voice_1.mp3", "voice_2.mp3", "voice_3.mp3", "voice_4.mp3", "voice_5.mp3", "voice_6.mp3"]

# # Call the function with test data
# process_videos(video_clips, audio_clips)

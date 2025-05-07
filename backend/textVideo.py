import requests  # For making API requests
import json  # For handling JSON data
import google.generativeai as genai  # For generating AI-generated text using Gemini
import re  # For text processing and splitting sentences
from gtts import gTTS  # For converting text to speech (TTS)
from dotenv import load_dotenv
import os

# Load .env before other imports
load_dotenv(override=True)  

# API Keys for various services
ELEVEN_LABS_API_KEY = os.getenv("ELEVEN_LABS_API_KEY")  # ElevenLabs API Key (currently unused)
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")  # Gemini API Key for AI-generated content
PIXEL_API_KEY = os.getenv("PIXEL_API_KEY")  # Pexels API Key for fetching videos
PIXEL_API_URL = os.getenv("PIXEL_API_URL")   # Pexels API URL for video search
FREESOUND_API_KEY = os.getenv("FREESOUND_API_KEY") 

# Configure the Gemini AI with the API Key
genai.configure(api_key=GEMINI_API_KEY)

def get_genre_from_ai(story):
    prompt=f"Given the following story, identify the most common background music genre which decribe the emotion of the video. Only return with the genre name no extra text:\n\n{story}"
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)
    print(response.text)
    return response.text

def background_music(sentences):
    story=''.join(sentences)

    genre=get_genre_from_ai(story)
    download_music(genre)

def download_music(genre):

    # Change this to any genre you want
    GENRE_QUERY = genre

    # Search for sounds based on genre
    search_url = f"https://freesound.org/apiv2/search/text/?query={GENRE_QUERY}&token={FREESOUND_API_KEY}"
    search_response = requests.get(search_url).json()

    if "results" in search_response and search_response["results"]:
        first_sound = search_response["results"][0]
        sound_id = first_sound["id"]
        sound_name = first_sound["name"]

        print(f"Found Sound: {sound_name} (ID: {sound_id})")

        # Fetch sound details
        sound_url = f"https://freesound.org/apiv2/sounds/{sound_id}/?token={FREESOUND_API_KEY}"
        sound_response = requests.get(sound_url).json()

        if "previews" in sound_response:
            preview_url = sound_response["previews"].get("preview-hq-mp3")

            print(f"Downloading preview: {preview_url}")

            # Download the preview file
            music_response = requests.get(preview_url)

            if music_response.status_code == 200:
                filename = f"{sound_name}.mp3"
                with open("background_music.mp3", "wb") as file:
                    file.write(music_response.content)
                print(f"Download successful: {filename}")
            
            else:
                print("Failed to download the preview file")
        
        else:
            print("No preview available for this sound")
    
    else:
        print("No sounds found for the query")

def multiple_text_to_voice(mss):
    """
    Converts multiple text segments into separate voice files using Google Text-to-Speech (gTTS).
    - Takes a list of text segments (`mss`).
    - Generates and saves an audio file for each segment.
    - Returns a list of filenames for the generated voice files.
    """
    list = []
    count = 0
    for i in mss:
        name = f"voice_{count}.mp3"
        text_to_voice(i, name)  # Convert text to voice
        list.append(name)
        count += 1
    return list


def multiple_text_to_video(mss):
    """
    Fetches short video clips from Pexels API based on given text segments.
    - Takes a list of text segments (`mss`).
    - Downloads a related video from Pexels for each segment.
    - Returns a list of filenames for the downloaded videos.
    """
    list = []
    count = 0
    for i in mss:
        name = f"video_{count}.mp4"
        text_to_video(i, name)  # Fetch video from Pexels
        list.append(name)
        count += 1
    return list


def text_to_voice(mssg, voice_name):
    """
    Converts a given text message (`mssg`) into speech and saves it as an MP3 file.
    - Uses Google Text-to-Speech (gTTS) to generate the voice.
    - Saves the generated speech as an audio file (`voice_name`).
    """
    tts = gTTS(text=mssg, lang="en")  # Convert text to speech
    tts.save(voice_name)  # Save the generated speech as a file


def text_to_video(mssg, video_name):
    """
    Fetches a short video from Pexels based on the given text message (`mssg`).
    - Searches for a video related to the text using the Pexels API.
    - Downloads and saves the first available video as `video_name`.
    """
    URL = PIXEL_API_URL + mssg + "&per_page=1"
    headers = {"Authorization": PIXEL_API_KEY}

    response = requests.get(URL, headers=headers)  # Fetch video from API
    print("Fetched successfully")

    data = response.json()

    # Get the first available video file
    videos = data["videos"][0]["video_files"]
    for i in videos:
        link = i["link"]
        video_response = requests.get(link, stream=True)
        if video_response.status_code == 200:
            with open(video_name, "wb") as video_file:
                for chunk in video_response.iter_content(chunk_size=1024):
                    if chunk:
                        video_file.write(chunk)  # Save video file
            break


def script_generate(prompt: str):
    """
    Generates a short story script using Google's Gemini AI based on the user-provided prompt.
    - Takes a custom prompt from the user.
    - Splits the generated text into smaller parts (max 100 characters per part).
    - Returns a list of text segments.
    """
    model = genai.GenerativeModel("gemini-1.5-flash")  # Initialize Gemini model

    # Request content from AI using the user-provided prompt
    response = model.generate_content(prompt)

    text = response.text.strip()  # Get the generated text

    max_length = 100  # Limit each segment to 100 characters
    sentences = re.split(r'(?<=[.?!])\s+', text)  # Split text into sentences

    parts = []
    current_part = ""

    # Split the text into smaller parts of max_length characters
    for sentence in sentences:
        if len(current_part) == 0:
            current_part = sentence
        elif len(current_part) + len(sentence) <= max_length:
            current_part += " " + sentence
        else:
            parts.append(current_part.strip())
            current_part = sentence

    if current_part:
        parts.append(current_part.strip())

    return parts  # Return the list of story segments


def save_script(mssg):
    """
    Saves the generated story script to a text file (`script.txt`).
    - Only writes non-empty text segments to the file on a new line.
    - Removes any empty lines from the beginning or throughout the script.
    """
    with open("script.txt", "w") as sc:
        for i in mssg:
            sc.write(i + "\n")

# # Generate the story script
# subtitle = script_generate("Create a story about a poor young boy who became sucessfull in 120 words")
# print(subtitle)

# # Save the script to a file
# save_script(subtitle)

# # Convert text to voice (MP3 files)
# multiple_text_to_voice(subtitle)

# # Fetch relevant videos from Pexels
# multiple_text_to_video(subtitle)
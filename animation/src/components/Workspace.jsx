import React, { useState } from 'react';
import styled from 'styled-components';

const Workspace = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', isError: false });
  const [downloadReady, setDownloadReady] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setMessage({ text: 'Please enter a prompt first', isError: true });
      return;
    }
  
    setLoading(true);
    setMessage({ text: 'Generating video... This may take 2-3 minutes', isError: false });
    setDownloadReady(false);
  
    try {
      // 1. Generate the video
      const backendBaseURL = process.env.REACT_APP_BACKEND_BASE_URL;
      const response = await fetch(
        `${backendBaseURL}/generate?prompt=${encodeURIComponent(prompt)}`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          }
        }
      );
  
      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.detail || 'Video generation failed');
      }
  
      const data = await response.json();
      
      if (data.message !== "Video successfully created!") {
        throw new Error('Video generation failed');
      }
  
      // Now using GET instead of HEAD to verify file exists
      try {
        const fileCheck = await fetch('http://localhost:8000/download', { 
          method: 'GET',
          headers: {
            'Range': 'bytes=0-0' // Just requesting the first byte to check existence
          }
        });
        
        if (!fileCheck.ok) {
          throw new Error('Video file not found on server');
        }
        
        // If we get here, the file exists
        setMessage({ text: 'Video ready for download!', isError: false });
        setDownloadReady(true);
      } catch (fileCheckError) {
        throw new Error('Video file not available. Please try again.');
      }
  
    } catch (error) {
      setMessage({ 
        text: error.message || 'Error generating video', 
        isError: true 
      });
      console.error('Generation error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      setMessage({ text: 'Starting download...', isError: false });
      
      const response = await fetch(`http://localhost:8000/download?t=${Date.now()}`);
      
      if (!response.ok) {
        throw new Error('Failed to download video');
      }
      
      // Get the blob from the response
      const blob = await response.blob();
      
      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create a link and trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'ai_generated_video.mp4';
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
      
      setMessage({ text: 'Download complete!', isError: false });
    } catch (error) {
      setMessage({
        text: `Download failed: ${error.message}`,
        isError: true
      });
      console.error('Download error:', error);
    }
  };

  const quickPrompts = [
    { text: "Create short video", action: () => setPrompt("Create a 30-second explainer video about ") },
    { text: "Make explainer video", action: () => setPrompt("Make an explainer video about ") },
    { text: "Create animated film", action: () => setPrompt("Create an animated short film about ") },
    { text: "Use my script", action: () => setPrompt("") }
  ];

  return (
    <WorkspaceContainer>
      <WorkspaceContent>
        <TextArea 
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
            setMessage({ text: '', isError: false });
          }}
          placeholder="Describe your video idea (e.g., 'A sunset over mountains with relaxing music')"
          disabled={loading}
        />
        
        <GenerateButton 
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner />
              Generating...
            </>
          ) : 'Generate Video'}
        </GenerateButton>

        {message.text && (
          <Message error={message.isError}>
            {message.text}
            {message.isError && (
              <RetryButton onClick={handleGenerate}>
                Try Again
              </RetryButton>
            )}
          </Message>
        )}

        {downloadReady && (
          <DownloadButton onClick={handleDownload}>
            <DownloadIcon />
            Download Video
          </DownloadButton>
        )}

        <QuickPromptTitle>Quick Start:</QuickPromptTitle>
        <OptionsContainer>
          {quickPrompts.map((item, index) => (
            <Option 
              key={index}
              onClick={() => !loading && item.action()}
              disabled={loading}
            >
              {item.text}
            </Option>
          ))}
        </OptionsContainer>
        
        <ButtonGroup>
          <Button disabled={loading}>
            <Icon>⚙️</Icon> Workflows
          </Button>
          <Button disabled={loading}>
            <Icon>🔌</Icon> Plugins
          </Button>
        </ButtonGroup>
      </WorkspaceContent>
    </WorkspaceContainer>
  );
};

// Styled Components
const WorkspaceContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

const WorkspaceContent = styled.div`
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 1.2rem;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  resize: none;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #4461F2;
    box-shadow: 0 0 0 2px rgba(68, 97, 242, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const GenerateButton = styled.button`
  background: #4461F2;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.disabled ? '#4461F2' : '#3a56d4'};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Spinner = styled.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const Message = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background: ${props => props.error ? 'rgba(255, 50, 50, 0.1)' : 'rgba(68, 97, 242, 0.1)'};
  color: ${props => props.error ? '#ff4d4d' : '#4461F2'};
  border: 1px solid ${props => props.error ? '#ff4d4d' : '#4461F2'};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RetryButton = styled.button`
  background: transparent;
  color: #ff4d4d;
  border: 1px solid #ff4d4d;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;
  font-size: 0.8rem;
  transition: all 0.2s;
  margin-top: 0.5rem;

  &:hover {
    background: rgba(255, 50, 50, 0.1);
  }
`;

const DownloadButton = styled.button`
  background: #28a745;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s;

  &:hover {
    background: #218838;
  }
`;

const DownloadIcon = styled.span.attrs({ children: '⬇️' })`
  font-size: 1rem;
`;

const QuickPromptTitle = styled.h3`
  color: #aaa;
  font-size: 0.9rem;
  margin: 0;
  margin-top: 1rem;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const Option = styled.div`
  padding: 0.8rem 1.2rem;
  background: #1a1a1a;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;

  &:hover {
    background: ${props => props.disabled ? '#1a1a1a' : '#2a2a2a'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  flex: 1;
  padding: 0.8rem;
  background: #1a1a1a;
  color: #aaa;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.disabled ? '#1a1a1a' : '#2a2a2a'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Icon = styled.span`
  font-size: 1rem;
`;

export default Workspace;
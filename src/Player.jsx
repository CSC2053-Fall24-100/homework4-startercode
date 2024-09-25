import React, { useRef, useState } from 'react';

function Player() {
  const audioRef = useRef(null);

 let playing = false; // Playing is still a local variable
let isMuted = false; // Muted is still a local variable
  let volume = 0.5; // Volume is still a local variable

  const togglePlayPause = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    playing = !playing;  
  };

  const handleMute = () => {
    isMuted = !isMuted;    
    audioRef.current.muted = !isMuted;
  };

  const handleVolumeChange = (e) => {
    volume = e.target.value;
    audioRef.current.volume = volume;
  };

  return (
    <div className="player">
      <div className="player-controls">
        {/* Clickable text for Play/Pause */}
        <span
          style={textLinkStyle}
          onClick={togglePlayPause}
        >
          {playing ? 'Pause' : 'Play'}
        </span>
        &nbsp;|&nbsp;
        {/* Conditionally rendered Mute/Unmute */}
        {
          <span
            style={textLinkStyle}
            onClick={handleMute}
          >
            {isMuted ? 'Unmute' : 'Mute'}
          </span>
        }
      </div>

      {
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
    
        />
      }

      <audio ref={audioRef} controls crossOrigin="anonymous" style={{ display: 'none' }}>
        <source src="http://www.villanova.edu" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

   
    </div>
  );
}

export default Player;

// Simple text link style using JavaScript object for inline styling
const textLinkStyle = {
  color: '#007bff', // Blue text
  cursor: 'pointer',
  textDecoration: 'underline', // Make it look like a link
};
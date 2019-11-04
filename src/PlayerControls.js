import React from 'react';

import useMusicPlayer from "./useMusicPlayer";

const Controls = () => {
  const { isPlaying, currentTrackName, togglePlay, playPreviousTrack, playNextTrack } = useMusicPlayer();
  return (
    <>
      <div>
        <div>
          <div style={{display: currentTrackName && isPlaying ? 'block' : 'none'}}>{currentTrackName}</div>
        </div>
        <div>
          <button onClick={playPreviousTrack} disabled={!currentTrackName}>
            '이전곡'
          </button>
          <button onClick={togglePlay} disabled={!currentTrackName}>
            {isPlaying ? '정지' : '재생'}
          </button>
          <button  onClick={playNextTrack} disabled={!currentTrackName}>
            '다음곡'
          </button>
        </div>
      </div>
    </>
  )
}

export default Controls;
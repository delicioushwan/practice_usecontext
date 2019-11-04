import React from 'react';

import useMusicPlayer from "./useMusicPlayer";

const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();
  return (
    <>
      {trackList.map((track, index) => (
        <div key={index}>
          <button onClick={() => playTrack(index)}>
            {currentTrackName === track.name && isPlaying ? '정지' : '재생'}
          </button>
          <div>
            {track.name}
          </div>
        </div>
      ))}
    </>
  )}

export default TrackList;

import React from 'react';

const MediaComponent = ({ src, type, controls }) => {
  // If type is 'audio', render an audio element, else render a video element
  const mediaElement = type === 'audio' ? (
    <audio src={src} controls={controls}>
      Your browser does not support the audio element.
    </audio>
  ) : (
    <video src={src} controls={controls}>
      Your browser does not support the video element.
    </video>
  );

  return (
    <div>
      {mediaElement}
    </div>
  );
};

// export default MediaComponent;

import React from 'react';
import MediaComponent from './MediaComponent';

const App = () => {
  return (
    <div>
      <h1>Audio and Video Player</h1>
      <MediaComponent src="path_to_audio_file.mp3" type="audio" controls />
      <MediaComponent src="path_to_video_file.mp4" type="video" controls />
    </div>
  );
};

export default App;

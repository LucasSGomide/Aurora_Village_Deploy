import React from 'react';
import ReactPlayer from 'react-player/lazy';

class VideoSection extends React.Component {
  render() {
    return (
      <section id="video" className="video-section">
        <h2 className="h2-desktop">CONHEÇA O AURORA VILLAGE E SE SURPREENDA ! TEXTO GENÉRICO.</h2>
        <h2 className="h2-mobile">ASSISTA O VÍDEO</h2>
        <ReactPlayer className="video-player" url="https://www.youtube.com/watch?v=01ZkESVb0W4&ab_channel=M%C3%A1rioCabanelas" />
      </section>
    );
  }
}

export default VideoSection;

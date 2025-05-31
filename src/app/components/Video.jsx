import React from "react";

const VideoAutoplay = () => {
  return (
    <div className="w-full h-full">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/p-PiVj8a8mg?autoplay=1&mute=1&controls=1&loop=1&playlist=p-PiVj8a8mg&rel=0"
        title="YouTube video player"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoAutoplay;

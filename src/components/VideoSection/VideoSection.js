import React from 'react';
import './VideoSection.css';

import video1 from '../../assets/videos/video1.mp4';
import video2 from '../../assets/videos/video2.mp4';

const videos = [
  { src: video1, title: 'Celebration Moments' },
  { src: video2, title: 'Birthday Wishes' },
];

const VideoSection = () => {
  return (
    <div className="video-section">
      <h2>Special Moments</h2>
      <div className="video-gallery">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <video controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;

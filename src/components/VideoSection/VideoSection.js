import React, { useState } from 'react';
import './VideoSection.css';

import video1 from '../../assets/videos/video1.mp4';
import video2 from '../../assets/videos/video2.mp4';
import video3 from '../../assets/videos/video3.mp4';
import video4 from '../../assets/videos/video4.mp4';
import video5 from '../../assets/videos/video5.mp4';
import video6 from '../../assets/videos/video6.mp4';
import video7 from '../../assets/videos/video7.mp4';
import video8 from '../../assets/videos/video8.mp4';
import video9 from '../../assets/videos/video9.mp4';
import video10 from '../../assets/videos/video10.mp4';
import video11 from '../../assets/videos/video11.mp4';
import video12 from '../../assets/videos/video12.mp4';

const videos = [
  { src: video1, title: 'Love you, I do ❤️' },
  { src: video2, title: 'My college girl 🎓' },
  { src: video3, title: 'Sleeping beauty 😴' },
  { src: video4, title: 'Cute driver 🚗' },
  { src: video5, title: 'Band time 🎸' },
  { src: video6, title: 'Tk internet celebrity 🌐' },
  { src: video7, title: 'SPICY & HOT 🌶️' },
  { src: video8, title: 'Sleeping beauty again 😴' },
  { src: video9, title: 'Worried old father 👴' },
  { src: video10, title: 'Shy Shy 😊' },
  { src: video11, title: 'LOL 😂' },
  { src: video12, title: 'Mr. GIAO 🚶‍♂️' },
];

const VIDEOS_PER_PAGE = 4; // Adjust this as needed

const VideoSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);

  // Get the videos for the current page
  const currentVideos = videos.slice(
    (currentPage - 1) * VIDEOS_PER_PAGE,
    currentPage * VIDEOS_PER_PAGE
  );

  // Handle page changes
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="video-section">
      <h2>Cute Moments 😍</h2>
      <div key={currentPage} className="video-gallery"> {/* Use currentPage as key */}
        {currentVideos.map((video, index) => (
          <div key={index} className="video-item">
            <video controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{video.title}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoSection;

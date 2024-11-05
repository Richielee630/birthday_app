import React from 'react';
import './WelcomePage.css';
import backgroundVideo from '../../assets/videos/video1.mp4';
import birthdayBackground from '../../assets/images/birthday-background.jpg';

const WelcomePage = ({ showBirthdayImage }) => {
  return (
    <div className="welcome-container">
      {!showBirthdayImage && (
        <video
          autoPlay
          loop
          muted
          className="background-video"
        >
          <source src={backgroundVideo} type="video/mp4" /> {/* Using imported video */}
          Your browser does not support the video tag.
        </video>
      )}

      {showBirthdayImage && (
        <div
          className="birthday-background"
          style={{ backgroundImage: `url(${birthdayBackground})` }} // Fixed syntax
        />
      )}

      <h1>Happy Birthday, Xinyi Li! 💕</h1>
      <p>Wishing you an incredible day filled with love, joy, and unforgettable moments.</p>
      <p className="signature">-- by Richie Li™</p> {/* Signature line */}
    </div>
  );
};

export default WelcomePage;

import React from 'react';
import './WelcomePage.css';
import animatedGif from '../../assets/images/animated-background.gif'; // Add the GIF
import birthdayBackground from '../../assets/images/birthday-background.jpg';

const WelcomePage = ({ showBirthdayImage }) => {
  return (
    <div className="welcome-container">
      {/* Show the GIF instead of the video */}
      {!showBirthdayImage && (
        <img
          src={animatedGif}
          alt="Animated background"
          className="background-gif"
        />
      )}

      {/* Show the background image when showBirthdayImage is true */}
      {showBirthdayImage && (
        <div
          className="birthday-background"
          style={{ backgroundImage: `url(${birthdayBackground})` }}
        />
      )}

      <h1>Happy Birthday, Xinyi Li! 💕</h1>
      <p>Wishing you an incredible day filled with love, joy, and unforgettable moments.</p>
      <p className="signature">-- by Richie Li™</p>
    </div>
  );
};

export default WelcomePage;

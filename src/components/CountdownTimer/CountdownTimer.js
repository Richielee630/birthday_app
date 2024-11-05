import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import './CountdownTimer.css';
import calculateTimeLeft from '../../utils/calculateTimeLeft';

const CountdownTimer = ({ targetDate, onCountdownEnd }) => { // Added onCountdownEnd as a prop
  const { width, height } = useWindowSize();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const [showFireworks, setShowFireworks] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [dancing, setDancing] = useState(false);
  const [muted, setMuted] = useState(true); // Initially mute the video

  const toggleMute = () => setMuted(!muted);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        setShowFireworks(true);
        setShowVideo(true);
        setDancing(true); // Start dancing animation
        onCountdownEnd(); // Trigger background change in WelcomePage
        clearInterval(timer);

        // Stop dancing and hide fireworks after 2 minutes
        setTimeout(() => {
          setShowFireworks(false);
          setDancing(false); // Stop dancing
        }, 120000); // 2 minutes in milliseconds
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onCountdownEnd]);

  return (
    <div className="countdown">
      <h2 className={dancing ? 'dance-shake' : ''}>Countdown to the Special Day</h2>
      <div className="timer">
        <div className={`time-box ${dancing ? 'dance-bounce' : ''}`}>
          <span className="time">{timeLeft.days || '0'}</span>
          <span className="label">Days</span>
        </div>
        <div className={`time-box ${dancing ? 'dance-bounce' : ''}`}>
          <span className="time">{timeLeft.hours || '0'}</span>
          <span className="label">Hours</span>
        </div>
        <div className={`time-box ${dancing ? 'dance-bounce' : ''}`}>
          <span className="time">{timeLeft.minutes || '0'}</span>
          <span className="label">Minutes</span>
        </div>
        <div className={`time-box ${dancing ? 'dance-bounce' : ''}`}>
          <span className="time">{timeLeft.seconds || '0'}</span>
          <span className="label">Seconds</span>
        </div>
      </div>

      {/* Fireworks Effect */}
      {showFireworks && (
        <Confetti
          width={width}
          height={height}
          recycle={true} // Keep recycling for continuous confetti
          numberOfPieces={500} // Adjust for intensity
          colors={['#FF69B4', '#FF1493', '#FF4500', '#FFD700']}
          drawShape={(ctx) => {
            const shapeType = Math.floor(Math.random() * 3);
            ctx.beginPath();
            switch (shapeType) {
              case 0: // Heart shape
                ctx.moveTo(0, -10);
                ctx.bezierCurveTo(-10, -10, -10, 10, 0, 20);
                ctx.bezierCurveTo(10, 10, 10, -10, 0, -10);
                ctx.fill();
                break;
              case 1: // Rose shape (simple circle)
                ctx.arc(0, 0, 10, 0, 2 * Math.PI);
                ctx.fill();
                break;
              case 2: // Kiss shape (simple X)
                ctx.moveTo(-10, -10);
                ctx.lineTo(10, 10);
                ctx.moveTo(10, -10);
                ctx.lineTo(-10, 10);
                ctx.stroke();
                break;
              default:
                break;
            }
          }}
        />
      )}

      {/* YouTube Video Player */}
      {showVideo && (
        <div id="youtube-player-container" style={{ display: 'none' }}>
          <iframe
            id="youtube-player"
            width="0"
            height="0"
            src={`https://www.youtube.com/embed/syrVXWMGTUg?autoplay=1&mute=${muted ? '1' : '0'}`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Mute/Unmute Button */}
      {showVideo && (
        <button onClick={toggleMute} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
          {muted ? 'Happy Birthday :)' : 'Mute'}
        </button>
      )}
    </div>
  );
};

export default CountdownTimer;

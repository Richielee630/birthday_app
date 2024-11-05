import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage/WelcomePage';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import Messages from './components/Messages/Messages';
import VideoSection from './components/VideoSection/VideoSection';

function App() {
  const [showBirthdayImage, setShowBirthdayImage] = useState(false);

  const handleCountdownEnd = () => {
    setShowBirthdayImage(true);
  };

  return (
    <div className="App">
      <WelcomePage showBirthdayImage={showBirthdayImage} />
      <CountdownTimer targetDate="2024-11-05 00:24:30" onCountdownEnd={handleCountdownEnd} /> {/* Replace with actual date */}
      <PhotoGallery />
      <Messages />
      <VideoSection />
    </div>
  );
}

export default App;

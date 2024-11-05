import React, { useState } from 'react';
import './PhotoGallery.css';

import photo1 from '../../assets/images/photo1.jpg';
import photo2 from '../../assets/images/photo2.jpg';
import photo3 from '../../assets/images/photo3.jpg';

const photos = [
  { src: photo1, alt: 'Memory 1' },
  { src: photo2, alt: 'Memory 2' },
  { src: photo3, alt: 'Memory 3' },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-gallery">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            onClick={() => openPhoto(photo)}
            className="gallery-photo"
          />
        ))}
      </div>

      {selectedPhoto && (
        <div className="lightbox" onClick={closePhoto}>
          <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;

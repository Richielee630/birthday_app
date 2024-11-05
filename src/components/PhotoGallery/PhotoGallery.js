import React, { useState } from 'react';
import './PhotoGallery.css';

// Import additional photos as needed
import photo1 from '../../assets/images/photo1.jpg';
import photo2 from '../../assets/images/photo2.jpg';
import photo3 from '../../assets/images/photo3.jpg';
import photo4 from '../../assets/images/photo4.jpg';
import photo5 from '../../assets/images/photo5.jpg';
import photo6 from '../../assets/images/photo6.jpg';
import photo7 from '../../assets/images/photo7.jpg';
import photo8 from '../../assets/images/photo8.jpg';
import photo9 from '../../assets/images/photo9.jpg';
import photo10 from '../../assets/images/photo10.jpg';
import photo11 from '../../assets/images/gucci.jpg';
import photo12 from '../../assets/images/teddy.jpg';
import photo13 from '../../assets/images/car_front.jpg';
import photo14 from '../../assets/images/car_back.jpg';


const photos = [
  { src: photo1, alt: 'Memory 1' },
  { src: photo2, alt: 'Memory 2' },
  { src: photo3, alt: 'Memory 3' },
  { src: photo4, alt: 'Memory 4' },
  { src: photo5, alt: 'Memory 5' },
  { src: photo6, alt: 'Memory 6' },
  { src: photo7, alt: 'Memory 7' },
  { src: photo8, alt: 'Memory 8' },
  { src: photo9, alt: 'Memory 9' },
  { src: photo10, alt: 'Memory 10' },
  { src: photo11, alt: 'Memory 11' },
  { src: photo12, alt: 'Memory 12' },
  { src: photo13, alt: 'Memory 13' },
  { src: photo14, alt: 'Memory 14' },
  // Add more photos as desired
];

const PHOTOS_PER_PAGE = 4; // Number of photos to show per page

const PhotoGallery = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(photos.length / PHOTOS_PER_PAGE);
  const startIndex = (currentPage - 1) * PHOTOS_PER_PAGE;
  const currentPhotos = photos.slice(startIndex, startIndex + PHOTOS_PER_PAGE);

  const openPhoto = (index) => {
    setSelectedPhotoIndex(index + startIndex); // Account for page offset
  };

  const closePhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const showNextPhoto = () => {
    setSelectedPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const showPrevPhoto = () => {
    setSelectedPhotoIndex((prevIndex) => 
      (prevIndex - 1 + photos.length) % photos.length
    );
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="photo-gallery">
      <h2>Photo Gallery 💘</h2>
      <div className="gallery-grid">
        {currentPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            onClick={() => openPhoto(index)}
            className="gallery-photo"
          />
        ))}
      </div>

      {selectedPhotoIndex !== null && (
        <div className="lightbox" onClick={closePhoto}>
          <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); showPrevPhoto(); }}>‹</button>
          <img src={photos[selectedPhotoIndex].src} alt={photos[selectedPhotoIndex].alt} />
          <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); showNextPhoto(); }}>›</button>
        </div>
      )}

      <div className="pagination">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default PhotoGallery;
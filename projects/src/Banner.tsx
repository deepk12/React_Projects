import React, { useState, useEffect } from 'react';
import './Banner.css'; // Assuming you have a CSS file for styling

interface Banner {
  id: number;
  url: string;
  link: string;
}

const BannerComponent: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.bitdelta.com/api/v1/public/general');
        const data = await response.json();
        if (response.ok) {
          setBanners(data.data.banners);
        } else {
          console.error('Failed to fetch banners:', data.message);
        }
      } catch (error) {
        console.error('Failed to fetch banners:', error);
      }
    };
    fetchData();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {banners.map((banner, index) => (
          <div key={banner.id} className={`slide ${index === currentIndex ? 'active' : ''}`}>
            <a href={banner.link} target="_blank" rel="noopener noreferrer">
              <img src={banner.url} alt="Banner" />
            </a>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button className="arrow" onClick={handlePrev}>&#9664;</button>
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
        <button className="arrow" onClick={handleNext}>&#9654;</button>
      </div>
    </div>
  );
};

export default BannerComponent;

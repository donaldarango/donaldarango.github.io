import React, { useState } from 'react';
import './ProjectBody.css';

function ZoomableImage({ src, alt, caption }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="accomplishment-image-container">
        <img className="accomplishment-image"
          src={src} 
          alt={alt} 
          onClick={() => setIsOpen(true)}
        />
        {caption && <span className="image-caption">{caption}</span>}
      </div>

      {isOpen && (
        <div className="image-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="image-modal-content" onClick={e => e.stopPropagation()}>
            <button className="image-modal-close" onClick={() => setIsOpen(false)}>&times;</button>
            <img src={src} alt={`${alt} - Enlarged view`} />
          </div>
        </div>
      )}
    </>
  );
}

export default ZoomableImage;

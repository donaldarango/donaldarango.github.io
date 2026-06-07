import React, { useState } from 'react';
import './ProjectBody.css';

function ZoomableImage({ src, alt, caption }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const isVideo = src && src.match(/\.(mp4|webm|ogg)$/i);

  const renderMedia = (className, onClick = undefined) => {
    if (isVideo) {
      return (
        <video 
          className={className} 
          src={src} 
          onClick={onClick}
          autoPlay 
          loop 
          muted 
          playsInline
        />
      );
    }
    return (
      <img 
        className={className}
        src={src} 
        alt={alt} 
        onClick={onClick}
      />
    );
  };

  return (
    <>
      <div className="accomplishment-image-container">
        {renderMedia("accomplishment-image", () => setIsOpen(true))}
        {caption && <span className="image-caption">{caption}</span>}
      </div>

      {isOpen && (
        <div className="image-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="image-modal-content" onClick={e => e.stopPropagation()}>
            <button className="image-modal-close" onClick={() => setIsOpen(false)}>&times;</button>
            {renderMedia()}
          </div>
        </div>
      )}
    </>
  );
}

export default ZoomableImage;

import React from 'react';
import './ProjectBody.css';
import ZoomableImage from './ZoomableImage';

function PaintingPanicBody({ project }) {
  return (
    <>
      <div className="project-section accomplishments">
        <h2>Key Accomplishments</h2>

        <div className="accomplishment-group two-column">
            <div>
                <h3>Bitmap Rendering</h3>
                <p>One of the main technical challenges was implementing efficient bitmap rendering that allows for the projectile movement and painting effects that I desired given processing constraints. Drawing to the screen pixel by pixel was extremely resource-intensive, so the background was drawn once, and only redrawn when necessary. </p>
            </div>
        </div>
      </div>
    </>
  ); 
}

export default PaintingPanicBody;
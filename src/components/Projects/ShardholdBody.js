import React from 'react';
import './ProjectBody.css';
import ZoomableImage from './ZoomableImage';

function ShardholdBody({ project }) {
  return (
    <>
      <div className="project-section accomplishments">
        <h2>Key Accomplishments</h2>
        <div className="accomplishment-group two-column">
          <div>
            <h3>Enemies & Spawn Management</h3>
            <ul>
                <li>Created system to load level definitions from JSON files</li>
                <li>Enemy spawn manager that reads from JSON files to spawn enemies based on defined spawn points and wave number</li>
                <li>Enemy board movement and attack logic</li>
            </ul>
          </div>
          <ZoomableImage
            src={`${process.env.PUBLIC_URL}/images/portfolio/Shardhold/ShardholdGameplay.gif`}
            alt="Shardhold Gameplay Gif"
            />
        </div>
        <div className="accomplishment-group two-column">
            <div>
                <h3>Tutorialization</h3>
                <p>Our game had quite a few actions that needed to be explained to the player, so I created an interactive tutorial system that is built around these core gameplay interactions. This along with the level definition system allowed us to create four distinct, staged tutorial levels each focusing on a different aspect of the game. </p>
                <ul>
                    <li>Text Confirmation</li>
                    <li>Tile Hover</li>
                    <li>Timer Press</li>
                    <li>Card Play</li>
                </ul>
            </div>
            <ZoomableImage
            src={`${process.env.PUBLIC_URL}/images/portfolio/Shardhold/ShardholdTutorial.mp4`}
            alt="Shardhold Tutorial Video"
            />
        </div>
      </div>
    </>
  ); 
}

export default ShardholdBody;
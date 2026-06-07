import React from 'react';
import './ProjectBody.css';
import ZoomableImage from './ZoomableImage';

function ArchonBody({ project }) {
  return (
    <>
      <div className="project-section accomplishments">
        <h2>Key Features</h2>
        <div className="accomplishment-group">
          <div>
            <h3>Icons</h3>
            <p> Icons are the playable characters within Archon, and I was able to implement four distinct types: the warrior, archer, valkyrie, and unicorn. Being written in C, there are no native object-oriented features, however, a base object structure was implemented so that objects could be managed, updated, and drawn accordingly. Icons take advatage of this structure and implement additional logic on top for stats and animations. With the game having two main states, the icons needed to be designed to fit both the board and arena environments. </p>
            <p> One example of this is the icon movement logic. On the board, a simple pathfinding algorithm was implemented to mark accessible tiles where players take turns moving the icons tile by tile. In the arena, players move simultaneously and icons are free to move in eight directions to engage in combat. </p>
          </div>
          <div className="accomplishment-image-group">
            <ZoomableImage
              src={`${process.env.PUBLIC_URL}/images/portfolio/Archon/ArchonPathfindingGround.png`}
              alt="Archon Pathfinding Ground"
              caption="Pathfinding visualization for ground icon with 3 tile move range"
              />
              <ZoomableImage
              src={`${process.env.PUBLIC_URL}/images/portfolio/Archon/ArchonPathfindingFly.png`}
              alt="Archon Pathfinding Flying"
              caption="Pathfinding visualization for flying icon with 3 tile move range."
              />
          </div>
        </div>
        <div className="accomplishment-group two-column">
          <div>
            <h3>Board & Arena</h3>
            <p> In terms of gameplay, I tried to keep the core mechanics faithful to the original, while also scoping the features to meet a 2 week deadline. There are two main states to the game: the board and the arena. The board state is a 2D grid where players can move their characters based on their move ranges and movement types. I am pretty happy with how the combat within the area turned out as it feels very close to the original.</p>
            <p> Some of the combat quirks of the original game were preserved, such as players only having one projectile active at a time and only being able to attack while moving. </p>
          </div>
          <div>
              <ZoomableImage
              src={`${process.env.PUBLIC_URL}/images/portfolio/Archon/ArchonArena.mp4`}  
              alt="Archon Arena Gameplay"
              />
          </div>
        </div>
      </div>
    </>
  ); 
}

export default ArchonBody;
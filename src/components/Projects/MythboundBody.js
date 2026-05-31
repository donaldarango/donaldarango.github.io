import React from 'react';
import './ProjectBody.css';
import ZoomableImage from './ZoomableImage';

function MythboundBody({ project }) {
  return (
    <>
      <div className="project-section accomplishments">
        <h2>Key Accomplishments</h2>
        
        <div className="accomplishment-group two-column">
          <div>
            <h3>Gameplay Ability System (GAS) Integration</h3>
            <ul>
              <li><strong>Character Initialization:</strong> Built logic from CharacterData to handle spawning/attaching weapons and granting abilities/effects (server authoritative and replicated to client).</li>
              <li><strong>Character Selection:</strong> Set up CharacterData struct and intialization logic used within the selection screen. This allows designers to easily configure and balance different character options for visuals and abilities.</li>
              <li><strong>Tag-Based Input System:</strong> Implemented an input system for abilities that allows automatic linking between InputActions and GameplayTags defined in an InputConfig asset.</li>
              <li><strong>Player Death & Respawn:</strong> Handled character lifecycle management for player death and respawn sequences. This involves resetting player ability and attribute states.</li>
              <li><strong>Stamina System:</strong> Implemented Stamina attributes, movement speed multipliers, and stamina drain for movement abilities.</li>
            </ul>
          </div>
          <ZoomableImage 
            src={`${process.env.PUBLIC_URL}/images/portfolio/Mythbound/MythboundCharacterData.jpeg`}
            alt="Mythbound Character Data"
            caption="Example Character Data with Alvar character"
          />
        </div>

        <div className="accomplishment-group">
          <h3>Combat</h3>
          <p>I was responsible for implementing the core combat systems, including the damage calculation and combo attack mechanics. This involved creating a robust framework for handling combat interactions and ensuring smooth gameplay experiences.</p>
          <ul>
            <li><strong>Damage System:</strong> Implemented a flexible damage calculation system that calculates damage based on various factors such as status effects, player velocity, and combo hits.</li>
            <li><strong>Combo Attack System:</strong> Developed a modular setup allowing quick implementation for any combo attack animations on any character. Utilizes AnimNotifies for combo timing windows and hitscan, simplifying content creation.</li>
            <li><strong>Parry Ability:</strong> Created a parry mechanic (similar to Deadlock) where players can stun an opponent with a well-timed parry if hit by a melee attack during the parry window. Cooldown times for this ability are determined by if the parry was successful or not.</li>
          </ul>
        </div>

        <div className="accomplishment-group">
          <h3>Animation</h3>
          <ul>
            <li><strong>Motion Matching (GASP):</strong> Integrated and expanded upon Unreal’s Game Animation Sample Project as a base for our character locomotion animation.</li>
            <li><strong>Animation Blending:</strong> Layered upper body animation blending on top of motion matching locomotion, allowing combat and ability animations to seamlessly play while in motion.</li>
            <li><strong>Procedural Animation:</strong> Implemented spine transformation based on the character's look direction.</li>
            <li><strong>Mesh Sockets:</strong> Added and tuned sockets on skeletal meshes for cleanly attaching weapons, shields, and VFX.</li>
          </ul>
        </div>
      </div>
    </>
  ); 
}

export default MythboundBody;
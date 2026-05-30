import React from 'react';
import './ProjectBody.css';

function MythboundBody({ project }) {
  return (
    <>
      <div className="project-section">
        <h2>Overview</h2>
        <p>{project.fullDescription}</p>
      </div>

      <div className="project-section">
        <h2>Timeline</h2>
        <p><strong>Start Date:</strong> {project.startDate}</p>
        <p><strong>End Date:</strong> {project.endDate}</p>
      </div>

      <div className="project-section accomplishments">
        <h2>Key Accomplishments</h2>
        
        <div className="accomplishment-group">
          <h3>Gameplay Ability System Integration</h3>
          <ul>
            <li><strong>Character Initialization:</strong> Built logic from CharacterData to handle spawning/attaching weapons and granting abilities/effects (server authoritative and replicated to client).</li>
            <li><strong>Character Selection:</strong> Set up CharacterData structures for the selection screen.</li>
            <li><strong>Tag-Based Input System:</strong> Implemented an input system for abilities that allows automatic linking between InputActions and GameplayTags defined in an InputConfig asset.</li>
            <li><strong>Player Death & Respawn:</strong> Handled player ability and attribute states upon death.</li>
            <li><strong>Stamina System:</strong> Implemented Stamina attributes, movement speed multipliers, and stamina drain for movement abilities.</li>
          </ul>
        </div>

        <div className="accomplishment-group">
          <h3>Combat</h3>
          <ul>
            <li><strong>Combo Attack System:</strong> Developed a modular setup allowing quick implementation for any combo attack animations on any character. Utilizes AnimNotifies for combo timing windows and hitscan, simplifying content creation.</li>
            <li><strong>Parry Ability:</strong> Created a parry mechanic (similar to Deadlock) where players can stun an opponent with a well-timed parry if hit by a melee attack during the parry window. Cooldown times for this ability are determined by if the parry was successful or not.</li>
          </ul>
        </div>

        <div className="accomplishment-group">
          <h3>Animation</h3>
          <ul>
            <li><strong>Motion Matching (GASP):</strong> Integrated and expanded upon Unreal’s Game Animation Sample Project.</li>
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
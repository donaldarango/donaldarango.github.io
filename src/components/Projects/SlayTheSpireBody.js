import React from 'react';
import './ProjectBody.css';
import ZoomableImage from './ZoomableImage';

function SlayTheSpireBody({ project }) {
  return (
    <>
      <div className="project-section accomplishments">
        <h2>Key Accomplishments</h2>
        
        <div className="accomplishment-group">
          <h3>Event Service</h3>
          <p>This system was created to be a centralized manager for registering and handling event callbacks. It went through a few architectural iterations to ensure that it not only was efficient, but also met the requirements for our game and content driven engine. For example, we knew that targeting was going to be a critical part of gameplay, so being able to have custom payload types with different sizes was necessary.</p>
          <p>I learned a lot about callable objects in C++ and the nuances between the different types. For example the usage of std::bind vs a lambda expression and how they each handle copying/referencing arguments. One initial design choice that was made was to store a reference to a the calling object and a member function pointer. This was done to provide flexibility for registering callbacks, however within a content creation perspective only a single type of callback was needed. So a simpler approach of storing a pointer to a base Observer interface was implemented. </p>
        </div>

        <div className="accomplishment-group two-column">
          <div>
            <h3>Turn Manager</h3>
            <p>The Turn Manager was responsible for handling the core battle loop and turn-based gameplay mechanics. While the actual logic behind this system was not incredibly complex, it required careful consideration of timing and state management. The logic driving the battle state was done almost completely in JSON using Actions, which are the atomic content driven commands that determine GameObject behavior within the engine.</p>
            <p>I also had to have an understanding of the game flow along with the many different systems (Enemy, UI, Cards, etc.) that were being developed in parallel. So, communication and an awareness of the team's needs was crucial for the successful integration of this system.</p>
          </div>
          <div>
            <ZoomableImage
            src={`${process.env.PUBLIC_URL}/images/portfolio/SlayTheSpire/STSTurnManagerJSON.png`}
            alt="Slay The Spire Turn Manager"
            caption="Snippet of the JSON logic that gets run during the enemy turn phase."
            />
          </div>
          
        </div>

        <div className="accomplishment-group">
          <h3>Enemy Spawning & Encounters</h3>
          <p>With the 3 week deadline of this project, modular content creation was essential to meet the tight schedule. To support this, I created an easy way to define and manage enemy encounter scenarios. </p>
          <ul>
            <li>Each encounter is defined in a JSON file that specifies the types of enemies and their positions on screen </li>
            <li>Encounters can be referenced within the Turn Manager along with a weight. This mimics the behavior within Slay The Spire where different encounters have higher probabilities of appearing. </li>
            <li>Finally, a boss floor number and boss encounter are defined to ensure a boss is spawned during the last battle of the run.</li>
          </ul>
          <ZoomableImage
            src={`${process.env.PUBLIC_URL}/images/portfolio/SlayTheSpire/STSEncounterJSON.png`}
            alt="Slay The Spire Turn Manager"
            caption="Louse Encounter defined in JSON. This encounter spawns 2 Louse enemies within the battle scene."
            />
        </div>
      </div>
    </>
  ); 
}

export default SlayTheSpireBody;
import React from 'react';
import './ProjectBody.css';
import ZoomableImage from './ZoomableImage';

function RayTracerBody({ project }) {
  return (
    <>
      <div className="project-section accomplishments">
        <h2>Key Features</h2>

        <div className="accomplishment-group">
            <h3>Lighting and Materials</h3>
            <p>The ray tracer uses the Phong lighting model to achieve its lighting effects. This consists of 3 components: ambient, diffuse, and specular which can be configured for each material. It was very cool to see how realistic of a lighting model could be achieved with just these three effects. Here you can see the differences between having various lighting setups:</p>
            <div className="accomplishment-image-group">
                <ZoomableImage
                src={`${process.env.PUBLIC_URL}/images/portfolio/RayTracer/ambient.png`}
                alt="RayTracer Render Screenshot"
                caption="Ambient Lighting Only"
                />
                <ZoomableImage
                src={`${process.env.PUBLIC_URL}/images/portfolio/RayTracer/diffuse.png`}
                alt="RayTracer Render Screenshot"
                caption="Diffuse Lighting Only"
                />
                <ZoomableImage
                src={`${process.env.PUBLIC_URL}/images/portfolio/RayTracer/specular.png`}
                alt="RayTracer Render Screenshot"
                caption="Ambient + Specular Lighting"
                />
            </div>
            <p>
                Lastly, a reflective material was implemented that would do recusive ray tracing to achieve reflections. This was a fun feature to implement and really added to the realism of the rendered scenes.
            </p>
        </div>
        
        <div className="accomplishment-group">
            <h3>Camera</h3>
            <p>The ray tracer includes a configurable camera that allows for different viewing angles and positioning. This feature also supports two projection modes: perspective and orthographic. Additionally, a screen capture feature is available for recording the rendered scenes.</p>
            <div className="accomplishment-image-group">
                <ZoomableImage
                src={`${process.env.PUBLIC_URL}/images/portfolio/RayTracer/RayTracerPerspective.png`}
                alt="RayTracer Render Screenshot"
                caption="Perspective Render"
                />
                <ZoomableImage
                src={`${process.env.PUBLIC_URL}/images/portfolio/RayTracer/RayTracerOrthographic.png`}
                alt="RayTracer Render Screenshot"
                caption="Orthographic Render"
                />
            </div>
        </div>
       
        

        
          
      </div>
    </>
  ); 
}

export default RayTracerBody;
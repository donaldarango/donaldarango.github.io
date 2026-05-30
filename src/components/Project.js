import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import resumeData from '../resumeData';
import ProjectLayout from './ProjectLayout';
import Header from './Header';

function DefaultProjectBody({ project }) {
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

      <div className="project-section">
        <h2>Technologies Used</h2>
        <div className="tech-stack">
          {(project.technologies || []).map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>

      {project.images && project.images.length > 1 && (
        <div className="project-section">
          <h2>Gallery</h2>
          <div className="project-gallery">
            {project.images.map((image, index) => (
              <img key={index} src={image} alt={`${project.name} screenshot ${index + 1}`} className="gallery-image" />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function Project() {
  const { projectId } = useParams();
  const project = resumeData.portfolio.find(p => p.id === projectId);

  const ProjectBody = React.useMemo(() => {
    if (!project) return null;
    return React.lazy(() =>
      import(`./Projects/${project.id}Body`).catch(() => {
        return { default: DefaultProjectBody };
      })
    );
  }, [project]);

  return (
    <>
      <ProjectLayout project={project}>
        {ProjectBody ? (
          <React.Suspense fallback={<div style={{ padding: '40px', textAlign: 'center' }}>Loading project details...</div>}>
            <ProjectBody project={project} />
          </React.Suspense>
        ) : null}
      </ProjectLayout>
    </>
  );
}

export default Project;

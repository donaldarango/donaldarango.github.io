import React, { Component } from 'react';
import { useParams, Link } from 'react-router-dom';
import resumeData from '../../resumeData';
import '../Project.css';

class Mythbound extends Component {
  render() {
    const project = resumeData.portfolio.find(p => p.id === "Mythbound");

    if (!project) {
      return (
        <section id="project-detail">
          <div className="project-container">
            <h2>Project not found</h2>
            <Link to="/" className="back-button">← Back to Home</Link>
          </div>
        </section>
      );
    }

    const isVideo = project.videourl && project.videourl.match(/\.(mp4|webm|ogg|mov)$/i);

    return (
      <section id="project-detail">
        <div className="project-container">
          <Link to="/" className="back-button">← Back to Home</Link>
          
          <div className="project-header">
            <h1>{project.name}</h1>
            <p className="project-role">{project.role}</p>
          </div>

          <div className="project-hero-media">
            {isVideo ? (
              <video 
                className="project-hero-video" 
                controls
                autoPlay 
                muted
              >
                <source src={project.videourl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={project.imgurl} alt={project.name} className="project-hero-image" />
            )}
          </div>

          <div className="project-content">
            <div className="project-main">
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
                  {project.technologies && project.technologies.map((tech, index) => (
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
            </div>

            <div className="project-sidebar">
              <div className="project-info-card">
                <h3>Project Tags</h3>
                <div className="tags-list">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-info-card">
                <h3>Quick Links</h3>
                <div className="project-links">
                  {project.link_url && (
                    <a href={project.link_url} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      Visit Project
                    </a>
                  )}
                  {project.github_url && (
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="project-link-btn github">
                      GitHub Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default Mythbound;

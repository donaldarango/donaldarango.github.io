import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';
import './ProjectLayout.css';

function ProjectLayout({ project, children }) {
  if (!project) {
    return (
      <section id="project-detail">
        <div className="project-container">
          <h2>Project not found</h2>
          <Link to="/" className="back-button">
            ← Back to Home
          </Link>
        </div>
      </section>
    );
  }

  const videoUrl = project.bannerVideourl || project.videourl;
  const imageUrl = project.bannerImgurl || project.imgurl;
  const isVideo = videoUrl && videoUrl.match(/\.(mp4|webm|ogg|mov)$/i);
  const isGif = videoUrl && videoUrl.toLowerCase().endsWith('.gif');

  return (
    <section id="project-detail">
      <nav id="nav-wrap" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100, background: '#333' }}>
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
        <ul id="nav" className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li className="current"><Link to="/#portfolio">Projects</Link></li>
        </ul>
      </nav>

      <div className="project-container">
        <div className="project-hero-media layout-hero-media">
          {isVideo ? (
            <video className="project-hero-video layout-hero-video" autoPlay muted loop playsInline>
              <source src={`${process.env.PUBLIC_URL}/${videoUrl}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : isGif ? (
            <img src={`${process.env.PUBLIC_URL}/${videoUrl}`} alt={project.name} className="project-hero-image layout-hero-image" />
          ) : imageUrl ? (
            <img src={`${process.env.PUBLIC_URL}/${imageUrl}`} alt={project.name} className="project-hero-image layout-hero-image" />
          ) : (
            <div className="project-hero-placeholder layout-hero-image"></div>
          )}
          
          <div className="hero-overlay"></div>
          
          {project.logoImgurl && (
            <div className="hero-logo-container">
              <img src={`${process.env.PUBLIC_URL}/${project.logoImgurl}`} alt={`${project.name} Logo`} className="hero-logo" />
            </div>
          )}
        </div>

        <div className="project-header layout-header">
          <h1 className="layout-title">{project.name}</h1>
          <p className="project-role layout-role">{project.role} {
            project.developer && (
              <span>at {project.developer}</span>
            )
          }</p>
          {project.teamSize && (
            <p className="project-team-size layout-team-size" style={{ marginBottom: '0.5rem', color: '#888' }}>
              Team Size: {project.teamSize}
            </p>
          )}
          {(project.startDate || project.endDate) && (
            <p className="project-dates layout-dates" style={{ marginBottom: '1.5rem', color: '#888' }}>
              {project.startDate} {project.startDate && project.endDate && '-'} {project.endDate}
            </p>
          )}
          
          
          <div className="tags-list layout-tags-list">
            {(project.tags || []).map((tag, index) => (
              <span key={index} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>

          {project.projectType && (
            <p className="project-type layout-type">
              {project.projectType}
            </p>
          )}

          {project.fullDescription && (
            <p className="project-description layout-description">
              {project.fullDescription}
            </p>
          )}

        </div>

        <div className="project-content layout-content">
          <div className="project-main layout-main">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectLayout;
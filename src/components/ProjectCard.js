import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

export default class ProjectCard extends Component {
  render() {
    const { projectData } = this.props;
    const tags = projectData.tags || [];
    const mediaUrl = projectData.videourl || projectData.cardImgurl;
    const isVideo = projectData.videourl && projectData.videourl.match(/\.(mp4|webm|ogg|mov)$/i);

    return (
      <div className="project-card">
        <div className="project-card-wrapper">
          <Link to={`/projects/${projectData.id}`} className="project-link">
            <div className="project-media">
              {isVideo ? (
                <video 
                  className="project-video" 
                  autoPlay 
                  muted 
                  loop
                  onMouseOver={(e) => e.target.play()}
                  onMouseOut={(e) => e.target.pause()}
                >
                  <source src={mediaUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={mediaUrl} alt={projectData.name} className="project-image" />
              )}
            </div>
          </Link>

          <div className="project-info">
            <h3 className="project-title">{projectData.name}</h3>
            {projectData.developer && (
              <h4 className="project-developer" >
                Devloped by: {projectData.developer}
              </h4>
            )}
          </div>
          
          <div className="project-tags-container">
            <div className="tags-list">
              {tags.map((tag, index) => (
                <div key={index} className="tag-chip">
                  <span className="tag-text">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
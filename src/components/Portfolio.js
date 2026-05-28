import React, { Component } from 'react';
import ProjectCard from './ProjectCard'

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Projects</h1>
          <div id="portfolio-wrapper" className="project-cards-grid">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <ProjectCard key={item.id} projectData={item}/>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
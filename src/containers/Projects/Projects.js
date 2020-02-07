import React, { Component } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import { projects } from '../../data/projectsData';

class Projects extends Component {

  render() {
    const projectsList = projects.map((project) =>
      <div className="col-1-of-3 u-margin-bottom-hudge" key={project.title} data-test='project' >
        <div className="projects__project">
          <Gallery images={project.images} />
          <div className="projects__project-description">
            <div className="heading-tertiary">
              <h3 className="heading-tertiary__text u-margin-bottom-small">
                {project.title}
              </h3>
            </div>
            <p className="projects__project-text u-margin-bottom-small">{project.describe}</p>
            <div className="technologies u-margin-bottom-small">
              {project.technologies.map((technology) => technology)}
            </div>
            <a className="btn btn__secondary" href={project.githubLink}>See on Github &rarr;</a>
          </div>
        </div>
      </div>)

    return (
      <section className="projects">
        <div className="heading-secondary u-padding-top-huge u-margin-bottom-hudge">
          <h2 className="heading-secondary__text">Projects</h2>
        </div>
        <div className="row">
          {projectsList.reverse()}
        </div>
      </section>
    );
  }
}

export default Projects;
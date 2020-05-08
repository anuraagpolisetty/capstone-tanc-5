import React, { Component } from 'react';
import tile from '../img/TileIcon.png';
import './css/Project.css';

class Projects extends Component {

  render() {
    let heading = "ADS Dashboard"

    return(
      <div className="page">
        <div className="projects">
          <div className="project-1">
            <div className='tile-area'>
              <a href ="https://andert97.shinyapps.io/SurveyDashboardTool" target="blank_">
                <img src={tile} alt="ADS Project tile"></img>
              </a>
            </div>
            <div className="project-1-text">
              <h2 className='project-1-header'>{heading}</h2>
              <p>Currently, our project timeline has finished and we have handed 
                off the maintenance to our sponsor, the City of Seattle. You can view the current status
                of our project <a href="https://andert97.shinyapps.io/SurveyDashboardTool"><strong>here</strong></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects

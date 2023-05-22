import React from "react";

const Project = ({ projectImage, projectButtonLink, projectButtonText }) => {
  return (
    <div className="projectSubContainer">
      <div className="projectWrapper">
        <img src={projectImage} alt="" className="projectImage" />
        <a href={projectButtonLink}>
          <button className="projectButton">{projectButtonText}</button>
        </a>
      </div>
    </div>
  );
};

export default Project;

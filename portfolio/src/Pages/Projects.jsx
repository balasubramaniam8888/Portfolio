import React from 'react'

function Projects() {
  
  const projects = [
    {
      name: "REACT MARKDOWN FILE CREATOR",
      description: "THIS APP IS USED TO CREATE AND MODIFIY REACT MD FILES",
      technologies: ["REACT","BOOTSTRAP","NODEJS","EXPRESSJS"],
      link: "https://capstone-project-five-sand.vercel.app/"
    },
    // {
    //   name: "Project 2",
    //   description: "This is a description for project 2.",
    //   technologies: ["React", "Bootstrap"],
    //   link: "https://example.com/project2"
    // },
    // Add more projects as needed
  ];
  
  
  
  
  return (
    <div className="container mt-5 ">
    <h2 className=' display-6'>My Projects</h2>
    <div className="row mt-5 border-black">
      {projects.map((project, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title display-6">{project.name}</h5>
              <p className="card-text ">{project.description}</p>
              <p className="card-text">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Projects
import React from "react";
import './About.css'
import { Link, useNavigate } from "react-router-dom";




function About() {
  
  const navigate = useNavigate();
  
  return (
    <>
      <div className="container mt-5">
        <div className=" row">
          <h1 className=" display-5 border-bottom border-black">About Me <i class="bi bi-arrow-down"></i></h1>
          <div className="col  mt-5  p-5">
            <p className="display-4">
              " Well Qualified mechanical engineer with 2 years of work
              experience interested to learn javascript ,So recently completed
              my M_E_R_N Stack Development now looking for a job opportunity"...
            </p>
          </div>
        </div>
        <div className=" row">
          <div className="col-5  mt-5 display-3 d-flex justify-content-between p-3  link">
            <a href="https://www.linkedin.com/in/balasubramaniam8888" target="_blank">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/balasubramaniam8888" target="_blank">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://white-josselyn-77.tiiny.site/" target="_blank">
            <i class="bi bi-file-earmark-person"></i>
            </a>
          </div>
          <div className="row mt-5 ">
       
           </div>
        </div>
           
   
    
    
    
    
      </div>
    </>
  );
}

export default About;

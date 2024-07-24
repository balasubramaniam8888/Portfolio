import React from "react";
import './Skills.css'

function Skills() {
  return (
 <>
   <div className="container mt-5 ">
      <h2 className=" display-6  heading">My Skills  <i class="bi bi-arrow-down"></i></h2>
      <div className="mb-3 mt-5">
        <h4 className=" display-6">HTML</h4>
        <div className="progress ">
          <div className="progress-bar custom-progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
            60%
          </div>
        </div>
      </div>
      <div className="mb-3 mt-5">
        <h4 className=" display-6">CSS</h4>
        <div className="progress">
          <div className="progress-bar custom-progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
            70%
          </div>
        </div>
      </div>
      <div className="mb-3 mt-5">
        <h4 className=" display-6">JAVASCRIPT</h4>
        <div className="progress">
          <div className="progress-bar custom-progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
            80%
          </div>
        </div>
      </div>
      <div className="mb-3 mt-5">
        <h4 className=" display-6">REACT</h4>
        <div className="progress">
          <div className="progress-bar custom-progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
            60%
          </div>
        </div>
      </div>
      <div className="mb-3 mt-5">
        <h4 className=" display-6">NODE JS</h4>
        <div className="progress">
          <div className="progress-bar custom-progress-bar" role="progressbar" style={{ width: '55%'  }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
            55%
          </div>
        </div>
      </div>
      <div className="mb-3 mt-5">
        <h4 className=" display-6">EXPRESS JS</h4>
        <div className="progress">
          <div className="progress-bar custom-progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            50%
          </div>
        </div>
      </div>
      <div className="mb-3 mt-5">
        <h4 className=" display-6">BOOTSTRAP</h4>
        <div className="progress">
          <div className="progress-bar custom-progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
            60%
          </div>
        </div>
      </div>
      {/* Add more skills as needed */}
    </div>
    </>
  );
}

export default Skills;

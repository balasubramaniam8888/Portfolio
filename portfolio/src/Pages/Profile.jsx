import React from "react";
import img from "./img8.jpg";
function Profile() {
  return (
    <>
      <div className="container mt-5 mb-5 ">
        <div className="row">
          <div className="col-8  py-5">
            <h1 className="display-6">HI,I'am BALASUBRAMANIAM</h1>
            <h3 className="mt-5 display-6">MERN STACK DEVELOPER</h3>
            <p className="mt-5 display-6">
              Logical and Result-Driven Full Stack Developer Dedicated to
              Building And Optimizing User-Focused Websites and Applications.{" "}
            </p>
          </div>

          <div className="col image">
            <img src={img} alt="profileimg"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

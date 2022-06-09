import React from "react";
import remove2 from "../img/remove2.png";

const About = () => {
  return (
    <>
      <div class="container-about">
        <div class="row">
          <div class="container-fluid">
            <div class="title-content">
              <h1 class="title-two">About me</h1>
            </div>
          </div>
          <div class="col-lg-5 col-sm-12">
            <div class="content-profile">
              <img class="profile" src={remove2} />
            </div>
            <div class="icons pt-4">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-telegram"></i>
              <i class="fa-brands fa-medium"></i>
            </div>
          </div>
          <div class="col-lg-7 col-sm-12 content-aboutMe">
            <p class="text-two">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley.
              <ul class="list">
                <li>Illustration Artist</li>
                <li>3D Modeler</li>
                <li>Graphic Designer</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

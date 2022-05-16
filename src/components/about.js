import React from "react";
import remove from "../img/remove.png";

const About = () => {
  return (
    <>
      <div class="container-about">
        <div class="row">
          <div class="col-lg-4 col-sm-12 content-profile">
            <img class="profile" src={remove} />
          </div>
          <div class="col-lg-7 col-sm-12 content-aboutMe">
            <h1 class="title-two">About me</h1>
            <p class="text-two">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
            <ul class="list">
              <li>Illustration Artist</li>
              <li>3D Modeler</li>
              <li>Graphic Designer</li>
            </ul>
          </div>
        </div>
        <div class="social col-lg-4 col-sm-12 pt-5">
          <div class="icons d-flex">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-discord"></i>
            <i class="fa-brands fa-telegram"></i>
            <i class="fa-brands fa-medium"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
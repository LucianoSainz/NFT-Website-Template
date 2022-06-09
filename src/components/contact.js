import React from "react";
import logoBackery from "../img/logoBackery.jpg";
import logoOpensea from "../img/logoOpensea1.jpg";
const Contact = () => {
  return (
    <>
      <div class="container-contact">
        <div class="row">
          <div class="container-fluid">
            <div class="title-content">
              <h1 class="title-two">Contact</h1>
            </div>
          </div>

          <div class="col-lg-5 col-sm-12 contact">
            <div class="contact-form">
              <form>
                <input
                  type="text"
                  class="form-control mt-5"
                  id="name"
                  placeholder="Name: Raphael Lord"
                ></input>
                <input
                  type="email"
                  class="form-control mt-4"
                  id="email"
                  placeholder="Email: raphaelLord@gmail.com"
                ></input>
                <textarea
                  rows="5"
                  class="form-control mt-4"
                  placeholder="Messaje: Hi I need more information about the new NFT collection. Please contact me thank you."
                ></textarea>
                <div class="content-button d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary mt-5 mb-5">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-7 col-sm-12 contact-content">
            <ul class="list-two">
              <li>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting.
              </li>
              <li>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </li>
              <li>
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book
              </li>
            </ul>
            <div class="partner-content">
              <h2 class="partner-title">Partners</h2>
              <img class="partner" src={logoBackery} />
              <img class="partner" src={logoOpensea} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

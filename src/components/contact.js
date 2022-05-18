import React from "react";

const Contact = () => {
  return (
    <>
      <div class="container-contact">
        <div class="row">
          <div class="content-title">
            <h1 class="title-three pt-4">Contact</h1>
          </div>
          <div class="col-lg-6 contact">
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
                <button type="submit" class="btn btn-primary mt-5">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div class="col-lg-7 contact-content">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

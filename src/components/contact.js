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
              <input type="text" class="form-control mt-5" id="name"></input>
              <input type="email" class="form-control mt-4" id="email"></input>
              <textarea class="form-control mt-4"></textarea>
              <div class="content-button d-flex justify-content-center">
                <button type="submit" class="btn btn-primary mt-5">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

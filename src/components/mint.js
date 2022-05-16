import React from "react";
import superhero1 from "../img/superhero1.jpg";

const Mint = () => {
  return (
    <>
      <div class="container-mint">
        <div class="content-title">
          <h1 class="title-three pt-4">Mint</h1>
        </div>
        <div class="row">
          <div class="col-lg-6 col-sm-12 pt-4">
            <div class="card-one mx-auto">
              <img src={superhero1} />
            </div>
          </div>
          <div class="col-lg-6 col-sm-12 pt-5 content-buy">
            <h1 class="title-four">Limited 500 NFTS</h1>
            <h2 class="title-five">Price</h2>
            <p class="price">0.02 ETH</p>
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One NFT</option>
              <option value="2">Two NFT</option>
            </select>
            <div class="content-botton d-flex justify-content-center">
              <button type="button" class="btn btn-success">
                Buy (Mint)
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mint;

import React from "react";
import superhero1 from "../img/superhero1.jpg";

const Mint = () => {
  return (
    <>
      <div class="container-mint">
        <div class="row">
          <div class="container-fluid">
            <div class="title-content">
              <h1 class="title-two">Mint</h1>
            </div>
          </div>

          <div class="col-lg-6 col-sm-12">
            <div class="card-one">
              <img class="nft" src={superhero1} />
            </div>

            <h2 class="about-nft">About NFT</h2>
            <ul class="list-mint">
              <li>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting.
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting.
              </li>
            </ul>
          </div>
          <div class="col-lg-6 col-sm-12  content-buy">
            <div class="content">
              <h1 class="title-four">Limited 500 NFTS</h1>
              <h2 class="title-five">Price</h2>
              <p class="price">0.02 ETH</p>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One NFT</option>
                <option value="2">Two NFT</option>
              </select>
              <div class="content-botton d-flex justify-content-center">
                <button type="button" class="btn btn-success mb-5">
                  Buy (Mint)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mint;

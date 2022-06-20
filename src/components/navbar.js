import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse  justify-content-end"
          id="navbarTogglerDemo02"
        >
          <ul class="navbar-nav mb-2 me-5 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#mint">
                Mint
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <button class="btn btn-outline-success" type="submit">
              My NFT
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

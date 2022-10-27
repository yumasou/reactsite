import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav postion-relative">
      <ul className="list-group">
        <li className="list-grup-item">
          <div className="nav-top position-absolute d-flex">
            <div className="col-lg-6 text-white d-flex ps-4">EmvatoMarket</div>
            <div className="col-lg-6 text-white d-flex justify-content-end pe-5">
              <button className="btn btn-primary h-75 mt-1">Buy Now</button>
            </div>
          </div>
        </li>
        <li className="list-grup-item  ">
          <div className="nav-bot position-absolute row w-100 mx-0">
            <div className="col-lg-3  h-100 text-left text-lg-center fw-bold">
              <a href="#" className="text-decoration-none text-muted text-cor">
                <span>
                  <img
                    src="https://kayzer.netlify.app/img/core-img/logo.png"
                    alt="logo"
                  />
                </span>
                Kayzer
              </a>
            </div>
            <div className="col-lg-7 h-100">
              <nav class="navbar navbar-expand-sm  ">
                <div class="container-fluid">
                  <a href="#" class="navbar-brand"></a>
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to="/Home" class="nav-link active">
                        Home
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/About" class="nav-link active">
                        About us
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/Service" class="nav-link active">
                        Service
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/FAQ" class="nav-link active">
                        FAQ
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/Contact" class="nav-link active">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-lg-2  ">
              <button className="btn btn-primary mt-2">LOGIN!</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;

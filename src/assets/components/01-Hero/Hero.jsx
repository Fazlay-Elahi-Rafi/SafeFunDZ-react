import React from "react";
import { Link } from "react-router-dom";

import { FaArrowUpLong } from "react-icons/fa6";

import header from "../../img/header-img.png";
import hand from "../../img/hand-fist.png";

export default function Hero() {
  return (
    <>
      <header className="hero">
        <div className="container p-sm-0">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-7 col-lg-6">
              <h1 className="global__title global__title-dark">
                Fundraising for the people and cause you care
              </h1>
              <p className="global__desc">
                We provide a trusted donation channel for peoples of worldwide
                to support people and organizers. Crowdfunding is a way to raise
                money for an individual or organization by collecting donations
                through strangers and more.
              </p>
              <Link to="/donate" className="global__btn">
                Get Started
                <FaArrowUpLong className="global__btn-arrow" />
              </Link>
            </div>
            <div className="col-12 col-md-5 p-0 text-end d-none d-md-block position-relative">
              <img className="img-fluid" src={header} alt="image" />
              <div className="hero__hand">
                <img className="img-fluid" src={hand} alt="hand image" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

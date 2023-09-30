import React from "react";
import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa6";

import errorImg from "../img/404.png";
import Banner from "../components/Global/Banner";

export default function Error() {
  return (
    <>
      <Banner cls="banner" bannerTitle="error" bannerTxt="back home" />
      <div className="error">
        <div className="container p-sm-0">
          <div className="row text-center">
            <img className="img-fluid" src={errorImg} alt="404 image" />
            <div className="">
              <h2 className="global__heading error__m">
                Whoops! That page doesn’t exist.
              </h2>
              <p className="global__desc">
                The page you requested could not be found
              </p>
              <Link to="/" className="global__btn text-decoration-none">
                <FaArrowLeft className="me-2" /> Back To Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

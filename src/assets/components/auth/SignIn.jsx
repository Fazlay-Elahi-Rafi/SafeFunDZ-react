import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import signIn from "../../img/signIn.png";
import signUp from "../../img/signUp.png";
import element from "../../img/element-4.png";
import googleG from "../../img/google-g.svg";

import SignProps from "./SignRepeat";

export default function SignIn() {
  function ArrowRight(props) {
    const { className, style, onClick } = props;
    return (
      <div className="sign__card-icons sign__card-icons--right">
        <FaArrowRight
          className="global__arrow-default sign__card-icons--i"
          onClick={onClick}
        />
      </div>
    );
  }
  function ArrowLeft(props) {
    const { className, style, onClick } = props;
    return (
      <div className="sign__card-icons sign__card-icons--left">
        <FaArrowLeft
          className="global__arrow-default sign__card-icons--i"
          onClick={onClick}
        />
      </div>
    );
  }

  var settings = {
    centerMode: false,
    arrows: true,
    slidesToShow: 1,
    fade: true,
    autoplay: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };
  return (
    <>
      <div className="sign mt-4 mt-sm-5 mt-lg-0">
        <div className="sign__layer">
          <div className="container-fluid p-0">
            <div className="d-md-flex justify-content-between position-relative h-100">
              <div className="col-11 col-sm-10 col-md-8 col-lg-5 col-xl-4 m-auto sign__position">
                <div className="sign__form">
                  <h5 className="sign__small d-none d-lg-block">
                    Copyright © 2023 Company Name
                  </h5>
                  <form className="">
                    <h4 className="sign__form-heading">Sign In</h4>
                    <div className="">
                      <div className="sign__form-mb">
                        <label className="sign__form-label" htmlFor="email">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control sign__form-input"
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="">
                        <label className="sign__form-label" htmlFor="password">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control sign__form-input"
                          id="password"
                          type="password"
                          placeholder="Create a Password"
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3 mb-4">
                        <label className="sign__form-rem">
                          <input
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                          />
                          <span className="sign__form-rem--checkmark sign__text"></span>
                          Remember for 30 days
                        </label>
                        <div className="">
                          <a className="sign__form-link" href="#">
                            Forgot password
                          </a>
                        </div>
                      </div>
                      <div className="col-10 col-sm-12 m-auto">
                        <div className="">
                          <button className="sign__btn sign__btn-in form-control">
                            log in
                          </button>
                        </div>
                        <div className="">
                          <button className="sign__btn sign__btn-up form-control">
                            <img className="pe-3" src={googleG} alt="image" />
                            Sign in with Google
                          </button>
                        </div>
                      </div>
                      <div className="">
                        <p className="sign__text text-center">
                          Don’t have an account?{" "}
                          <Link className="sign__form-link" to="/signup">
                            Sign up
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="">
                  <img
                    className="sign__card-element d-none d-xxl-block"
                    src={element}
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-6 d-none d-lg-block">
                <Slider {...settings}>
                  <SignProps img={signIn} text="Sign in to save and continue" />
                  <SignProps img={signUp} text="Sign in to save and continue" />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

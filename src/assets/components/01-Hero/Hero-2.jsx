import React from "react";

import star from "../../img/8start.svg";
import dots from "../../img/dots.svg";
import circul from "../../img/circul-1.png";
import headerImg from "../../img/header-img-2.png";
import line from "../../img/line.svg";
import userFrame1 from "../../img/user-frame-1.png";
import userFrame2 from "../../img/user-frame-2.png";
import userFrame3 from "../../img/user-frame-3.png";

export default function HeroTwo() {
  return (
    <>
      <header class="hero__two">
        <div class="container p-sm-0">
          <div class="row align-items-center justify-content-between">
            <div class="col-12 col-lg-6">
              <div class="d-flex align-items-center">
                <img class="hero__two-i" src={star} alt="icon" />
                <h4 class="global__rise">Raise your Hand to the right place</h4>
              </div>
              <h1 class="global__title global__title-dark">
                Help the people make big changes and help this world.
              </h1>
              <p class="global__desc">
                Crowdfunding is a way to raise money for an individual or
                organization by collecting donations through family, friends
                strangers and more.
              </p>
              <a href="donate.html" class="global__btn">
                Get Started
                <i class="fa-solid fa-arrow-up-long global__btn-arrow"></i>
              </a>
            </div>
            <div class="col-12 col-md-5 d-none d-lg-block">
              <img class="img-fluid" src={dots} alt="dots image" />
              <div class="hero__frame">
                <img
                  class="img-fluid hero__frame-circle"
                  src={circul}
                  alt="circle image"
                />
                <img
                  class="img-fluid hero__frame-person"
                  src={headerImg}
                  alt="image"
                />

                <img class="hero__frame-lines" src={line} alt="image" />
                <div class="hero__frame-team">
                  <h5 class="hero__frame-team--text global__text">
                    Join our volunteers
                  </h5>
                  <div class="hero__four-frame--users">
                    <img
                      class="hero__four-frame--users---img1"
                      src={userFrame1}
                      alt="image"
                    />
                    <img class="" src={userFrame2} alt="image" />
                    <img
                      class="hero__four-frame--users---img3"
                      src={userFrame3}
                      alt="image"
                    />
                    <div class="">
                      <h5 class="hero__four-frame--num">12+</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

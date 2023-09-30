import React from "react";

import box from "../../img/box.svg";
import dollar from "../../img/dollar-s.svg";
import hands from "../../img/hands.svg";
import donation from "../../img/donation-2.svg";

export default function Collection() {
  return (
    <>
      <div className="collection">
        <div className="container p-sm-0">
          <div className="row">
            <div className="collection__list">
              <div className="collection__list-items">
                <div className="collection__list-icon">
                  <img
                    className="collection__list-icon--img"
                    src={box}
                    alt="icon"
                  />
                </div>
                <p className="collection__text">
                  <span className="num__counter">6500</span>+ Donation
                </p>
              </div>
              <div className="collection__list-items">
                <div className="collection__list-icon">
                  <img
                    className="collection__list-icon--img"
                    src={dollar}
                    alt="icon"
                  />
                </div>
                <p className="collection__text">
                  $<span className="num__counter">60</span>k+ Found Raised
                </p>
              </div>
              <div className="collection__list-items">
                <div className="collection__list-icon">
                  <img
                    className="collection__list-icon--img"
                    src={hands}
                    alt="icon"
                  />
                </div>
                <p className="collection__text">
                  <span className="num__counter">250</span>+ Volunteer
                </p>
              </div>
              <div className="collection__list-items">
                <div className="collection__list-icon">
                  <img
                    className="collection__list-icon--img"
                    src={donation}
                    alt="icon"
                  />
                </div>
                <p className="collection__text">
                  <span className="num__counter">110</span>+ Project
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

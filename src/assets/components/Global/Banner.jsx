import React from "react";
import { Link } from "react-router-dom";

import element from "../../img/element-3.svg";
import polygon from "../../img/polygon.svg";

export default function Banner(props) {
  return (
    <>
      <div className={props.cls}>
        <div className="banner__overlay">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center text-lg-start">
                <h1 className="global__title global__title-dark text-capitalize">
                  {props.bannerTitle}
                </h1>
                <ul className="banner__ul">
                  <li className="banner__ul-list p-0">
                    <Link className="banner__ul-link" to="/">
                      home
                    </Link>
                  </li>
                  <li className="banner__ul-list">{props.bannerTxt}</li>
                </ul>
              </div>
            </div>
            <div className="banner__element d-none d-lg-block">
              <img src={element} alt="image" />
            </div>
            <div className="banner__polygon d-none d-lg-block">
              <img src={polygon} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

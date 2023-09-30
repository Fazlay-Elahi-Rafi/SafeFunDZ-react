import React from "react";

export default function SignProps(props) {
  return (
    <>
      <div className="sign__slider-item">
        <div className="card sign__card h-100">
          <img
            className="img-fluid h-100 sign__card-img"
            src={props.img}
            alt="image"
          />
          <div className="card-img-overlay sign__card-overlay">
            <div className="position-relative">
              <h5 className="global__heading global__heading-w sign__card-title">
                {props.text}
              </h5>
              <p className="sign__card-p">{props.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

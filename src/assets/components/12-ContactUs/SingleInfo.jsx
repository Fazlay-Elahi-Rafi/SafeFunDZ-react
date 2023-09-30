import React from "react";

export default function SingleInfo(props) {
  return (
    <>
      <div className={props.class}>
        <div className="social__body">
          <div className="">
            <div className={props.classTwo}></div>
            <div className="social__i">
              <img className="" src={props.imgSvg} alt={props.imgSvg} />
            </div>
            <div className="">
              <h4 className="social__text">{props.text}</h4>
              <p className="social__number">{props.info}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

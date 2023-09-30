import React from "react";
import { Link } from "react-router-dom";

import location from "../../img/location.svg";

export default function singleCase({
  fade,
  link,
  img,
  tag,
  address,
  title,
  persent,
  wdt,
  boxIcon,
  price,
  dollarIcon,
  goal,
  m,
}) {
  return (
    <>
      <article
        className={`card cases__card m-${m}`}
        data-aos={fade}
        data-aos-duration="1000"
      >
        <div className="cases__card-img">
          <Link to={link}>
            <img className="img-fluid w-100" src={img} alt={title} />
          </Link>
          <h4 className="cases__card-tag">{tag}</h4>
        </div>
        <div className="card-body px-3 px-sm-4">
          <div className="d-flex mb-2">
            <img className="cases__card-i" src={location} alt="icon" />
            <span className="cases__card-location">{address}</span>
          </div>
          <div className="">
            <Link to={link} className="cases__card-title">
              {title}
            </Link>
          </div>
          <div className="cases__card-range">
            <p className="global__desc m-0">Founded: {persent}%</p>
            <div className="progress cases__card-progress">
              <div
                className="progress-bar cases__card-progress--bar"
                role="progressbar"
                style={{ width: wdt }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="cases__card-range--bottom">
              <div className="d-flex align-items-center cases__card-range--bottom---m gap-2">
                <img
                  className="cases__card-range--dollar"
                  src={boxIcon}
                  alt="icon"
                />
                <span className="cases__card-range--price">
                  Rasied: ${price}
                </span>
              </div>
              <div className="d-flex align-items-center cases__card-range--bottom---m gap-2">
                <img
                  className="cases__card-range--dollar"
                  src={dollarIcon}
                  alt="icon"
                />
                <span className="cases__card-range--price">goal: ${goal}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

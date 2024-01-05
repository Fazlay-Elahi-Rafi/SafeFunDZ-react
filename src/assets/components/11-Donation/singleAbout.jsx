import React from "react";
import { Link } from "react-router-dom";

export default function SingleAbout({
  rowClass,
  colClass,
  colClass2,
  imgClass,
  imgClass2,
  divClass,
  divClass2,
  imgOne,
  imgTwo,
  heading,
  descOne,
  descTwo,
}) {
  return (
    <>
      <div className={rowClass}>
        <div
          className={colClass}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className={divClass}>
          <img className={imgClass} src={imgOne} alt={imgOne} />
          <div className={divClass2}>
            <img
              className={`img-fluid ${imgClass2}`}
              src={imgTwo}
              alt={imgTwo}
            />
          </div>
          </div>
        </div>
        <div
          className={colClass2}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h3 className="global__text">about us</h3>
          <h2 className="donation__heading global__heading">{heading}</h2>
          <p className="donation__desc global__desc mb-3">{descOne}</p>
          <p className="donation__desc global__desc m-0">{descTwo}</p>
          <div className="mt-5">
            <Link to="/donate" className="donation__btn global__btn">
              donate now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

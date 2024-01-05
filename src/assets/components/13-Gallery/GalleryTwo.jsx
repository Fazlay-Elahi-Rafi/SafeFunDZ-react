import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import venobox from "venobox/dist/venobox.min.js";
import "venobox/dist/venobox.min.css";

import img from "../../img/g-1.png";
import img2 from "../../img/g-2.png";
import img3 from "../../img/g-3.png";
import img4 from "../../img/g-4.png";

export default function GalleryTwo() {
  const path = window.location.pathname === "/home-3";

  useEffect(() => {
    new venobox({
      selector: ".gallery__body-layer",
      numeration: true,
      infinigall: true,
      spinner: "rotating-plane",
    });
  }, []);

  return (
    <>
      <div
        className={`gallery global__py pb-0 ${
          path ? "global__white" : ""
        }`}
      >
        <div className="container p-sm-0">
          <div className="row">
            <div
              className="col-12 col-md-9 col-lg-7 text-center m-auto"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <h3 className="global__text">Our Gallery</h3>
              <h2 className="global__heading">
                We create events for children and gather for support
              </h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 col-md-6 gallery__body-two"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="mb-4">
                <Link
                  className="gallery__body-layer d-block"
                  data-gall="gallery01"
                  to={img}
                >
                  <img
                    className="img-fluid w-100 gallery__body-two--img"
                    src={img}
                    alt={img}
                  />
                </Link>
              </div>
            </div>
            <div
              className="col-12 col-md-6 gallery__body-two"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="row">
                <div className="col-12 col-sm-6 mb-4 mb-md-0">
                  <Link
                    className="gallery__body-layer d-block"
                    data-gall="gallery01"
                    to={img2}
                  >
                    <img
                      className="img-fluid w-100 gallery__body-two--img"
                      src={img2}
                      alt={img2}
                    />
                  </Link>
                </div>
                <div className="col-12 col-sm-6 mb-4 mb-md-1">
                  <Link
                    className="gallery__body-layer d-block"
                    data-gall="gallery01"
                    to={img3}
                  >
                    <img
                      className="img-fluid w-100 gallery__body-two--img"
                      src={img3}
                      alt={img3}
                    />
                  </Link>
                </div>
                <div className="col-12 col-sm-12 mt-md-3 mt-xxl-4">
                  <Link
                    className="gallery__body-layer d-block"
                    data-gall="gallery01"
                    to={img4}
                  >
                    <img
                      className="img-fluid w-100 gallery__body-two--img"
                      src={img4}
                      alt={img4}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

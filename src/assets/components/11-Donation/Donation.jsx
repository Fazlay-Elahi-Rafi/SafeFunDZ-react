import React, { useEffect } from "react";

import venobox from "venobox/dist/venobox.min.js";
import "venobox/dist/venobox.min.css";

import { FaCirclePlay } from "react-icons/fa6";

import shape from "../../img/shape.png";
import addImg from "../../img/add-img-6.png";
import element from "../../img/element.png";

export default function Donation() {
  useEffect(() => {
    new venobox({
      selector: ".video__card",
    });
  }, []);
  return (
    <>
      <div className="donation global__py">
        <div className="container p-sm-0">
          <div className="row align-items-center justify-content-between">
            <div
              className="col-12 col-md-9 col-lg-5"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 className="global__text">about us</h3>
              <h2 className="donation__heading global__heading">
                Helping each other can make world better
              </h2>
              <p className="donation__desc global__desc mb-3">
                The evidence is clear. The ability to learn to read is the
                single most significant factor to allow a child to reach their
                full potential.
              </p>
              <p className="donation__desc global__desc m-0">
                At USA Reads, we strive to close the literacy gap and see kids
                discover a love and habit of reading. We are specifically
                focused on children from African American, Latino, ethnic
                minorities and low-income backgrounds.
              </p>
              <div className="donation__mt">
                <div className="">
                  <a
                    href="donate.html"
                    className="donation__btn global__btn m-0"
                  >
                    donate now
                  </a>
                </div>
                <div className="donation__video">
                  <a
                    className="donation__video-btn video__card venobox"
                    data-vbtype="video"
                    href="https://youtu.be/ts8d8kKjHD4"
                  >
                    <FaCirclePlay className="donation__video-waves--player" />
                    <div className="donation__video-waves">
                      <div className="donation__video-waves--div donation__video-waves--one"></div>
                      <div className="donation__video-waves--div donation__video-waves--two"></div>
                      <div className="donation__video-waves--div donation__video-waves--three"></div>
                    </div>
                  </a>
                  <h4 className="donation__video-text global__desc">
                    Watch Our Activity
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-6 d-none d-lg-block position-relative"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="donation__img d-flex justify-content-center">
                <img
                  className="img-fluid donation__img-shape"
                  src={shape}
                  alt={shape}
                />
                <img className="img-fluid" src={addImg} alt={addImg} />
              </div>
              <img className="donation__element2" src={element} alt={element} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

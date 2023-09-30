import React, { useEffect } from "react";

import venobox from "venobox/dist/venobox.min.js";
import "venobox/dist/venobox.min.css";

import { GalleryData } from "../../data/indexData";
import SingleGallery from "./SingleGallery";

export default function Gallery() {
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
      {GalleryData.length >= 9 ? (
        <div className="gallery global__py pt-0">
          <div className="container">
            <div className="row">
              <div className="gallery__body">
                {GalleryData &&
                  GalleryData.map((data, index) => (
                    <SingleGallery key={index} link={data.img} img={data.img} />
                  ))}
              </div>
              <div className="col-12 text-center">
                <button className="gallery__btn">see more</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        window.location.reload()
      )}
    </>
  );
}

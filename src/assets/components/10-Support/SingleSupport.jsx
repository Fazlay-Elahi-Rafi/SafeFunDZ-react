import React from "react";

export default function SupportProps({ fade, img, title, desc }) {
  return (
    <>
      <div
        className="col-md-6 col-xl-3"
        data-aos={fade}
        data-aos-duration="1000"
      >
        <div className="support__card global__white">
          <div className="global__icon support__card-icon">
            <img
              src={img}
              alt="image"
              style={{ width: "32px", height: "32px" }}
            />
          </div>
          <div className="">
            <h3 className="support__card-heading global__heading">{title}</h3>
            <p className="support__card-desc global__desc mt-3 mb-0">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

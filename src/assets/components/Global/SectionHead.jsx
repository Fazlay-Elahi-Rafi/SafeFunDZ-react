import React from "react";

export default function SectionHead({ text, desc, parentClass }) {
  return (
    <>
      <div className={`row ${parentClass}`}>
        <div
          className="col-12 col-md-9 col-lg-6 text-center m-auto"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h3 className="global__text">{text}</h3>
          <h2 className="global__heading">{desc}</h2>
        </div>
      </div>
    </>
  );
}

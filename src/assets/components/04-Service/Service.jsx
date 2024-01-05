import React from "react";

import ModalProps from "./SingleModal";
import { Services } from "../../data/indexData";

export default function Service({ parentClass, childClass }) {
  return (
    <>
      <div className={`service ${parentClass}`}>
        <div className="container p-sm-0">
          <div className="row">
            <div
              className="col-12 col-md-9 col-lg-6 text-center mx-auto global__mb"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <h2 className="global__heading m-0">Our Features Services</h2>
              <p className="about__desc global__desc mt-3 mb-0">
                We believe that we can save more life with you.
              </p>
            </div>
          </div>
          <div className="row">
            {Services.length > 0 &&
              Services.map((service) => {
                return (
                  <ModalProps
                    key={service.id}
                    {...service}
                    parentClass="col-md-6 pe-md-4"
                    itemClass={`service__card ${childClass}`}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

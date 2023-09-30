import React from "react";

import SupportProps from "./SingleSupport";

import waterDrop from "../../img/water-icon.svg";
import Health from "../../img/health-icon.svg";
import Cap from "../../img/cap-icon.svg";
import Heart from "../../img/heart-icon.svg";

export default function Support() {
  return (
    <>
      <div className="support">
        <div className="container p-sm-0">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="global__text global__text-w">What we do?</h3>
              <h2 className="support__heading global__heading global__heading-w">
                We Are In A Mission To Help The Helpless
              </h2>
            </div>
          </div>

          <div className="row">
            <SupportProps
              img={waterDrop}
              fade="fade-left"
              title="Clean Water"
              desc="An organization’s mission statement should clearly communicate"
            />
            <SupportProps
              img={Health}
              fade="fade-left"
              title="Healthy Food"
              desc="An organization’s mission statement should clearly communicate"
            />
            <SupportProps
              img={Cap}
              fade="fade-right"
              title="Free Education"
              desc="An organization’s mission statement should clearly communicate"
            />
            <SupportProps
              img={Heart}
              fade="fade-right"
              title="Medical Facilities"
              desc="An organization’s mission statement should clearly communicate"
            />
          </div>
        </div>
      </div>
    </>
  );
}

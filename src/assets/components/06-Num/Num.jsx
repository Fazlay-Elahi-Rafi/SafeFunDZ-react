import React from "react";

export default function Num() {
  return (
    <>
      <div className="num">
        <div className="container p-sm-0">
          <div className="num__body">
            <div className="">
              <h4 className="num__body-digit">
                <span className="num__one">6500</span>+
              </h4>
              <p className="num__body-text">Donation</p>
            </div>
            <div className="">
              <h4 className="num__body-digit">
                $<span className="num__two">60</span>+
              </h4>
              <p className="num__body-text">Found Raised</p>
            </div>
            <div className="">
              <h4 className="num__body-digit">
                <span className="num__three">250</span>
              </h4>
              <p className="num__body-text">Volunteer</p>
            </div>
            <div className="">
              <h4 className="num__body-digit">
                <span className="num__four">110</span>
              </h4>
              <p className="num__body-text">project</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

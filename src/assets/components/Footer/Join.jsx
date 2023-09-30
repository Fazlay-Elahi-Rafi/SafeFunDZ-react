import React from "react";

import element from "../../img/BG-Element.png";

export default function Join() {
  return (
    <>
      <div className="join">
        <div className="container p-sm-0">
          <div className="row">
            <div className="card join__card p-0">
              <img
                src={element}
                className="img-fluid join__card-img"
                alt="image"
              />
              <div className="card-img-overlay join__card-layer">
                <div className="col-11 col-md-7">
                  <h3 className="join__text global__text">
                    Become a volenteer
                  </h3>
                  <h2 className="join__heading global__heading">
                    Join Your hand with us for a better life and future
                  </h2>
                  <button className="join__card-layer--btn global__btn">
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

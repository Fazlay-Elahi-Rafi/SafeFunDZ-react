import React from "react";

import location from "../../img/location-i.svg";
import phone from "../../img/phone-icon.svg";
import mail from "../../img/mail-icon.svg";

import SingleInfo from "./SingleInfo";

export default function Info() {
  return (
    <>
      <div className="social global__py pt-0">
        <div className="container p-sm-0">
          <div className="row justify-content-center gap-5 gap-lg-0">
            <SingleInfo
              class="col-12 col-sm-10 col-lg-4"
              classTwo="social__body--loc"
              imgSvg={location}
              text="Our Location"
              info="4517 Washington Ave. Manchester Kentucky 39495"
            />
            <SingleInfo
              class="col-12 col-sm-10 col-lg-4"
              classTwo="social__body--con"
              imgSvg={phone}
              text="Our Contact"
              info="+(548) 1234-456-7890"
            />
            <SingleInfo
              class="col-12 col-sm-10 col-lg-4"
              classTwo="social__body--mail"
              imgSvg={mail}
              text="Send Mail"
              info="info.furndz@gmail.com"
            />
            {/* <div className="col-12 col-sm-10 col-lg-4">
              <div className="social__body">
                <div className="">
                  <div className="social__body--loc"></div>
                  <div className="social__i">
                    <img
                      className=""
                      src="./assets/img/location-i.svg"
                      alt="image"
                    />
                  </div>
                  <div className="">
                    <h4 className="social__text">Our Location</h4>
                    <p className="social__number">
                      4517 Washington Ave. Manchester Kentucky 39495
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-lg-4">
              <div className="social__body">
                <div className="">
                  <div className="social__body--con"></div>
                  <div className="social__i">
                    <img
                      className=""
                      src="./assets/img/phone-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div className="">
                    <h4 className="social__text">Our Contact</h4>
                    <p className="social__number">+(548) 1234-456-7890</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-lg-4">
              <div className="social__body">
                <div className="">
                  <div className="social__body--mail"></div>
                  <div className="social__i">
                    <img
                      className=""
                      src="./assets/img/mail-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div className="">
                    <h4 className="social__text">Send Mail</h4>
                    <p className="social__number">info.furndz@gmail.com</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

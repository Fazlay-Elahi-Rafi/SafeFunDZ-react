import React from "react";

import img from "../../img/draw-img.png";
import donation from "../../img/donation.svg";
import campain from "../../img/campain.svg";
import money from "../../img/money.svg";

import OrgList from "./OrgList";

export default function Org() {
  return (
    <>
      <div className="org global__py pt-0">
        <div className="container p-sm-0">
          <div className="row">
            <div
              className="col-12 col-md-9 col-lg-7 text-center mx-auto global__mb"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <h2 className="global__heading m-0">
                The mission and org of our organization.
              </h2>
              <p className="org__desc global__desc mt-3 mb-0">
                We provide a trusted platform for peoples of worldwide to
                support people and organizers.
              </p>
            </div>
          </div>
          <div className="row align-items-xl-center">
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <ul className="p-0 m-0">
                <OrgList
                  icon={campain}
                  name="Manage your campaigns"
                  desc="Track how many people signed the petition by week, month,year."
                />
                <OrgList
                  icon={donation}
                  name="Collecting donation"
                  desc="Campaign owners can set up to receive donations from supporters."
                />
                <OrgList
                  icon={money}
                  name="Withdraw your money"
                  desc="Withdraw your money to bank account or Paypal easily with few set up."
                />
              </ul>
            </div>
            <div
              className="col-lg-6 d-none d-sm-block mt-5 mt-lg-0"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img className="img-fluid" src={img} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

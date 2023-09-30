import React from "react";

import addImg_1 from "../../img/add-1.png";
import addImg_2 from "../../img/add-2.png";
import check from "../../img/check.svg";

export default function About() {
  return (
    <>
      <div className="about global__py">
        <div className="container p-sm-0">
          <div className="row">
            <div className="col-6 my-auto my-xl-0">
              <div
                className="d-none d-lg-flex gap-4"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="about__image">
                  <img className="img-fluid" src={addImg_1} alt="image" />
                </div>
                <div className="about__image">
                  <img className="img-fluid" src={addImg_2} alt="image" />
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-9 col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h2 className="about__heading global__heading">
                We are the Powerful, Free Fundraising Platform
              </h2>
              <p className="about__desc global__desc mb-3">
                Amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
                accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
                sed risus. Maecenas eget condimentum velit, sit amet feugiat
                risus sem sollicitudin lectus.
              </p>
              <p className="about__desc global__desc m-0">
                Consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                est a, mattis tellus. Sed dignissim, metus nec fringilla
                accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
                sed risus. Maecenas eget condimentum.
              </p>
              <div className="">
                <ul className="about__list p-0">
                  <li>
                    <img
                      className="cases__card-range--dollar p-1 me-2"
                      src={check}
                      alt="icon"
                    />
                    <span className="global__desc m-0">Start your campaigns</span>
                  </li>
                  <li>
                    <img
                      className="cases__card-range--dollar p-1 me-2"
                      src={check}
                      alt="icon"
                    />
                    <span className="global__desc m-0">Share with friends</span>
                  </li>
                  <li>
                    <img
                      className="cases__card-range--dollar p-1 me-2"
                      src={check}
                      alt="icon"
                    />
                    <span className="global__desc m-0">Manage Donations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";

import newImg1 from "../../img/news-img-1.png";
import newImg2 from "../../img/news-img-2.png";
import newImg3 from "../../img/news-img-3.png";

export default function News() {
  return (
    <>
      <div className="news global__py global__white pt-0">
        <div className="container p-sm-0">
          <div className="row">
            <div className="col-xl-8 d-flex d-xl-block justify-content-center mb-4 mb-xl-0">
              <div className="news__card">
                <div className="news__card-img">
                  <Link to="/blogDetails">
                    <img
                      className="img-fluid news__card-img--round"
                      src={newImg1}
                      alt="image"
                    />
                  </Link>
                  <h4 className="news__card-tag">Education</h4>
                </div>
                <div className="card-body px-0 py-2 pe-sm-4">
                  <div className="">
                    <span className="news__card-span">October 25, 2023</span>
                  </div>
                  <div className="">
                    <Link to="/blogDetails" className="news__card-title">
                      Everything You Need to Know About Crowdfunding for Kids
                      With Cancer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 d-sm-flex d-xl-block justify-content-center gap-5">
              <div className="news__card mb-4 mb-sm-0 mb-lg-4">
                <div className="news__card-img">
                  <Link to="/blogDetails">
                    <img className="img-fluid" src={newImg2} alt="image" />
                  </Link>
                  <h4 className="news__card-tag">health</h4>
                </div>
                <div className="card-body px-0 py-2">
                  <div className="">
                    <span className="news__card-span">October 25, 2023</span>
                  </div>
                  <div className="">
                    <Link to="/blogDetails" className="news__card-title">
                      The study changed the health of a generation
                    </Link>
                  </div>
                </div>
              </div>
              <div className="news__card">
                <div className="news__card-img">
                  <Link to="/blogDetails">
                    <img className="img-fluid" src={newImg3} alt="image" />
                  </Link>
                  <h4 className="news__card-tag">Donation</h4>
                </div>
                <div className="card-body px-0 py-2">
                  <div className="">
                    <span className="news__card-span">October 25, 2023</span>
                  </div>
                  <div className="">
                    <Link to="/blogDetails" className="news__card-title">
                      How to Write Your GoFundMe Fundraiser Story
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

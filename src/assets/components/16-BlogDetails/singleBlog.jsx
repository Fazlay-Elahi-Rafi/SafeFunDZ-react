import React from "react";
import { Link } from "react-router-dom";

import img from "../../img/blog_detail-1.png";
import user from "../../img/user-13.png";
import icon from "../../img/share-icon.svg";
import BlogDesc from "./blogDesc";
import BlogSocialLink from "./blogSocialLink";

export default function SingleBlog() {
  return (
    <>
      <div className="blog global__py global__white pt-0">
        <div className="container p-sm-0">
          <div className="row">
            <div className="col-12 col-md-9 col-lg-8 text-center m-auto">
              <div className="mt-3">
                <div className="mt-5">
                  <Link to="/donate" className="global__btn">
                    Donation
                  </Link>
                  <span className="global__text blog__detail-text">
                    December 01, 2023
                  </span>
                </div>
              </div>
              <h2 className="global__heading blog__detail-m">
                How to Donate on Giving Tuesday: 10 Ways to Help
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="blog__detail-head">
              <img
                className="img-fluid blog__detail-head--image"
                src={img}
                alt="image"
              />
              <div className="col-12">
                <div className="col-xl-8 m-auto position-relative">
                  <h3 className="global__heading blog__detail-m blog__detail-head--heading">
                    Many Children Are Suffering A Lot For Food.
                  </h3>
                  <div className="d-md-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        className="img-fluid blog__detail-head--user"
                        src={user}
                        alt="image"
                      />
                      <div className="">
                        <h5 className="blog__detail-head--name">
                          Darrell Steward
                        </h5>
                        <p className="blog__detail-head--tag">Healthy Food</p>
                      </div>
                    </div>
                    <div className="mt-3 mt-md-0">
                      <ul className="blog__detail-head--list">
                        <li>10 min read</li>
                        <li>Last Update on 20th Sept. 2023</li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex mt-5">
                    {/* <!-- Blog_Deetail Social Left --> */}
                    <div className="d-none d-lg-block position-absolute blog__detail-social">
                      <h4 className="blog__detail-social--text">share</h4>
                      <ul className="p-0">
                        <BlogSocialLink fb="f" tw="tw" din="in" ins="ins" />
                      </ul>
                    </div>
                    <BlogDesc />
                  </div>
                  <div className="">
                    {/* <!-- Blog_Deetail Social Bottom --> */}
                    <div className="blog__detail-social">
                      <p className="blog__detail-social--para">
                        Like this article? Spread the word
                      </p>
                      <ul className="d-flex gap-4 pb-4 px-0">
                        <li className="m-0">
                          <Link to="/donate">
                            <img className="img-fluid" src={icon} alt="icon" />
                          </Link>
                        </li>
                        <BlogSocialLink
                          parentClass="m-0"
                          fb="f"
                          tw="tw"
                          din="in"
                        />
                      </ul>
                    </div>
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

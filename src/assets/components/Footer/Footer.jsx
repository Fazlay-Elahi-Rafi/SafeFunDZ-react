import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import logo from "../../img/logo-footer.png";
import Join from "./Join";

export default function Footer() {
  return (
    <>
      <Join />
      <div className="footer">
        <div className="container p-sm-0">
          <div className="row justify-content-between">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <Link to="/">
                <img className="img-fluid" src={logo} alt="logo" />
              </Link>
              <p className="global__desc footer__desc">
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore sed do eiusmod.
              </p>
              <div className="footer__social">
                <ul className="footer__social-ul m-0 p-0">
                  <li>
                    <Link
                      className="footer__social-link"
                      to="https://www.facebook.com/"
                    >
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer__social-link"
                      to="https://linkedin.com"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer__social-link"
                      to="https://www.instagram.com"
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer__social-link"
                      to="https://twitter.com"
                    >
                      <FaTwitter />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-2 d-md-flex justify-content-center my-5 my-md-0">
              <div className="">
                <h4 className="footer__sub">explore</h4>
                <ul className="footer__list m-0 p-0">
                  <li>
                    <Link className="footer__list-item" to="/about">
                      about us
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__list-item" to="#">
                      pages
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__list-item" to="/blog">
                      blog
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__list-item" to="/faqs">
                      Privecy & Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-2 mb-5 mb-md-0 mt-md-5 mt-lg-0">
              <div className="">
                <h4 className="footer__sub">Donate</h4>
                <ul className="footer__list m-0 p-0">
                  <li>
                    <Link className="footer__list-item" to="/donate">
                      Give Donation
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__list-item" to="/volunteer">
                      Become Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__list-item" to="#">
                      Child Sponsorship
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__list-item" to="/donate">
                      Other Ways to Give
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 mt-md-5 mt-xl-0">
              <h4 className="footer__sub">Subscribe Newsletter</h4>
              <p className="global__desc footer__desc">
                Join our newsletter to stay updated about our latest news and
                articles.
              </p>
              <form className="d-flex position-relative">
                <input
                  className="footer__inp form-control"
                  type="text"
                  placeholder="Enter your email"
                />
                <button className="global__btn footer__inp-btn">
                  subscribe
                </button>
              </form>
            </div>
          </div>
          <hr className="footer__border" />
          <div className="row">
            <div className="col-12 text-center">
              <p className="footer__bottom p-0 m-0">
                Copyright © 2023 Company Name and Address here
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

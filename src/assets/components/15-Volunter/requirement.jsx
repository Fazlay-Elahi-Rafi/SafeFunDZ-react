import React from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";

import volunteer from "../../img/volunteer.png";
import check from "../../img/check.svg";

export default function Requirement() {
  return (
    <>
      <div
        className="col-12 col-lg-6"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img className="img-fluid" src={volunteer} alt="image" />
        <div className="volunteer__requirement">
          <h3 className="volunteer__text">Our Requirements</h3>
          <p className="volunteer__desc">
            consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
            mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus
            sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas
            eget condimentum velit, sit amet feugiat lectus.
          </p>
          <p className="volunteer__desc mt-2">
            consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
            mattis tellus. Sed dignissim, metus nec fringilla accumsan,
          </p>
          <div className="">
            <ul className="volunteer__list">
              <li>
                <img className="img-fluid" src={check} alt="image" />
                Volunteers need to be able to a strong work ethic.
              </li>
              <li className="mb-0">
                <img className="img-fluid" src={check} alt="image" />
                Volunteers need to be able to a strong work ethic.
              </li>
            </ul>
            <ul className="volunteer__list mb-0">
              <li>
                <div className="">
                  <FaPhoneAlt className="volunteer__list-i" />
                </div>
                <div className="">
                  <span className="volunteer__list-sub">Call Anytime</span>
                  <h5 className="volunteer__list-content">+91 (000) 4569</h5>
                </div>
              </li>
              <li className="mb-0">
                <div className="">
                  <IoIosMailOpen className="volunteer__list-i" />
                </div>
                <div className="">
                  <span className="volunteer__list-sub">Email Us</span>
                  <h5 className="volunteer__list-content">
                    info.furndz@gmail.com
                  </h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

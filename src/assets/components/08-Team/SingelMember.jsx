import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function SingelMember({
  fade,
  img,
  fb,
  din,
  ins,
  tw,
  link,
  name,
  category,
}) {
  return (
    <>
      <div className="team__card" data-aos={fade} data-aos-duration="1000">
        <div className="team__card-head">
          <img className="img-fluid" src={img} alt={name} />
          <div className="team__card-head--social">
            <ul className="">
              <li>
                <Link className="team__card-head--link" to={fb}>
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link className="team__card-head--link" to={din}>
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link className="team__card-head--link" to={ins}>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link className="team__card-head--link" to={tw}>
                  <FaTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <Link to={link} className="team__user">
            {name}
          </Link>
          <p className="team__cate">{category}</p>
        </div>
      </div>
    </>
  );
}

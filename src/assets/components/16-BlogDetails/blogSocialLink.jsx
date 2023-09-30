import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function BlogSocialLink({ parentClass, din, tw, fb, ins }) {
  return (
    <>
      <li className={parentClass}>
        <Link to="https://www.facebook.com/">
          <FaFacebookF className={`blog__detail-social--${fb}`} />
        </Link>
      </li>
      <li className={parentClass}>
        <Link to="https://twitter.com">
          <FaTwitter className={`blog__detail-social--${tw}`} />
        </Link>
      </li>
      <li className={parentClass}>
        <Link to="https://linkedin.com">
          <FaLinkedin className={`blog__detail-social--${din}`} />
        </Link>
      </li>
      {ins ? (
        <li className={parentClass}>
          <Link to="https://linkedin.com">
            <FaInstagramSquare className={`blog__detail-social--${ins}`} />
          </Link>
        </li>
      ) : (
        ""
      )}
    </>
  );
}

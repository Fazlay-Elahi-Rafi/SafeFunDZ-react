import React from "react";
import { FaStar } from "react-icons/fa";

export default function CardProp({ desc, img, name, status }) {
  return (
    <>
      <article className="testimonial__card">
        <div className="">
          <ul className="testimonial__card-ul">
            <li>
              <FaStar className="testimonial__card-star" />
            </li>
            <li>
              <FaStar className="testimonial__card-star" />
            </li>
            <li>
              <FaStar className="testimonial__card-star" />
            </li>
            <li>
              <FaStar className="testimonial__card-star" />
            </li>
            <li>
              <FaStar className="testimonial__card-star" />
            </li>
          </ul>
        </div>
        <div className="">
          <p className="global__desc testimonial__card-desc">{desc}</p>
          <div className="d-flex align-items-center">
            <img className="img-fluid" src={img} alt={img} />
            <div className="ps-3">
              <h4 className="testimonial__card-name">{name}</h4>
              <span className="testimonial__card-type">{status}</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

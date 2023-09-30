import React from "react";
import { Link } from "react-router-dom";

export default function SingleBlog({
  fade,
  link,
  img,
  text,
  date,
  title,
  desc,
}) {
  return (
    <>
      <article
        className="card blog__card"
        data-aos={fade}
        data-aos-duration="1000"
      >
        <Link to={link}>
          <img className="img-fluid w-100" src={img} alt={img} />
        </Link>
        <div className="card-body px-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="">
              <span className="blog__card-span">{text}</span>
            </div>
            <hr className="blog__card-line" />
            <div className="">
              <span className="blog__card-span">{date}</span>
            </div>
          </div>
          <div className="">
            <Link to={link} className="blog__title">
              {title}
            </Link>
            <p className="global__desc blog__desc">{desc}</p>
          </div>
        </div>
      </article>
    </>
  );
}

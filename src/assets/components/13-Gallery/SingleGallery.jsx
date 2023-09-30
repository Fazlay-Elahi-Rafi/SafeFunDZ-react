import React from "react";

import { Link } from "react-router-dom";

export default function SingleGallery(props) {
  return (
    <>
      <Link
        className="gallery__body-layer"
        data-gall="gallery01"
        to={props.link}
      >
        <img className="img-fluid" src={props.img} alt={props.img} />
      </Link>
    </>
  );
}

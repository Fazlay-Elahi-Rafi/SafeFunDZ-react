import React from "react";

export default function ModalProps({
  parentClass,
  itemClass,
  fade,
  img,
  title,
  desc,
}) {
  return (
    <>
      <article className={parentClass}>
        <div className={itemClass} data-aos={fade} data-aos-duration="1000">
          <div className="global__icon service__card-icon">
            <img
              src={img}
              style={{ width: "32px", height: "32px" }}
              alt={img}
            />
          </div>
          <div className="">
            <h3 className="service__card-heading global__heading">{title}</h3>
            <p className="service__card-desc global__desc mt-3 mb-0">{desc}</p>
          </div>
        </div>
      </article>
    </>
  );
}

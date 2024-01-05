import React from "react";

import circul from "../../img/circul-2.png";
import addImg from "../../img/add-img.png";
import element from "../../img/element.png";
import add from "../../img/add-img-2.png";

import SingleAbout from "./singleAbout";

export default function AboutUs() {
  const path = window.location.pathname === "/home-3";

  return (
    <>
      <div className={`donation global__py ${!path ? "global__white" : "pt-0"}`}>
        <div className="container p-sm-0">
          {!path ? (
            <SingleAbout
              rowClass="row align-items-center"
              colClass="col-6 d-none d-lg-block"
              colClass2="col-12 col-md-9 col-lg-6"
              imgClass="donation__img-circle"
              imgClass2="donation__img-person"
              divClass="donation__img donation__img-m"
              imgOne={circul}
              imgTwo={addImg}
              heading="We belive your donation will help to survive people"
              descOne="The evidence is clear. The ability to learn to read is the
                single most significant factor to allow a child to reach their
                full potential. American, Latino, ethnic minorities and
                low-income backgrounds."
              descTwo="At USA Reads, we strive to close the literacy gap and see kids
                discover a love and habit of reading. We are specifically
                focused on children from African American, Latino, ethnic
                minorities and low-income backgrounds."
            />
          ) : (
            <SingleAbout
              rowClass="row align-items-center justify-content-between"
              colClass="col-6 d-none d-lg-block position-relative"
              colClass2="col-12 col-md-9 col-lg-5"
              divClass2="donation__img d-flex justify-content-center"
              imgClass="donation__element"
              imgOne={element}
              imgTwo={add}
              heading="Helping each other can make world better"
              descOne="The evidence is clear. The ability to learn to read is the
                single most significant factor to allow a child to reach their
                full potential. American, Latino, ethnic minorities and
                low-income backgrounds."
              descTwo="At USA Reads, we strive to close the literacy gap and see kids
                discover a love and habit of reading. We are specifically
                focused on children from African American, Latino, ethnic
                minorities and low-income backgrounds."
            />
          )}
        </div>
      </div>
    </>
  );
}

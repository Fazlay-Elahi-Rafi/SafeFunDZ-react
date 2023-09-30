import React from "react";

import img from "../../img/single-case.png";

export default function EducationLeft() {
  return (
    <>
      <div className="col-12 col-lg-8">
        <div className="col-md-10">
          <h2 className="global__heading mb-0">
            Ensure Education for every poor children
          </h2>
          <p className="education__price global__desc">
            <span className="education__price-show">$18,610</span> of $10,000
            raised
          </p>
        </div>
        <div className="">
          <div className="card education__card">
            <div className="education__card-img">
              <img className="img-fluid w-100" src={img} alt="image" />
              <h4 className="education__card-tag">Education</h4>
            </div>
            <div className="">
              <p className="education__para education__para-mt">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue and equal
                blame belongs to those who fail in their duty through weakness
                of will, which is the same as saying through shrinking from toil
                and pain.
              </p>
              <p className="education__para my-3">
                These cases are perfectly simple and easy to distinguish. In a
                free hour, when our power of choice is untrammelled and when
                nothing prevents our being able to do what we like best, every
                pleasure is to be welcomed and every pain avoided.
              </p>
              <p className="education__para">
                But in certain circumstances and owing to the claims of duty or
                the obligations of business it will frequently occur that
                pleasures have to be repudiated and annoyances accepted. The
                wise man therefore always holds in these matters to this
                principle of selection: he rejects pleasures.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="education__headline">
            We want to ensure the education for the kids.
          </h3>
          <p className="education__para education__para-mb">
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure.
          </p>
          <div className="">
            <ul className="education__list">
              <li className="education__para">
                The wise man therefore always holds in these matters.
              </li>
              <li className="education__para">
                In a free hour, when our power of choice and when nothing.
              </li>
              <li className="education__para">
                Else he endures pains to avoid worse pains.
              </li>
              <li className="education__para">
                We denounce with righteous indignation and dislike men.
              </li>
              <li className="education__para">
                Which is the same as saying through.
              </li>
            </ul>
          </div>
          <p className="education__para">
            But in certain circumstances and owing to the claims of duty or the
            obligations of business it will frequently occur that pleasures have
            to be repudiated and annoyances accepted. The wise man therefore
            always holds in these matters to this principle of selection: he
            rejects pleasures.
          </p>
        </div>
      </div>
    </>
  );
}

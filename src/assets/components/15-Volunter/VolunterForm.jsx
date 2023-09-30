import React from "react";

import question from "../../img/question.svg";
import { FormInput } from "../Global/FormItems";

export default function VolunterForm() {
  return (
    <>
      <div
        className="col-12 col-lg-6 pe-lg-4 mb-5 mb-lg-0"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <form action="#" method="POST" className="form mt-0 border-0">
          <div className="form__mb">
            <div className="d-sm-flex col-12">
              <div className="col-sm-6 pe-sm-3">
                <FormInput
                  parentClass="form__ul-label form__ul-label--lg"
                  name="first name"
                  img={question}
                  star="*"
                  inputType="text"
                  inputId="nameInp"
                  placeholder="First Name"
                />
              </div>
              <div className="col-sm-6 ps-sm-3 mt-4 mt-sm-0">
                <FormInput
                  parentClass="form__ul-label form__ul-label--lg"
                  name="last name"
                  img={question}
                  star="*"
                  inputType="text"
                  inputId="lastname"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="d-sm-flex col-12 mt-4">
              <div className="col-sm-6 pe-sm-3">
                <FormInput
                  parentClass="form__ul-label form__ul-label--lg"
                  name="Email Address"
                  img={question}
                  star="*"
                  inputType="email"
                  inputId="emailInp"
                  placeholder="Email Address"
                />
              </div>
              <div className="col-sm-6 ps-sm-3 mt-4 mt-sm-0">
                <FormInput
                  parentClass="form__ul-label form__ul-label--lg"
                  name="Phone"
                  img={question}
                  star="*"
                  inputType="tel"
                  inputId="phnInp"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="col-12 mt-4">
              <FormInput
                parentClass="form__ul-label form__ul-label--lg"
                name="Date of Birth"
                img={question}
                star="*"
                inputType="date"
                inputId="date"
              />
            </div>
            <div className="col-12 mt-4">
              <FormInput
                parentClass="form__ul-label form__ul-label--lg"
                name="Occupation"
                img={question}
                star="*"
                inputType="text"
                inputId="occupation"
                placeholder="Type here"
              />
            </div>
            <div className="col-12">
              <div className="mt-4">
                <label
                  className="form__ul-label form__ul-label--lg ps-0"
                  htmlFor="comment"
                >
                  About Me
                  <span className="ps-2">
                    <img src={question} alt="image" />
                  </span>
                </label>
                <textarea
                  className="form-control form__input"
                  id="comment"
                  cols="30"
                  rows="5"
                  placeholder="Write about somting"
                ></textarea>
              </div>
              <div className="mt-4">
                <input
                  className="donation__btn global__btn"
                  type="submit"
                  value="send message"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

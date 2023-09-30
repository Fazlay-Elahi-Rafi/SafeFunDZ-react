import React from "react";

import dollar from "../../img/dollar-lg-S.svg";
import question from "../../img/question.svg";

import { FormInput, SingleFormItem } from "../Global/FormItems";

export default function Form() {
  return (
    <>
      <form className="form border-0">
        <div className="d-flex align-items-center">
          <img className="form__icon" src={dollar} alt="icon" />
          <p className="form__price">$100</p>
        </div>
        <hr className="form__border" />
        <div className="form__mb">
          <ul className="form__ul">
            <SingleFormItem
              childClass="form__ul-div d-block"
              name="$25"
              inputName="radio"
              inputType="radio"
            />
            <SingleFormItem
              childClass="form__ul-div d-block"
              name="$50"
              inputName="radio"
              inputType="radio"
            />
            <SingleFormItem
              childClass="form__ul-div d-block"
              name="$100"
              inputName="radio"
              inputType="radio"
            />
            <SingleFormItem
              childClass="form__ul-div d-block"
              name="$250"
              inputName="radio"
              inputType="radio"
            />
            <SingleFormItem
              childClass="form__ul-div d-block"
              collapse="collapse"
              collapseExample="#collapseExample"
              name="Custom Amount"
              inputName="radio"
              inputType="radio"
            />
          </ul>
          <div
            className="collapse col-5 col-sm-3 col-lg-2 mt-3"
            id="collapseExample"
          >
            <input
              className="form-control form__input"
              type="number"
              placeholder="$50"
            />
          </div>
        </div>
        <div className="form__mb">
          <ul className="form__ul">
            <SingleFormItem
              parentClass="bg-transparent py-0 ps-0"
              childClass="form__ul-div d-block px-0"
              text="Test Donation"
              inputId="testFive"
              inputName="radio"
              inputType="radio"
              style={{ left: "0" }}
            />
            <SingleFormItem
              parentClass="bg-transparent py-0 ps-0"
              childClass="form__ul-div d-block px-0"
              text="Offline Donation"
              inputId="testFive"
              inputName="radio"
              inputType="radio"
              style={{ left: "0" }}
            />
          </ul>
        </div>
        <div className="form__mb">
          <h4 className="form__heading form__mb">Personal Information</h4>
          <div className="d-sm-flex col-12">
            <div className="col-sm-6 pe-sm-3">
              <FormInput
                parentClass="form__ul-label form__ul-label--lg"
                name="first name"
                star="*"
                img={question}
                inputId="first"
                inputType="text"
                placeholder="First Name"
              />
            </div>
            <div className="col-sm-6 ps-sm-3 mt-4 mt-sm-0">
              <FormInput
                parentClass="form__ul-label form__ul-label--lg"
                name="last name"
                star="*"
                img={question}
                inputId="last"
                inputType="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="">
              <FormInput
                parentClass="form__ul-label form__ul-label--lg"
                name="Email Address"
                star="*"
                img={question}
                inputId="email"
                inputType="email"
                placeholder="Email"
              />
            </div>
            <div className="mt-4">
              <label className="form__ul-label form__ul-label--lg ps-0">
                Comment
                <span className="ps-2">
                  <img src={question} alt="image" />
                </span>
              </label>
              <textarea
                className="form-control form__input"
                id="comment"
                cols="30"
                rows="5"
                placeholder="Leave a Comment"
              ></textarea>
            </div>
            <div className="mt-4 d-flex align-items-center">
              <label className="form__ul-label form__ul-label--pointer ps-0">
                <span className="form__ul-div d-block">
                  <input type="checkbox" id="testSaven" name="check" />
                  <span className="form__ul-label--checkmark form__ul-label--checkmark2"></span>
                  <span className="ps-2">Make this an anonymous donation.</span>
                  <span className="ps-2">
                    <img src={question} alt="image" />
                  </span>
                </span>
              </label>
            </div>
            <div className="">
              <button
                className="btn donation__btn global__btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                type="button"
              >
                donation now
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

import React from "react";

import { FaChevronLeft } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";

import formImg from "../../img/form-img.png";
import svg1 from "../../img/p-i-1.svg";
import svg2 from "../../img/p-i-2.svg";
import svg3 from "../../img/p-i-3.svg";
import svg4 from "../../img/p-i-4.svg";
import svg5 from "../../img/i.svg";
import google from "../../img/google.svg";
import googleLg from "../../img/google-lg.svg";
import shield from "../../img/shield.svg";
import dollar from "../../img/dollar.svg";

import { FormSingleInput, SingleFormItem } from "../Global/FormItems";
import { FormSelectOptions } from "../../data/indexData";

export default function FormModal() {
  return (
    <>
      <div className="modal-content border-0 bg-transparent">
        <form className="form global__white form__pd mt-0">
          <div className="">
            <div className="">
              <button
                className="btn form__return modal__right-close"
                data-bs-dismiss="modal"
                type="button"
              >
                <span>
                  <FaChevronLeft />
                </span>
                <span>Return to fundraiser</span>
              </button>
            </div>
            <div className="d-sm-flex align-items-center form__my">
              <img className="img-fluid form__img" src={formImg} alt="image" />
              <div className="mt-4 mt-sm-0">
                <h4 className="form__small">
                  You're supporting{" "}
                  <a href="#" className="form__small-bold">
                    Essentials Fund
                  </a>
                </h4>
                <h4 className="form__small mb-0">
                  Your donation will benefit{" "}
                  <a href="#" className="form__small-bold">
                    Fundz.org
                  </a>{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="form__icon" style={{ background: "#F2F8F7" }}>
              <img className="" src={dollar} alt="image" />
            </div>
            <p className="form__price">$100</p>
          </div>
          <hr className="form__border" />
          <div className="form__mb">
            <ul className="form__ul">
              <SingleFormItem
                parentClass="form__dark"
                childClass="form__ul-div d-block"
                grandChildClass="form__ul-label--checkmark---left"
                name="$25"
                inputName="price"
                inputType="radio"
              />
              <SingleFormItem
                parentClass="form__dark"
                childClass="form__ul-div d-block"
                grandChildClass="form__ul-label--checkmark---left"
                name="$50"
                inputName="price"
                inputType="radio"
              />
              <SingleFormItem
                parentClass="form__dark"
                childClass="form__ul-div d-block"
                grandChildClass="form__ul-label--checkmark---left"
                name="$100"
                inputName="price"
                inputType="radio"
              />
              <SingleFormItem
                parentClass="form__dark"
                childClass="form__ul-div d-block"
                grandChildClass="form__ul-label--checkmark---left"
                name="$250"
                inputName="price"
                inputType="radio"
              />
              <SingleFormItem
                parentClass="form__dark"
                childClass="form__ul-div d-block"
                collapse="collapse"
                collapseExample="#collapseTwo"
                name="Custom Amount"
                inputName="price"
                inputType="radio"
              />
            </ul>
            <div
              className="collapse col-5 col-sm-3 col-lg-2  mt-3"
              id="collapseTwo"
            >
              <FormSingleInput
                parentClass="form-control form__input"
                type="number"
                placeholder="$50"
              />
            </div>
          </div>
          <div className="">
            <h4 className="form__heading form__mb">Payment method</h4>
            <div className="col-12">
              <div
                className="accordion form__heading-accordion"
                id="accordionExample"
              >
                <div className="accordion-item form__heading-accordion--item">
                  <div
                    className="accordion-heade form__heading-accordion--header d-sm-flex align-items-center justify-content-between pb-3 ps-2 ps-sm-0 pb-sm-0"
                    id="headingOne"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-controls="collapseOne"
                  >
                    <div className="w-100 pb-0">
                      <label className="form__ul-label form__ul-label--pointer">
                        <span className="form__ul-div d-block p-sm-4 pb-0 pb-sm-4">
                          <FaRegCreditCard
                            className="ms-1 me-2"
                            style={{ fontSize: "22px" }}
                          />
                          Credit or debit card
                          <input type="radio" name="payment" />
                          <span
                            className="form__ul-label--checkmark"
                            style={{ left: "4%", top: "38%" }}
                          ></span>
                        </span>
                      </label>
                    </div>
                    <ul className="d-flex gap-2 mt-3 mt-sm-0">
                      <li>
                        <a href="#">
                          <img src={svg1} alt="image" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={svg2} alt="image" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={svg3} alt="image" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={svg4} alt="image" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="d-md-flex col-11 m-auto my-4">
                      <div className="col-md-6">
                        <FormSingleInput
                          parentClass="form-control form__input"
                          inputType="text"
                          placeholder="Card number"
                        />
                      </div>
                      <div className="col-md-3 ps-md-3 mt-4 mt-md-0">
                        <FormSingleInput
                          parentClass="form-control form__input"
                          inputType="date"
                        />
                      </div>
                      <div className="col-md-3 ps-md-3 mt-4 mt-md-0">
                        <FormSingleInput
                          parentClass="form-control form__input"
                          inputType="text"
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                    <div className="col-11 m-auto">
                      <select className="form-select form__input">
                        {FormSelectOptions &&
                          FormSelectOptions.map((opt) => {
                            return opt.cards.map((subOpt, index) => {
                              return (
                                <option
                                  key={index}
                                  defaultValue={subOpt.option}
                                >
                                  {subOpt.option}
                                </option>
                              );
                            });
                          })}
                      </select>
                    </div>
                    <div className="d-sm-flex col-11 m-auto mt-4">
                      <div className="col-sm-6 pe-sm-3">
                        <select className="form-select form__input">
                          {FormSelectOptions &&
                            FormSelectOptions.map((opt) => {
                              return opt.country.map((subOpt, index) => {
                                return (
                                  <option
                                    key={index}
                                    defaultValue={subOpt.option}
                                  >
                                    {subOpt.option}
                                  </option>
                                );
                              });
                            })}
                        </select>
                      </div>
                      <div className="col-sm-6 mt-4 mt-sm-0">
                        <FormSingleInput
                          parentClass="form-control form__input"
                          inputType="text"
                          placeholder="Card number"
                        />
                      </div>
                    </div>
                    <div className="col-sm-7 col-lg-6 me-auto mt-4 ps-4">
                      <label className="form__ul-label form__ul-label--pointer d-flex fw-normal mb-3">
                        <span className="form__ul-div d-block">
                          <input type="checkbox" id="test" name="check" />
                          <span className="form__ul-label--checkmark form__ul-label--checkmark3"></span>
                          Save card for future donations.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="accordion-item form__heading-accordion--item">
                  <div
                    className="accordion-heade form__heading-accordion--header d-sm-flex align-items-center justify-content-between pb-3 ps-2 ps-sm-0 pb-sm-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-controls="collapseThree"
                    id="headingTwo"
                  >
                    <div className="w-100 pb-0">
                      <label
                        // htmlFor="payment"
                        className="form__ul-label form__ul-label--pointer"
                      >
                        <span className="form__ul-div d-block p-sm-4 pb-0 pb-sm-4">
                          <img
                            className="ms-1 me-2"
                            src={google}
                            alt="image"
                            style={{ fontSize: "22px" }}
                          />
                          Google Pay
                          <input type="radio" name="payment" />
                          <span
                            className="form__ul-label--checkmark"
                            style={{ left: "3.4%", top: "38%" }}
                          ></span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="d-md-flex col-11 m-auto my-4">
                      <div className="col-md-6">
                        <FormSingleInput
                          parentClass="form-control form__input"
                          inputType="text"
                          placeholder="Card number"
                        />
                      </div>
                      <div className="col-md-3 ps-md-3 mt-4 mt-md-0">
                        <FormSingleInput
                          parentClass="form-control form__input"
                          inputType="date"
                        />
                      </div>
                      <div className="col-md-3 ps-md-3 mt-4 mt-md-0">
                        <FormSingleInput
                          parentClass="form-control form__input"
                          inputType="text"
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                    <div className="col-11 m-auto">
                      <select className="form-select form__input">
                        {FormSelectOptions &&
                          FormSelectOptions.map((opt) => {
                            return opt.cards.map((subOpt, index) => {
                              return (
                                <option
                                  key={index}
                                  defaultValue={subOpt.option}
                                >
                                  {subOpt.option}
                                </option>
                              );
                            });
                          })}
                      </select>
                    </div>
                    <div className="d-sm-flex col-11 m-auto mt-4">
                      <div className="col-sm-6 pe-sm-3">
                        <select className="form-select form__input">
                          {FormSelectOptions &&
                            FormSelectOptions.map((opt) => {
                              return opt.country.map((subOpt, index) => {
                                return (
                                  <option
                                    key={index}
                                    defaultValue={subOpt.option}
                                  >
                                    {subOpt.option}
                                  </option>
                                );
                              });
                            })}
                        </select>
                      </div>
                      <div className="col-sm-6 mt-4 mt-sm-0">
                        <FormSingleInput
                          parentClass="form-control form__input"
                          inputType="text"
                          placeholder="Card number"
                        />
                      </div>
                    </div>
                    <div className="col-sm-7 col-lg-6 me-auto mt-4 ps-4">
                      <label className="form__ul-label form__ul-label--pointer d-flex fw-normal mb-3">
                        <span className="form__ul-div d-block">
                          <input type="checkbox" id="testTwo" name="check" />
                          <span className="form__ul-label--checkmark form__ul-label--checkmark3"></span>
                          Save card for future donations.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4 form__mb">
            <div className="mt-4">
              <div className="col-sm-11 col-lg-8">
                <label
                  //   htmlFor="check"
                  className="form__ul-label form__ul-label--pointer fw-normal px-2"
                >
                  <span className="form__ul-div d-block">
                    <input type="checkbox" id="testEight" name="check" />
                    <span
                      className="form__ul-label--checkmark form__ul-label--checkmark3"
                      style={{ left: "0" }}
                    ></span>
                    Don't Display my name publicly on the fundraiser.
                    <span className="ps-2">
                      <img src={svg5} alt="image" />
                    </span>
                  </span>
                </label>
              </div>
              <div className="col-sm-10 col-lg-12">
                <label
                  //   htmlFor="check"
                  className="form__ul-label form__ul-label--pointer fw-normal px-2"
                >
                  <span className="form__ul-div d-block">
                    <input type="checkbox" id="testNine" name="check" />
                    <span
                      className="form__ul-label--checkmark form__ul-label--checkmark3"
                      style={{ left: "0" }}
                    ></span>
                    Get occasional marketing updates from Fundz. You may
                    unsubscribe at any time
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <h4 className="form__heading">Your Donation</h4>
            <div className="mt-4">
              <ul className="form__donation">
                <li>
                  Your donation
                  <span>$100.00</span>
                </li>
                <li className="mb-0">
                  Vat (%)
                  <span>0%</span>
                </li>
                <li>
                  <hr className="form__border w-100" />
                </li>
                <li className="mb-0">
                  Total due today
                  <span>$100.00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-10 col-lg-7 mx-auto d-flex justify-content-center">
            <button className="form-control form__btn">
              <img className="img-fluid" src={googleLg} alt="image" />
            </button>
          </div>
          <div className="col-12">
            <h4 className="form__small">
              By continuing, you agree with
              <a href="#" className="form__small-bold">
                GoFundMe terms
              </a>
              and
              <a href="#" className="form__small-bold">
                privacy notice.
              </a>
            </h4>
          </div>
          <hr className="form__border" />
          <div className="d-sm-flex align-items-start form__my mb-0">
            <img className="img-fluid form__shield" src={shield} alt="image" />
            <div className="mt-3 mt-sm-0">
              <h4 className="form__text">Fundz protects your donation</h4>
              <p className="form__small mb-0">
                We guarantee you a full refund for up to a year in the rare case
                that fraud occurs.
                <a href="#" className="form__small-bold">
                  See our Fundz Giving Guarantee.
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

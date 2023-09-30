import React from "react";

import Title from "../components/Global/Title";
import Banner from "../components/Global/Banner";

import FormModal from "../components/14-SingleCase/FormModal";
import Form from "../components/14-SingleCase/form";
import SingleCase from "../components/02-Cases/SingleCase";
import { CasesData } from "../data/indexData";

export default function DonatePage() {
  return (
    <>
      <Title title="SafeFunDz" />
      <Banner cls="banner" bannerTitle="donate now" bannerTxt="donate now" />

      <div className="donate global__py pt-0">
        <div className="container p-sm-0">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="col-md-10">
                <h2 className="global__heading mb-0">Donate Now</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-8">
              <Form />
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered form__dialog">
                  <FormModal />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-8 col-lg-4 mt-5 mt-lg-0">
              {CasesData.length > 0 &&
                CasesData.splice(0, 1).map((data) => {
                  return <SingleCase key={data.id} {...data} m="0" fade="" />;
                })}
              <div className="education__cases">
                <h4 className="education__txt">recent cases</h4>
                <div className="">
                  <ul className="education__cases-list">
                    {CasesData.length > 0
                      ? CasesData.splice(0, 3).map((data, index) => {
                          return (
                            <li key={index}>
                              <a
                                className="education__cases-list--img"
                                href="single-cases.html"
                              >
                                <img
                                  className=""
                                  src={data.img}
                                  alt={data.img}
                                />
                              </a>
                              <div className="">
                                <a
                                  href="single-cases.html"
                                  className="education__cases-list--link"
                                >
                                  {data.title}
                                </a>
                                <p className="education__cases-list--date">
                                  October 25, 2023
                                </p>
                              </div>
                            </li>
                          );
                        })
                      : window.location.reload()}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

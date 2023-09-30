import React, { useState } from "react";

import { BiSearchAlt } from "react-icons/bi";

import { CasesData, CategoryData } from "../../data/indexData";

export default function EducationRight() {
  const [sort, setSort] = useState(false);
  return (
    <>
        <div className="education__search">
          <h4 className="education__txt">search</h4>
          <form
            action="#"
            method="POST"
            className="d-flex position-relative mt-3"
          >
            <input
              className="education__inp form-control"
              type="text"
              placeholder="Enter your email"
            />
            <button className="global__btn education__inp-btn">
              <BiSearchAlt />
            </button>
          </form>
        </div>
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
                          <img className="" src={data.img} alt={data.img} />
                        </a>
                        <div className="">
                          <a
                            href="single-cases.html"
                            className="education__cases-list--link"
                          >
                            {sort
                              ? data.title
                              : `${data.title.substring(0, 35)}...`}
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
        <div className="education__cases">
          <h4 className="education__txt">Categories</h4>
          <div className="">
            <ul className="education__cases-list">
              {CategoryData &&
                CategoryData.map((cate, index) => {
                  return (
                    <li className="education__cases-list--m" key={index}>
                      <a
                        href="#"
                        className="education__cases-list--link education__cases-list--tag"
                      >
                        {cate.category}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
    </>
  );
}

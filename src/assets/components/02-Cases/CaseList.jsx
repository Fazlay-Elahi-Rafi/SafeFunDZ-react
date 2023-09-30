import React from "react";

import SingleCase from "./SingleCase";

import { CasesData } from "../../data/indexData";

export default function CaseList() {
  return (
    <>
      {CasesData.length >= 9 ? (
        <div className="cases global__py pt-0">
          <div className="container p-sm-0">
            <div className="cases__grid">
              {CasesData &&
                CasesData.map((data, index) => (
                  <SingleCase
                    key={index}
                    fade={data.fade}
                    img={data.img}
                    link={data.link}
                    tag={data.tag}
                    boxIcon={data.boxIcon}
                    dollarIcon={data.dollarIcon}
                    address={data.address}
                    title={data.title}
                    persent={data.persent}
                    wdt={data.wdt}
                    price={data.price}
                    goal={data.goal}
                  />
                ))}
            </div>
            <div className="col-12 text-center">
              <button className="cases__btn">see more</button>
            </div>
          </div>
        </div>
      ) : (
        window.location.reload()
      )}
    </>
  );
}

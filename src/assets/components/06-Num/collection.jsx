import React from "react";

import { CollectionData } from "../../data/indexData";

export default function Collection() {
  return (
    <>
      <div className="collection">
        <div className="container p-sm-0">
          <div className="row">
            <div className="collection__list">
              {CollectionData.length > 0 &&
                CollectionData.map((collection, index) => {
                  return (
                    <div className="collection__list-items" key={index}>
                      <div className="collection__list-icon">
                        <img
                          className="collection__list-icon--img"
                          src={collection.icon}
                          alt={collection.icon}
                        />
                      </div>
                      <p className="collection__text">
                        <span className="num__counter">{collection.num}</span>+
                        {collection.text}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

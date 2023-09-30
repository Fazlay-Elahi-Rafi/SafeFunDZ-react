import React from "react";

import { BlogData } from "../../data/indexData";

import SingleBlog from "./SingleBlog";

export default function BlogList() {
  return (
    <>
      {BlogData.length >= 12 ? (
        <div className="blog global__py pt-0">
          <div className="container p-sm-0">
            <div className="blog__grid">
              {BlogData &&
                BlogData.map((data) => (
                  <SingleBlog key={data.id} {...data} />
                ))}
            </div>
            <div className="col-12 text-center">
              <button className="blog__btn">see more</button>
            </div>
          </div>
        </div>
      ) : (
        window.location.reload()
      )}
    </>
  );
}

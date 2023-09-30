import React from "react";
import Title from "../components/Global/Title";
import Banner from "../components/Global/Banner";

import SingleBlog from "../components/16-BlogDetails/singleBlog";

export default function BlogDetails() {
  return (
    <>
      <Title title="SafeFunDz" />
      <Banner
        cls="banner"
        bannerTitle="Blog Details"
        bannerTxt="Blog Details"
      />

      <SingleBlog />
    </>
  );
}

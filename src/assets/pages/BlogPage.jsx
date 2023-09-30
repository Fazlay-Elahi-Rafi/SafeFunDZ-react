import React from "react";

import Title from "../components/Global/Title";
import Banner from "../components/Global/Banner";

import BlogList from "../components/09-Blog/BlogList";

export default function BlogPage() {
  return (
    <>
      <Title title="SafeFunDz" />
      <Banner cls="banner" bannerTitle="blog" bannerTxt="blog" />

      <BlogList />
    </>
  );
}

import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import webFont from "webfontloader";
import Aos from "aos";

// ------> Fix for All
import ScrollUp from "./assets/components/Global/scrollUp";

// ------> Page's
import {
  HomePage,
  HomePage_Two,
  HomePage_Three,
  AboutPage,
  TeamPage,
  BlogPage,
  CasesPage,
  ContactPage,
  GalleryPage,
  SingleCase,
  TestimonialPage,
  VolunterPage,
  BlogDetails,
  Donate,
  Error,
  SignIn,
  SignUp,
} from "./assets/pages/_Pages";

// ------> LayOuts
import Layout from "./assets/pages/Layout";
import AuthLayout from "./assets/components/auth/Auth";

export default function App() {
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Inter:400,500,600,700"],
      },
    });

    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/home-2" element={<HomePage_Two />} />
          <Route path="/home-3" element={<HomePage_Three />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/singleCase" element={<SingleCase />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/volunteer" element={<VolunterPage />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>

      <ScrollUp showBelow={250} />
    </>
  );
}

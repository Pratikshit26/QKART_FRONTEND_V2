import { Box } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
// import "./Thanks.css";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Box className="greeting-container">
        <h2> About Us</h2>
        <h3> Disrupting The Way Developers Learn </h3>
        <p>
          Tech is transforming every industry, and quality developers are going
          to be the driving force behind that change. Existing ways of
          developing talent through video based learning and traditional
          universities are not making the cut. We believe developers need and
          deserve better ways to learn and shape the new world.
        </p>
        <h3> Our Mission </h3>
        <p>
          Our mission is to empower developers with high quality applied
          learning opportunities at scale, and nurture the talent for the
          future. We are building a platform that would fundamentally change the
          way tech is learnt through our “work-like” Micro-Experiences. Crio
          Micro-Experiences provide an environment optimised for learning, with
          real world problems curated from the industry.
        </p>
      </Box>
      <Footer />
    </>
  );
};

export default AboutUs;

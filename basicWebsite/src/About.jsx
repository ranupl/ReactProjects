import React from "react";
import Common from "./Common";
import img from "./images/2672335.jpg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to the world of"
        para="Technology is the application of knowledge for achieving practical goals in a reproducible way. The word technology can also mean the products resulting from such efforts, including both tangible tools such as utensils or machines, and intangible ones such as software."
        img={img}
        visit="/contact"
        btntext="Contact Us"
      />
    </>
  );
};
export default About;

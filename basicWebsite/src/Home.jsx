import React from "react";
import img from "./images/boy.jpg";
import Common from "./Common";
const Home = () => {
  return (
    <>
     <Common 
        name = "Grow your business with"
        para = "We are the team of talent developer making website"
        img = {img}
        visit = "/about"
        btntext = "Get Started"
     />
    </>
  );
};
export default Home;

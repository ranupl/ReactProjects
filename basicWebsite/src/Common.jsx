import React from "react";
import img from "./images/2986190.jpg";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <div className="container-fluid h-100 nav-bg ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row mt-5">
              <div className="col-lg-6 mt-5 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1 className="my-3 main-heading">
                  {props.name}
                  <strong className="text-info"> Technology</strong>
                </h1>
                <p className="mt-2 para">
                  {props.para}
                </p>
                <NavLink to ={props.visit} className="btn btn-outline-info" id="home-btn">
                  {props.btntext}
                </NavLink>
              </div>
              <div className="col-lg-6 order-1 order-lg-2" id="header-img">
                <img src={props.img} width="400" className="animated" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Common;

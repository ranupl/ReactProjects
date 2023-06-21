import React, { useState } from "react";

const Contact = () => {
  const [data, setdata] = useState({
    fullname: "",
    number: "",
    email: "",
    message: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setdata((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert(
      `My full name is ${data.fullname}. My phone number is ${data.number}. My email address is ${data.email}.I want to say ${data.message}`
    );
  };
  return (
    <>
      <div className="container-fluid my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container content-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitForm}>
              <div class="form-group">
                <label for="exampleInputEmail1">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Full name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Phone Number</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="number"
                  value={data.number}
                  onChange={inputEvent}
                  placeholder="Phone number"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Email address"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <br />
              <button type="submit" class="btn btn-outline-info" id="home-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

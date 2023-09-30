import React from "react";

import SectionHead from "../Global/SectionHead";

export default function Contact() {
  return (
    <>
      <div className="contact global__py pt-0">
        <div className="container p-sm-0">
          <div className="row">
            <form action="#" method="POST" className="contact__form">
              <SectionHead text="contact us" desc="Get in Touch With US" />
              <div className="contact__form-body">
                <div className="">
                  <input
                    id="nameInp"
                    className="contact__form-inp form-control"
                    type="text"
                    placeholder="Enter Your Name"
                  />
                  <div className="">
                    <span className="sign__text sign__text-name text-danger d-none">
                      Use a valid name
                    </span>
                    <span className="sign__text sign__text-name--required text-danger d-none">
                      Name is required
                    </span>
                  </div>
                </div>
                <div className="">
                  <input
                    id="emailInp"
                    className="contact__form-inp form-control"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                  <div className="">
                    <span className="sign__text sign__text-email text-danger d-none">
                      Email must be valid
                    </span>
                    <span className="sign__text sign__text-email--required text-danger d-none">
                      Email is required
                    </span>
                  </div>
                </div>
                <div className="">
                  <input
                    id="phnInp"
                    className="contact__form-inp form-control"
                    type="tel"
                    placeholder="Enter Phone Number"
                  />
                  <div className="">
                    <span className="sign__text sign__text-phn--required text-danger d-none">
                      Phone number is required
                    </span>
                    <span className="sign__text sign__text-phn text-danger d-none">
                      Number must be valid
                    </span>
                  </div>
                </div>
                <div className="">
                  <select className="contact__form-inp form-select">
                    <option value="1">Choose Subject</option>
                    <option value="2">Choose two</option>
                    <option value="3">Choose three</option>
                    <option value="4">Choose four</option>
                  </select>
                </div>
                <div className="contact__form-body--comnt">
                  <textarea
                    className="contact__form-inp form-control"
                    id="comment"
                    cols="30"
                    rows="5"
                    placeholder="Write Your Message"
                  ></textarea>
                  <span className="sign__text sign__text-msg--required text-danger d-none">
                    Message is required
                  </span>
                </div>
                <div className="">
                  <input
                    className="donation__btn global__btn mt-0"
                    type="submit"
                    value="send message"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

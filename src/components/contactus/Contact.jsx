import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";
import Navbar from "../Navbar";
import Enquiry from "../enquiry/Enquiry";
import contactus from "./contactus.jpg"
function Contact() {
  const [pending, setPending] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [nameError, setNameError] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setPending(true);

    emailjs
      .sendForm(
        "service_uz6b2zd",
        "template_n9m13uh",
        form.current,
        "OfPD9OpD-iuo1oAyN"
      )
      .then(
        (result) => {
          setPending(false);
          console.log(result.text);
          toast.success("We Received Your Message", {
            position: "top-center",
            theme: "colored",
          });
          form.current.reset();
        },
        (error) => {
          setPending(false);
          console.log(error.text);
          toast.error("error!", {
            position: "top-center",
            theme: "colored",
          });
          form.current.reset();
        }
      );
  };
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const validateNumber = (e) => {
    var number = e.target.value;
    if (validator.isNumeric(number)) {
      setNumberError("");
    } else {
      setNumberError("Enter Valid Number!");
    }
  };
  const validateName = (e) => {
    var name = e.target.value;
    if (validator.isAlpha(name)) {
      setNameError("");
    } else {
      setNameError("Enter Valid Name!");
    }
  };
  return (
    <>
      <Navbar />
      <div>
        <img
          src={contactus}
          alt=""
          className="w-[100%] sm:h-[500px] h-[200px]"
        />
      </div>
      <div
        id=""
        className="h-full bg-gradient-to-r from-gray-900 to-gray-700  text-gray-300 flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-start justify-start sm:mt-16 mt-6 py-5">
          <h3 className="sm:text-5xl text-xl  font-semibold text-green-600">Contact Us</h3>
          <p className="sm:text-xl text-sm pt-5">We look forward to hear from you <br/> what ever your business plan..</p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center justify-center"
        >
          <div className="sm:my-6 my-3 flex sm:flex-row flex-col items-center justify-center">
            <span className="gap-20">
              <input
                name="name"
                onChange={(e) => validateName(e)}
                required
                type="text"
                placeholder="name"
                className="contactInput sm:mr-3 mr-0  sm:w-[500px] w-[100%] sm:my-0 my-3"
              />
              <div style={{ fontweight: "bold", color: "red", gap: "20px" }}>
                {nameError}
              </div>
            </span>
            <span className="gap-20">
              <input
                id="userEmail"
                onChange={(e) => validateEmail(e)}
                name="email"
                required
                type="email"
                placeholder="email"
                className="contactInput sm:ml-3 ml-0 sm:w-[500px] w-[100%] sm:my-0 my-2"
              />
              <div style={{ fontweight: "bold", color: "red", gap: "20px" }}>
                {emailError}
              </div>
            </span>
          </div>
          <div className="sm:my-3 my-0 flex sm:flex-row flex-col items-center justify-center">
            <span className="gap-20">
              <input
                id="number"
                onChange={(e) => {
                  validateNumber(e);
                }}
                name="number"
                required
                type="tel"
                placeholder="phone"
                disabled=""
                className="contactInput sm:mr-3 mr-0 sm:w-[500px] w-[100%] sm:my-0 my-2"
              />
              <div style={{ fontweight: "bold", color: "red", gap: "20px" }}>
                {numberError}
              </div>
            </span>
            <input
              required
              name="subject"
              type="text"
              placeholder="subject"
              className="contactInput sm:ml-3 ml-0  sm:w-[500px] w-[100%] sm:my-3 my-3"
            />
          </div>
          <textarea
            required
            name="message"
            placeholder="message"
            className="contactInput sm:w-[1025px] w-[100%] sm:my-3 my-3"
          ></textarea>
          <div className="flex justify-center items-center mt-6 mb-10">
            <button
              type="submit"
              disabled={pending ? true : false}
              className=" bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-black"
            >
              {pending ? "Loading.." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
      <Enquiry />
    </>
  );
}

export default Contact;

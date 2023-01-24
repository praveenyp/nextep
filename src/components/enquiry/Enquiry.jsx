import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";
import { FaMapPin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiMobile } from "react-icons/bi";
import { HiPhone } from "react-icons/hi";
import { BiCopyright } from "react-icons/bi";

function Enquiry() {
  const [pending, setPending] = useState(false);
  const [emailError, setEmailError] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setPending(true);

    emailjs
      .sendForm(
        "service_wq93jzm",
        "template_l0phhfd",
        form.current,
        "xycgfKYDGSu6Hiyo4"
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

  return (
    <>
      <div
        id="enquiry"
        className="h-full bg-black  text-gray-300 flex flex-col justify-center items-center"
      >
        <h1 className="flex justify-center items-center sm:text-6xl text-3xl sm:mb-24 mb-0 font-bold  sm:mt-20 mt-10">
          Get In Touch With Us
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center justify-center"
        >
          <div className="sm:my-6 my-3 flex sm:flex-row flex-col items-center justify-center">
            <input
              name="name"
              required
              type="text"
              placeholder="name"
              className="contactInput sm:mr-3 mr-0  sm:w-[500px] w-[100%] sm:my-0 my-3"
            />
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
            <span>
              <input
                id="number"
                name="number"
                required
                type="tel"
                placeholder="phone"
                disabled=""
                className="contactInput sm:mr-3 mr-0 sm:w-[500px] w-[100%] sm:my-0 my-2"
              />
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
              className=" bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-black"
            >
              {pending ? "Loading.." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />

      {/* footer */}

      <div className="text-gray-500 bg-black">
        <hr />
        <div className="flex sm:flex-row flex-col justify-between sm:mx-[100px] mx-10 py-10  ">
          {/* address */}
          <div className="flex flex-col items-center">
            <h1 className="uppercase font-bold text-lg">Address</h1>
            <h2 className="uppercase font-semibold mt-4 mb-2">(registered office)</h2>
            <div className="flex flex-col gap-5">
              <a href="/">
                <div className="flex flex-row gap-6">
                  <FaMapPin className="text-red-500 mt-8 text-xl" />
                  <span className="flex flex-col">
                    <h2 className="font-bold">NEXTEP ENGINEERING PVT.LTD</h2>
                    <p className="font-semibold">
                      No. 11 1st Cross Sampangi Ram Nagar
                      <br />
                      Bangalore-560027.
                    </p>
                  </span>
                </div>
              </a>
              <h2 className="uppercase font-semibold flex items-center justify-center">
                (factory)
              </h2>

              <a
                href="https://www.google.com/maps/dir/12.8845097,77.6035522/Nextep+Engineering+Pvt+Ltd,+207%2F2,+Bommasandra+Lake+Rd,+Tranquil+City,+Bommasandra+Village,+Bommasandra,+Karnataka+560099/@12.8514323,77.5714167,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bae6d992e923ab3:0x7305a5b4fbd07601!2m2!1d77.6983561!2d12.8137019"
                target="_blank"
                target="_blank"
              >
                <div className="flex flex-row gap-6">
                  <FaMapPin className="text-red-500 mt-8 text-xl" />
                  <span className="flex flex-col">
                    <h2 className="font-bold">NEXTEP ENGINEERING PVT.LTD</h2>
                    <p className="font-semibold">
                      No. 02 Plot no.215/2, Padmapriya Industrial Estate,
                      <br />
                      Tranquil city Bommasandra Industrial Area,
                      <br /> Bangalore-560099.
                    </p>
                  </span>
                </div>
              </a>
              <div className="flex flex-row gap-6">
                <MdEmail className="text-red-500 mt-1 text-xl" />
                <span className="flex sm:flex-row flex-col font-semibold">
                  <a href="mailto:info@nextepind.com" target="_blank">
                    info@nextepind.com /{" "}
                  </a>
                  <a href="mailto:sales@nextepind.com" target="_blank">
                    sales@nextepind.com
                  </a>
                </span>
              </div>
              <div className="flex flex-row gap-6">
                <BiMobile className="text-red-500 mt-1 text-xl" />
                +91
                <span className="flex flex-row font-semibold">
                  <a href="tel:08884440909">88844 40909 / </a>
                  <a href="tel:09980063407">99800 63407</a>
                </span>
              </div>
              <div className="flex flex-row gap-6">
                <HiPhone className="text-red-500 mt-1 text-xl" />

                <span className="flex flex-row font-semibold">
                  <a href="tel:08029604414">080 2960 4414</a>
                </span>
              </div>
            </div>
          </div>
          {/* general link */}
          <div className="flex flex-col items-center sm:mt-0 mt-20">
            <h1 className="uppercase font-bold text-lg">General link</h1>
            <div className="flex flex-col uppercase font-semibold mt-4 gap-2">
              <Link to="/hardware">hardware</Link>
              <Link to="/consumable">consumables</Link>
            </div>
          </div>
          {/* social */}
          <div className="flex flex-col items-center sm:mt-0 mt-20">
            <h1 className="uppercase font-bold text-lg">follow us on</h1>
            <div className="flex sm:flex-col flex-row gap-3 mt-4">
              <SocialIcon
                url="https://www.linkedin.com/in/praveenputtappa/"
                fgColor=""
                bgColor=""
                className="rounded-xl text-blue-900"
                target="_blank"
              />
              <SocialIcon
                url="https://www.instagram.com/"
                fgColor=""
                bgColor=""
                className="rounded-xl text-pink-500"
                target="_blank"
              />
              <SocialIcon
                url="https://twitter.com/"
                fgColor=""
                bgColor=""
                className="rounded-xl text-blue-300"
                target="_blank"
              />
              <SocialIcon
                url="https://www.youtube.com/"
                fgColor=""
                bgColor=""
                className="rounded-xl text-red-600"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center bg-gray-900 py-5">
        <BiCopyright className="text-green-600" />
        <p className="text-gray-400 sm:text-lg text-sm">All Right Reserved @2023. Nextep Engineering Private Limited.</p>
      </div>
    </>
  );
}

export default Enquiry;

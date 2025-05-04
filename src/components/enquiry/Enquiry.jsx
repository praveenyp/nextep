import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

import { FaMapPin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiMobile } from "react-icons/bi";
import { HiPhone } from "react-icons/hi";
import { BiCopyright } from "react-icons/bi";

function Enquiry() {
  return (
    <>
      {/* footer */}

      <div className="text-gray-500 bg-slate-900">
        <hr />
        <div className="flex md:flex-row flex-col justify-between md:mx-[100px] mx-10 py-10  ">
          {/* address */}
          <div className="flex flex-col items-center">
            <h1 className=" text-lg underline underline-offset-8 decoration-white decoration-2 pb-3">Address</h1>
            {/* <h2 className="mt-4 mb-2">
              (Registered Office)
            </h2> */}
            <div className="flex flex-col gap-5">
              {/* <a href="/">
                <div className="flex flex-row gap-6">
                  <FaMapPin className="text-red-500 mt-8 text-xl" />
                  <span className="flex flex-col hover:text-green-600">
                    <h2 className="font-bold">NEXTEP ENGINEERING PVT.LTD</h2>
                    <p className="">
                      No. 11 1st Cross Sampangi Ram Nagar
                      <br />
                      Bangalore-560027.
                    </p>
                  </span>
                </div>
              </a> */}
              {/* <h2 className="flex items-center justify-center">
                (Factory)
              </h2> */}

              <a href="/">
                <div className="flex flex-row gap-6">
                  <FaMapPin className="text-red-500 mt-8 text-xl" />
                  <span className="flex flex-col hover:text-green-600">
                    <h2 className="font-bold">NEXTEP ENGINEERING PRIVATE LIMITED</h2>
                    <p className="">
                      Q-20 3rd Main Road, KSSIDC Industrial Estate Phase-2,
                      <br />
                      Jigani Industrial Area, Jigani, Bengaluru,
                      <br /> Karnataka-560106.
                    </p>
                  </span>
                </div>
              </a>
              <div className="flex flex-row gap-6">
                <MdEmail className="text-red-500 mt-1 text-xl" />
                <span className="flex md:flex-row flex-col">
                  <a
                    href="mailto:praveenyp11@gmail.com"
                    className="hover:text-green-600"
                  >
                    info@nextepind.com /{" "}
                  </a>
                  <a
                    href="mailto:sales@nextepind.com"
                    className="hover:text-green-600"
                  >
                    xyz@gmail.com
                  </a>
                </span>
              </div>

              <div className="flex flex-row gap-6">
                <BiMobile className="text-red-500 mt-1 text-xl" />
                +91
                <span className="flex md:flex-row flex-col  ">
                  <a href="tel:9999999999" className="hover:text-green-600">
                    9999999999 /{" "}
                  </a>
                  <a href="tel:09980063407" className="hover:text-green-600">
                    99800 63407
                  </a>
                </span>
              </div>
              <div className="flex flex-row gap-6">
                <HiPhone className="text-red-500 mt-1 text-xl" />

                <span className="flex flex-row hover:text-green-600">
                  <a href="tel:0000000000">00000000000</a>
                </span>
              </div>
            </div>
          </div>
          {/* general link */}
          <div className="flex md:flex-row flex-row gap-5">
            <div className="flex flex-col items-center md:mt-0 mt-20">
              <h1 className=" text-lg underline underline-offset-8 decoration-white decoration-2">General</h1>
              <div className="flex flex-col mt-4 gap-2">
                <Link to="/" className="hover:text-green-600">
                  Home
                </Link>
                <Link to="/about" className="hover:text-green-600">
                  About
                </Link>
                <Link to="/solutions" className="hover:text-green-600">
                  Solutions
                </Link>
                <Link to="/products" className="hover:text-green-600">
                  Products
                </Link>
                <Link to="/career" className="hover:text-green-600">
                  Career
                </Link>
              </div>
            </div>
            <div className="flex flex-col  items-center md:mt-0 mt-20">
              <h1 className="text-lg underline underline-offset-8 decoration-white decoration-2">Solutions</h1>
              <div className="flex flex-col  mt-4 gap-2">
                <Link to="/asset" className="hover:text-green-600">
                  Asset Management
                </Link>
                <Link to="/warehouse" className="hover:text-green-600">
                  Warehouse Management
                </Link>
                <Link to="/workin" className="hover:text-green-600">
                  Work-In Progress
                </Link>
                <Link to="/file" className="hover:text-green-600">
                  File Management
                </Link>
                <Link to="/retail" className="hover:text-green-600">
                  Retail management
                </Link>
                <Link to="/track" className="hover:text-green-600">
                  Track and Trace
                </Link>
                <Link to="/automation" className="hover:text-green-600">
                  Automation
                </Link>
                <Link to="/visitor" className="hover:text-green-600">
                  Visitor Management
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center md:mt-0 mt-20">
              <h1 className=" text-lg underline underline-offset-8 decoration-white decoration-2">Products</h1>
              <div className="flex flex-col mt-4 gap-2">
                <Link to="/consumable" className="hover:text-green-600">
                  Consumables
                </Link>
                <Link to="/hardware" className="hover:text-green-600">
                  Hardware
                </Link>
               
              </div>
            </div>
          </div>
          {/* social */}
          <div className="flex flex-col items-center sm:mt-0 mt-20">
            <h1 className="text-lg underline underline-offset-8 decoration-white decoration-2">Follow Us On</h1>
            <div className="flex md:flex-col flex-row gap-3 mt-4">
              <SocialIcon
                url="https://www.linkedin.com/company/nextep-engineering-pvt-ltd/"
                fgColor="white"
                bgColor=""
                target="_blank"
              />
              <SocialIcon
                url="https://instagram.com/nextep_india?igshid=ZDdkNTZiNTM="
                fgColor="white"
                bgColor=""
                target="_blank"
                className=""
              />
              <SocialIcon
                url="https://twitter.com/NextepLtd?t=KDwflkIdl6TkiFFnQi3Q4Q&s=09"
                fgColor="white"
                bgColor=""
                target="_blank"
              />
              <SocialIcon
                url="https://www.youtube.com/channel/UCJDtzqempyxO1m-zBfqfp7w"
                fgColor="white"
                bgColor=""
                target="_blank"
              />
              <SocialIcon
                url="https://www.facebook.com/nextepind?mibextid=ZbWKwL"
                fgColor="white"
                bgColor=""
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center bg-black py-5">
        <BiCopyright className="text-green-600" />
        <p className="text-gray-400 sm:text-sm text-[10px]">
          All Right Reserved @2023. Nextep Engineering Private Limited.
        </p>
      </div>
    </>
  );
}

export default Enquiry;

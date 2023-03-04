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
        <div className="flex sm:flex-row flex-col justify-between sm:mx-[100px] mx-10 py-10  ">
          {/* address */}
          <div className="flex flex-col items-center">
            <h1 className="uppercase font-bold text-lg">Address</h1>
            <h2 className="uppercase font-semibold mt-4 mb-2">
              (registered office)
            </h2>
            <div className="flex flex-col gap-5">
              <a href="/">
                <div className="flex flex-row gap-6">
                  <FaMapPin className="text-red-500 mt-8 text-xl" />
                  <span className="flex flex-col hover:text-green-600">
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

              <a href="https://www.google.com/maps/dir/12.8845097,77.6035522/Nextep+Engineering+Pvt+Ltd,+207%2F2,+Bommasandra+Lake+Rd,+Tranquil+City,+Bommasandra+Village,+Bommasandra,+Karnataka+560099/@12.8514323,77.5714167,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bae6d992e923ab3:0x7305a5b4fbd07601!2m2!1d77.6983561!2d12.8137019">
                <div className="flex flex-row gap-6">
                  <FaMapPin className="text-red-500 mt-8 text-xl" />
                  <span className="flex flex-col hover:text-green-600">
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
                  <a href="mailto:info@nextepind.com" className="hover:text-green-600">info@nextepind.com / </a>
                  <a href="mailto:sales@nextepind.com" className="hover:text-green-600">sales@nextepind.com</a>
                </span>
              </div>

              <div className="flex flex-row gap-6">
                <BiMobile className="text-red-500 mt-1 text-xl" />
                +91
                <span className="flex sm:flex-row flex-col font-semibold">
                  <a href="tel:08884440909" className="hover:text-green-600">88844 40909 / </a>
                  <a href="tel:09980063407" className="hover:text-green-600">99800 63407</a>
                </span>
              </div>
              <div className="flex flex-row gap-6">
                <HiPhone className="text-red-500 mt-1 text-xl" />

                <span className="flex flex-row font-semibold hover:text-green-600">
                  <a href="tel:08029604414">080 2960 4414</a>
                </span>
              </div>
            </div>
          </div>
          {/* general link */}
          <div className="flex flex-col items-center sm:mt-0 mt-20">
            <h1 className="uppercase font-bold text-lg">General link</h1>
            <div className="flex flex-col font-semibold mt-4 gap-2">
              <Link to="/" className="hover:text-green-600">Home</Link>
              <Link to="/about" className="hover:text-green-600">About</Link>
              <Link to="/solutions" className="hover:text-green-600">Solutions</Link>
              <Link to="/products" className="hover:text-green-600">Products</Link>
              <Link to="/career" className="hover:text-green-600">Career</Link>
            </div>
          </div>
          {/* social */}
          <div className="flex flex-col items-center sm:mt-0 mt-20">
            <h1 className="uppercase font-bold text-lg">follow us on</h1>
            <div className="flex sm:flex-col flex-row gap-3 mt-4">
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

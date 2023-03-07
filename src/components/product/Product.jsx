import React from "react";
import { Link } from "react-router-dom";
import Navbar from ".././Navbar";
import Enquiry from "../enquiry/Enquiry"; 
import product from "./assets/product.jpg"
function Products() {
  return (
    <div >
      <div className="h-screen text-white bg-black">

      <Navbar />
      <div>
        <img
          src={product}
          alt=""
          className="w-[100%] sm:h-[500px] h-[200px]"
        />
      </div>
      <div className="flex items-center justify-center flex-col gap-5 mt-10 sm:mx-0 mx-6">
        <h1 className="sm:text-5xl text-2xl font-semibold text-green-600">Products</h1>
        <h3 className="sm:text-2xl text-xl">
          Exceptional products to grow your business.
        </h3>
        <p className="text-gray-400">
          We offer a wide range of Barcode Printers, Barcode Scanners,<br/> RFID,
          EAS, POS, Software, Marking & Coding, Consumables
        </p>
      
      </div>
      <div className="flex flex-row items-center justify-center sm:gap-[3 0px] gap-5 sm:mt-5 mt-10">
        <button className="border-2 border-solid p-3 uppercase sm:ml-[0%] ml-0 sm:text-lg text-black hover:text-yellow-600 hover:border-green-600 text-xs bg-yellow-600 hover:bg-transparent"><Link to="/consumable">Consumables</Link></button>
        <button className="border-2 border-solid p-3 px-7 uppercase sm:ml-[0%] ml-0 sm:text-lg text-black hover:text-yellow-600 hover:border-green-600 text-xs bg-yellow-600 hover:bg-transparent"><Link to="/hardware">Hardware</Link></button>
      </div>
      </div>
      <Enquiry/>
    </div>
  );
}

export default Products;

import Home from "./pages/Home";
import Hardware from "./pages/Hardware";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/404";
import AboutUs from "./components/About/AboutUs";
import ScrollButton from "./components/ScrollButton";
import Product from "./components/product/Product";
import Consumable from "./pages/Consumable";
import Solution from "./components/Solution/Solution";
import Contact from "./components/contactus/Contact";
import Asset from "./components/Solutions/Asset";
import Warehouse from "./components/Solutions/Warehouse";
import Workin from "./components/Solutions/Work_in";
import Filetracking from "./components/Solutions/Filetracking";
import Retail from "./components/Solutions/Retail";
import Track from "./components/Solutions/Track";
import Automation from "./components/Solutions/Automation";
import Visitor from "./components/Solutions/Visitor";
import Career from "./components/career/Career";

function App() {
  return (
    <BrowserRouter>
      <ScrollButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Product />} />
        <Route path="/consumable" element={<Consumable />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/asset" element={<Asset />} />
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/workin" element={<Workin />} />
        <Route path="/file" element={<Filetracking />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/track" element={<Track />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/visitor" element={<Visitor />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

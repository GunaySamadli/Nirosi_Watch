import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import './index.scss'
import Home from "./pages/Home/Home";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={''} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

import HomePage from "./Pages/HomePage";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import Navbar from "./Components/navbar";
import AboutUS from "./Pages/AboutUS";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

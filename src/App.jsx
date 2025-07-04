import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

import HomePage from "./Pages/HomePage";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";

import Nav from "./Components/HomeComponents/Nav";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

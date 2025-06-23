import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

import HomePage from "./Pages/HomePage";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";

import Nav from "./Components/Home components/Nav";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

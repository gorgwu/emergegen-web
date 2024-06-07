import "./styles.css"

import Navbar from "./Navbar"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Placements from "./pages/Placements"
import People from "./pages/People"
import About from "./pages/About"
import Contact from "./pages/Contact"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/people" element={<People />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App;

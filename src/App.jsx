import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./components/About";
import ContactPage from "./components/Contact";
import Footer from "./components/Footer";
import Publicissues from "./pages/publicissues"
import Services from "./pages/Service";
import Newupdate from "./pages/Newupdate";
import Eventactivities from "./pages/Eventactivities";
import  Gallery from "./pages/Gallery";
import YouthEmployment from "./pages/YouthEmployment"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/about" element={<About />} />  
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/publicissues" element={<Publicissues />} />
        <Route path="/service" element={<Services />} />
        <Route path="/newupdate" element={<Newupdate />} />
        <Route path="/eventactivities" element={<Eventactivities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/YouthEmployment" element={<YouthEmployment/>}/>

      </Routes>
    
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;

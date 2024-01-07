import './App.css';
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Slider from "./components/inc/Slider";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function app(){
  return(
    <>
    <Router>
    <Navbar/>
    <Slider/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default app;




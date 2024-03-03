import './App.css';
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ViewDetails from './components/pages/ViewDetails';
import Login from './components/pages/Login';
function app(){
  return(
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path='/view_details/:id' element={<ViewDetails />} />
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
       <Route path="/login" element={<Login/>}/> 
    </Routes>
    </Router>
    </>
  );
}

export default app;




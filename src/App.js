import { Routes, Route } from "react-router-dom";
import "./App.css";
// import ADMIN from './Components/admin/Admin';
import Navbar from "./Components/navbar/Navbar";
import Login from "./Components/login/login";
import { Slide } from "./Components/slider/Slider";
import Home from "./Components/home/Home";
// import Signup from './Components/signup/Signup';

function App() {
  return (
    <>
      <>
        <Navbar />
        <Slide />
      </>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

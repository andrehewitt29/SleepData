import React from "react";
import Navbar from"./components/navbar.js"
import Home from "./components/home.js"
import About from "./components/about.js"
import SignUp from "./components/signup.js";
import Login from "./components/login.js";
import {Routes, Route} from 'react-router-dom';

const App = ()=>{
    return(
        <div>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
        </div>
    )
}
export default App;
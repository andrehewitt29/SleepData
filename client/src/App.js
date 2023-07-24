import React from 'react';

import {auth} from './firebase';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Account from "./pages/Account";


export default function App() {
  if(auth.currentUser != null){
    console.log("Email: " + auth.currentUser.email);
    alert("Email: " + auth.currentUser.email);
  }
  
  return (
    
    <div>
      
      <BrowserRouter>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/nopage" element={<NoPage/>}/>
    </Routes>
      </BrowserRouter>     
    </div>
  );
}



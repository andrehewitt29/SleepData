import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NoPage from "./pages/NoPage";
import About from "./pages/About";


function App(){

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
  fetch("/api").then(
    response => response.json()
  ).then(
    data =>{
      setBackendData(data)
    }
  )
  }, [])

  return(
    <div>
    <BrowserRouter>
    <Routes>
    <Route index element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/nopage" element={<NoPage/>}/>
  </Routes>
    </BrowserRouter>     
  </div>
    // <div>
    // {(typeof backendData.users === 'undefined') ? (
    //     <p>Loading...</p>
    //   ):(
    //     backendData.users.map((user, i) => (
    //       <p>{user}</p>
    //     ))
    // )}
    // </div>
  )
}

export default App
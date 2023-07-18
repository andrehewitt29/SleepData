import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from "./pages/About";
import DataForm from './pages/DataForm';
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Payment from "./pages/Payment";
import Settings from "./pages/Settings";
import SignUp from "./pages/SignUp";


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
    <Route path="/About" element={<About/>}/>
    <Route path="/DataForm" element={<DataForm/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Payment" element={<Payment/>}/>
    <Route path="/Settings" element={<Settings/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/*" element={<NoPage/>}/>
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
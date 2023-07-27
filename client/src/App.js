import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from "./pages/About";
import AccountData from "./pages/AccountData";
import ContactUs from "./pages/ContactUs";
import DataForm from "./pages/DataForm";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NoPage from "./pages/NoPage";
import PasswordReset from "./pages/PasswordReset";
import Payment from "./pages/Payment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Settings from "./pages/Settings";
import SignUp from "./pages/SignUp";
import TermsAndConditions from "./pages/TermsAndConditions";


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
    <Route path="/AccountData" element={<AccountData/>}/>
    <Route path="/ContactUs" element={<ContactUs/>}/>
    <Route path="/DataForm" element={<DataForm/>}/>
    <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Logout" element={<Logout/>}/>
    <Route path="/PasswordReset" element={<PasswordReset/>}/>
    <Route path="/Payment" element={<Payment/>}/>
    <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
    <Route path="/Settings" element={<Settings/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/TermsAndConditions" element={<TermsAndConditions/>}/>
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
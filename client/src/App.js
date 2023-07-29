import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {auth} from "./firebase";
import About from "./pages/About";
import Account from "./pages/Account";
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
import Protected from './components/Protected';
import Contact from './pages/Contact'

function App(){
  const [isSignedIn, setIsSignedIn] = useState(null);
  
  auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      setIsSignedIn(true);
    } else {
      // User is not signed in.
      setIsSignedIn(false);
    }
  });

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
    <Route
    path="/Account"
    element={
    <Protected isLoggedIn={true}>
        <Account />
      </Protected>
    }
    />
    <Route path="/ContactUs" element={<ContactUs/>}/>
    <Route path="/DataForm" element={<DataForm/>}/>
    <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Contact" element={<Contact/>}/>
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

    //<Route index element={<Home/>}/>
    //<Route path="/About" element={<About/>}/>
    //<Route path="/Data" element={<Data/>}/>
    //<Route path="/DataForm" element={<DataForm/>}/>
    //<Route path="/Home" element={<Home/>}/>
    //<Route path="/Login" element={<Login/>}/>
    //<Route path="/Payment" element={<Payment/>}/>
    //<Route path="/Settings" element={<Settings/>}/>
    //<Route path="/SignUp" element={<SignUp/>}/>
    //<Route path="/*" element={<NoPage/>}/>


// Private Route Example
    //<Route
    //path="/About"
    //element={
    //  <Protected isSignedIn={false}>
    //    <About />
    //  </Protected>
   // }
  ///>
  )
}

export default App
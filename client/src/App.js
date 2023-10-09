import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {auth} from "./firebase";
import About from "./pages/About";
import Account from "./pages/Account";
import AccountCreated from "./pages/AccountCreated";
import Admin from "./pages/Admin";
import AlreadyLoggedIn from './pages/AlreadyLoggedIn';
import ContactUs from "./pages/ContactUs";
import DataForm from "./pages/DataForm";
import Footer from './pages/Footer';
import ForgotPassword from "./pages/ForgotPassword";
import Header from './pages/Header';
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import NotLoggedIn from './pages/NotLoggedIn';
import PasswordReset from "./pages/PasswordReset";
import PersonalData from "./pages/PersonalData";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RequestMeeting from "./pages/RequestMeeting";
import Settings from "./pages/Settings";
import SignUp from "./pages/SignUp";
import TermsAndConditions from "./pages/TermsAndConditions";
import Reminder from './pages/Reminder'
import './style.css';

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

/*  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
  fetch("/api").then(
    response => response.json()
  ).then(
    data =>{
      setBackendData(data)
    }
  )
  }, []);*/

  // If logged in:
  if (auth.currentUser != null) {
    // If logged in as Admin:
    if (auth.currentUser.uid == "E3113lutLFfVBcSrQlFJMx9Krti1") {
      return (
        <div>
          <div class="topbar" style={{position: "static"}}/>
          <Header />
          <br />
          <BrowserRouter>
            <Routes>
              <Route index element={<Admin/>}/>
              <Route path="/Settings" element={<Settings/>}/>
              <Route path="/*" element={<Admin/>}/>
            </Routes>
          </BrowserRouter>
          <br />
          <Footer />
      </div>
      );
    }

    return (
      <div>
        <div class="topbar" style={{position: "static"}}/>
        <Header />
        <br />
        <BrowserRouter>
          <Routes>
            <Route index element={<Account/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Account" element={<Account />}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
            <Route path="/DataForm" element={<DataForm/>}/>
            <Route path="/ForgotPassword" element={<AlreadyLoggedIn/>}/>
            <Route path="/Home" element={<Account/>}/>
            <Route path="/Login" element={<AlreadyLoggedIn/>}/>
            <Route path="/PasswordReset" element={<AlreadyLoggedIn/>}/>
            <Route path="/PersonalData" element={<PersonalData/>}/>
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
            <Route path="/RequestMeeting" element={<RequestMeeting/>}/>
            <Route path="/Settings" element={<Settings/>}/>
            <Route path="/SignUp" element={<AccountCreated/>}/>
            <Route path="/TermsAndConditions" element={<TermsAndConditions/>}/>
            <Route path="/*" element={<NoPage/>}/>
          </Routes>
        </BrowserRouter>
        <br />
        <Footer />
    </div>
    );
  }
  
  // If not logged in:
  return (
    <div>
      <div class="topbar" style={{position: "static"}}/>
      <Header />
      <br />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Account" element={<NotLoggedIn />}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/DataForm" element={<NotLoggedIn/>}/>
          <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/PasswordReset" element={<PasswordReset/>}/>
          <Route path="/PersonalData" element={<NotLoggedIn/>}/>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
          <Route path="/RequestMeeting" element={<NotLoggedIn/>}/>
          <Route path="/Settings" element={<NotLoggedIn/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/TermsAndConditions" element={<TermsAndConditions/>}/>
          <Route path="/Reminder" element={<Reminder/>}/>
          <Route path="/*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
      <br />
      <Footer />
  </div>
  );
}

export default App
import React from "react";
import logo from '../img/LifespanTrustLogo.png';
import {auth} from "../firebase";
import { Squash as Hamburger } from 'hamburger-react';

function Header() {
    if (auth.currentUser != null) {
        if (auth.currentUser.uid == process.env.REACT_APP_ADMIN_ID) {
            return (
                <header class="topbar">
                    <ul id="leftHeader" style={{position:"absolute", padding: "1vh"}}>
                    <a href="Home"><img id="logo" src={logo} alt="" style={{position: "absolute"}}/></a>
                    </ul>
                    <ul id="rightHeader" style={{position:"absolute", right: 0, padding: "1vh"}}>
                        <a href="Admin" class="headlink" id="Search"><li>User Search</li></a>
                        <a href="AdminSearchByValue" class="headlink" id="Search"><li>Value Search</li></a>
                        <a href="Settings" class="headlink" id="settings"><li>Settings</li></a>
                        <a href="Home" class="headlink" id="logout" onClick={() => auth.signOut()}><li>Log Out</li></a>
                    </ul>
                </header>
            );
        }

        if (window.location.href.split("/").pop().toLowerCase() == "signup") {
            return (
                <header class="topbar">
                    <ul id="leftHeader" style={{position:"absolute", padding: "1vh"}}>
                        <a href="Home"><img id="logo" src={logo} alt="" style={{position:"absolute"}}/></a>
                    </ul>
                </header>
            );
        }
    
        return (
            <header class="topbar" onLoad={() => {document.getElementById("burgerContents").hidden = true;}}>
                <ul id="leftHeader" style={{position:"absolute", padding: "1vh"}}>
                    <a href="Home"><img id="logo" src={logo} alt="" style={{position:"absolute"}}/></a>
                </ul>
                <ul id="rightHeader" style={{position:"absolute", right: 0, padding: "4vh"}}>
                    <Hamburger color="black" onToggle={toggled => {document.getElementById("burgerContents").hidden = !toggled;}} />
                </ul>
                <div id="burgerContents" hidden>
                    <a href="Account" id="account"><li>My Sleep Data</li></a><br />
                    <a href="Settings" id="settings"><li>Settings</li></a><br />
                    <a href="PersonalData" id="personalData"><li>Personal Data</li></a><br />
                    <a href="DataForm" id="dataForm"><li>Add/Modify Sleep Data</li></a><br />
                    <a href="RequestMeeting" id="requestmeeting"><li>Request a Meeting</li></a><br />
                    <a href="About" id="about"><li>About</li></a><br />
                    <a href="Home" id="logout" onClick={() => auth.signOut()}><li>Log Out</li></a>
                </div>
            </header>
        );
    }

    if (window.innerWidth < 770) {
        return (
            <header class="topbar" onLoad={() => {document.getElementById("burgerContents").hidden = true;}}>
                <ul id="leftHeader" style={{position:"absolute", padding: "1vh"}}>
                <a href="Home"><img id="logo" src={logo} alt="" style={{position:"absolute"}}/></a>
                </ul>
                <ul id="rightHeader" style={{position:"absolute", right: 0, padding: "4vh"}}>
                    <Hamburger color="black" onToggle={toggled => {document.getElementById("burgerContents").hidden = !toggled;}} />
                </ul>
                <div id="burgerContents" hidden>
                    <a href="Home" class="headlink" id="home"><li>Home</li></a><br />
                    <a href="About" class="headlink" id="about"><li>About</li></a><br />
                    <a href="SignUp" class="headlink" id="signup"><li>Sign Up</li></a><br />
                    <a href="Login" class="headlink" id="login"><li>Login</li></a><br />
                </div>
            </header>
        );
    }
    
    return (
        <header class="topbar">
            <ul id="leftHeader" style={{position:"absolute", padding: "1vh"}}>
            <a href="Home"><img id="logo" src={logo} alt="" style={{position: "absolute"}}/></a>
            </ul>
            <ul id="rightHeader" style={{position:"absolute", right: 0, padding: "1vh"}}>
                <a href="Home" class="headlink" id="home"><li>Home</li></a>
                <a href="About" class="headlink" id="about"><li>About</li></a>
                <a href="SignUp" class="headlink" id="signup"><li>Sign Up</li></a>
                <a href="Login" class="headlink" id="login"><li>Login</li></a>         
            </ul>
        </header>
    );
}

export default Header;
import React from "react";
import logo from '../img/LifespanTrustLogo.png';
import {auth} from "../firebase";
import { Squash as Hamburger } from 'hamburger-react';

function Header() {
    if (auth.currentUser != null) {
        var userName = auth.currentUser.email;
    
        return (
            <header id="topbar">
                <ul id="leftHeader" style={{position:"absolute", padding: "1vh"}}>
                    <img id="logo" src={logo} alt="" style={{position:"absolute"}}/>
                </ul>
                <ul id="rightHeader" style={{position:"absolute", right: 0, padding: "3vh"}}>
                    <Hamburger color="black" onToggle={toggled => {
                        if (toggled) {
                            // open a menu
                            document.getElementById("burgerContents").hidden = false;                          
                        } else {
                            // close a menu
                            document.getElementById("burgerContents").hidden = true;
                        }
                        }} />
                </ul>
                <div id="burgerContents" hidden style={{zIndex: "1", backgroundColor: "white", marginTop: "100px", position:"absolute", right: 0, padding: "10px"}}>
                    <a href="Home" class="headlink" id="home"><li>Home</li></a>
                    <a href="About" class="headlink" id="about"><li>About</li></a>
                    <a href="Account" class="headlink" id="account"><li>My Account</li></a>
                    <a href="Home" class="headlink" id="logout" onClick={() => auth.signOut()}><li>Log Out</li></a>
                </div>
            </header>
        );
    }

    return (
        <header id="topbar">
            <ul id="leftHeader">
                <a href="Home" class="headlink" id="home"><li>Home</li></a>
                <a href="About" class="headlink" id="about"><li>About</li></a>
            </ul>
            <img id="logo" src={logo} alt=""/>
            <ul id="rightHeader">
                <a href="SignUp" class="headlink" id="signup"><li>Sign Up</li></a>
                <a href="Login" class="headlink" id="login"><li>Login</li></a>         
            </ul>
        </header>
    );
}

/*
function OldHeader(Title) {
    return (
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-3">
                        <img alt="Logo" src="Lifespan-Trust-site-logo-updated-250x99.png" />
                    </div>
                    <div class="col-md-6">
                        <h3 class="text-center">{Title}</h3>
                    </div>
                    <div class="col-md-3" />
                </div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="index.html">Home</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="about.html">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="signup.html">Sign Up</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="signin.html">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
      </div>
    );
}
*/

export default Header;
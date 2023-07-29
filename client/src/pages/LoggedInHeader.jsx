import React from "react";
import '../style.css';
import logo from '../img/LifespanTrustLogo.png';
import {auth} from "../firebase";

function Header(Username) {
    return(
    <header id="topbar">
        <ul id="leftHeader">
            <a href="Home" class="headlink" id="home"><li>Home</li></a>
            <a href="About" class="headlink" id="about"><li>About</li></a>
        </ul>
        <img id="logo" src={logo} alt=""/>
        <ul id="rightHeader">
            <a href="Account" class="headlink" id="account"><li>{Username}</li></a>
            <a href="Logout" class="headlink" id="logout" onClick={() => auth.signOut()}><li>Log Out</li></a>
        </ul>
    </header>
    );
}

export default Header;
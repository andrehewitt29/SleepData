import React from "react";
import '../style.css';
import logo from '../img/LifespanTrustLogo.png';

function LoggedInHeader() {
    return(
    <header id="topbar">
        <ul id="leftHeader">
            <a href="Home" class="headlink" id="home"><li>Home</li></a>
            <a href="About" class="headlink" id="about"><li>About</li></a>
        </ul>
        <img id="logo" src={logo} alt=""/>
        <ul id="rightHeader">
            <a href="AccountData" class="headlink" id="accountdata"><li>[UserName]</li></a>
            <a href="Logout" class="headlink" id="logout"><li>Log Out</li></a>
        </ul>
    </header>
    );
}

export default LoggedInHeader;
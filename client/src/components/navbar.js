import React from 'react';
import '../style.css';
import { Link } from "react-router-dom";
import logo from '../img/LifespanTrustLogo.png';


    const Navigation = () => {
        return(
        <div>
            <nav className="nav">
                <header id = "topbar">
                <ul id = "leftHeader">
                    <li>
                        <Link to="/" class = "headlink">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" class = "headlink">About</Link>
                    </li>
                    </ul>
                    <img id="logo" src={logo} />
                    <ul id = "rightHeader">
                    <li>
                        <Link to="/signup" class = "headlink">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/login" class = "headlink">Log In</Link>
                    </li>
                </ul>
                </header>
            </nav>
        </div>
        );
    }
    
  export default Navigation
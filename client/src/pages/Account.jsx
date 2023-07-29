import React, {useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';
import { NavLink, useNavigate } from 'react-router-dom';
import {auth} from "../firebase";
function Account() {

    if(auth.currentUser != null){
        return (
            <div class="container-fluid">
                <Header />
                Logged In as {auth.currentUser.email} 
                <button onClick={() => auth.signOut()}>Log Out</button>
                <form >
                    <div>
                    <ul id="rightHeader">
            <a href="Account" class="headlink" id="account"><li>My Account</li></a>
            <a href="SignUp" class="headlink" id="signup"><li>Sign Up</li></a>
            <a href="Login" class="headlink" id="login"><li>Login</li></a>
        </ul>
                    </div>
                </form>  
                <br/><br/>
                This is the logged in account page, 
                Users will have options to enter review or delete sleep data.
                <Footer />
            </div>
        )   
    }else{
        return(
            <div class="container-fluid">
                <Header />
                Must Be Logged In to access this page.
                <a href="Login" class="headlink" id="login"><li>Login Page</li></a>

                <Footer />
            </div>
        )
    }
      
}

export default Account;
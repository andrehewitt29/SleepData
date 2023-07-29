import React, {useEffect, useState} from 'react';
import Header from './Header';

import Footer from './Footer';
import '../style.css';
import { NavLink, useNavigate } from 'react-router-dom';
import {auth} from "../firebase";
import placeholdImg from '../img/exampleStats.png';

function Account() {

    if(auth.currentUser != null){
        return (
            <div class="container-fluid">
           
           <br />
            
            <br />
            <div class="row">
                <div class="col-md-2" />
                
                <div class="col-md-2" />
                <Header />
                <form >
                    <div>
                    <ul id="rightHeader">
        </ul>
                    </div>
                </form>  
                <br/><br/>

                <h1 style={{textAlign: "center"}}><strong>User Sleep Data:</strong></h1>

                <div class="col-md-2">
                    <a href="Settings" id="settingsButton"><button class="btn btn-primary">Settings</button></a>
                </div>
                <div class="col-md-4" style={{textAlign: "center"}}>
                    <a href="DataForm" id="dataFormButton"><button class="btn btn-primary">Modify or Add Sleep Data</button></a>
                </div>
                <div class="col-md-2" style={{textAlign: "right"}}>
                    <a href="Payment" id="paymentButton"><button class="btn btn-primary">Payment</button></a>
                </div>
                This is the logged in account page, 
                Users will have options to enter review or delete sleep data.
                <Footer />
            </div>
            <div class="row">
                <div class="col-md-2" />
                <div class="col-md-8">
                <img src={placeholdImg} alt="User Sleep Data" style={{maxWidth: "100%"}}/>
                </div>
                <div class="col-md-2" />
            </div>
            <br />
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
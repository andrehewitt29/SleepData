import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
    return (
        <div class="container-fluid">
            {Header("signin")}
            <div class="row" style={{minHeight: "250px", padding:"25px"}}>
                <div class="col-md-4"/>
                <div class="col-md-4">
                    <form onSubmit={
                        Test()
                    }>
                        <div class="form-group">
                            <label for="InputEmail">Email address</label>
                            <input type="email" class="form-control" id="InputEmail" />
                        </div>
                        <div class="form-group">
                            <label for="InputPassword">Password</label>
                            <input type="password" class="form-control" id="InputPassword" />
                        </div>
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                    </form>
                </div>
                <div class="col-md-4"/>
            </div>
            <Footer />
        </div>
    );
}

function Test(){
    try{
        console.log(document.getElementById("InputEmail").value)
    }
    catch{
        
    }    
}

export default SignIn;
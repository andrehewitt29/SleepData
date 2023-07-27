import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';
import { auth } from "../firebase";
import { AuthCredential, getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);    
            alert("Logged In as " + userCredential.user.email);  
             
        
        }).catch((error) => {
            alert(error);
            console.log(error)
        })
    }

    return (
        <div class="container-fluid">
            <Header />
            <div class="row" style={{minHeight: "250px", padding:"25px"}}>
                <div class="col-md-4"/>
                <div class="col-md-4">
                    <form onSubmit={signIn}>
                        <div class="form-group">
                            <label for="InputEmail">Email address</label>
                            <input type="email" class="form-control" id="InputEmail" onChange={(e) =>setEmail(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label for="InputPassword">Password</label>
                            <input type="password" class="form-control" id="InputPassword" onChange={(e) =>setPassword(e.target.value)}/>
                        </div>
                        <h6><a href="ForgotPassword" id="forgotpasswordbutton">Forgot Password?</a></h6>
                        <br/>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
                <div class="col-md-4"/>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
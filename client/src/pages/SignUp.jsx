import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';
import { auth } from "../firebase";
import { AuthCredential, getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = (e) =>{
        e.preventDefault();
       createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);       
        
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div class="container-fluid">
            <Header />
            <div class="row" style={{minHeight: "250px", padding:"25px"}}>
                <div class="col-md-4"/>
                <div class="col-md-4">
                    <form onSubmit={signup}>
                        <div class="form-group">
                            <label for="InputEmail">Email address</label>
                            <input type="email" class="form-control" id="InputEmail" onChange={(e) =>setEmail(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label for="InputPassword">Password</label>
                            <input type="password" class="form-control" id="InputPassword" onChange={(e) =>setPassword(e.target.value)}/>
                        </div>
                        <br/>
                        <button type="submit" class="btn btn-primary">Create Account </button>
                    </form>
                </div>
                <div class="col-md-4"/>
            </div>
            <Footer />
        </div>
    );
}

export default SignUp;
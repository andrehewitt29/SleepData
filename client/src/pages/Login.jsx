import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';
import { auth } from "../firebase";
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthCredential, getAuth, reload, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    var elem = document.getElementById('popup');
   var loginErrors = "Username or password was incorrect.";
    const signIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);    
        
           //setTimeout(navigate("/Account"), 4000);
           navigate("/Account");
        
        }).catch((error) => {

            
            if(elem){
                //elem.style.display = 'block';
                //elem.style.display = 'none';
            }
            elem.style.display = "block";
            //alert(error);
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
                            <label id="popup" style={{ display: 'none' }}>{loginErrors}</label>
                        </div>
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
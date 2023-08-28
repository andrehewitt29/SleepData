import React, { useState } from 'react';
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
            console.log(error);
        });
    }

    return (
        <div class="container-fluid">
            <div class="row account-form">
                <div class="col-md-4"/>
                <div class="col-md-4">
                    <form class="form-background" onSubmit={signIn}>
                        <h3>Login</h3>
                        <div class="form-group">
                            <label for="InputEmail">Email</label>
                            <input type="email" class="form-control" id="InputEmail" onChange={(e) =>setEmail(e.target.value)}/>
                        </div>
                        <br />
                        <div class="form-group">
                            <label for="InputPassword">Password</label>
                            <input type="password" class="form-control" id="InputPassword" onChange={(e) =>setPassword(e.target.value)}/>
                            <label id="popup" style={{ display: 'none' }}>{loginErrors}</label>
                        </div>
                        <br />
                        <button type="submit" class="btn btn-primary" style={{width: "100%"}}>Login</button>
                        <p />
                        <h6><a href="ForgotPassword" id="forgotpasswordbutton" style={{textDecoration: "inherit"}}>Forgot Password?</a></h6>
                    </form>
                </div>
                <div class="col-md-4"/>
            </div>
        </div>
    );
}

export default Login;
import {React, useState } from 'react';

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default function ForgotPassword(){
    const [email, setEmail] = useState("");
    function sendEnail()
    {
        
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            document.getElementById('test').innerHTML = "Reset Password Email have been sented, Check your email.";
            console.log('email sented');
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        })
    }

    return (
        <div class="container-fluid">
            <h1 style={{textAlign: "center"}}>Forgotten Password</h1>
            <div class="row" style={{minHeight: "150px", padding:"25px"}}>
                <div class="col-md-4"/>
                <div class="col-md-4">
                    <form id = "inputForm">
                        <div class="form-group">
                            <label for="inputResetEmail">Please input your email: </label>
                            <input type="email" class="form-control" name = "email" id="inputResetEmail" required onChange={(e) =>setEmail(e.target.value)}/>  
                        </div>
                        <br />
                        <button type="button" class="btn btn-primary" onClick={sendEnail}>Send Email</button>
                    </form>
                </div>
                <div class="col-md-4"/>
                <p id = "test" style={{textAlign: "center"}}></p>
            </div>
        </div>
    );
}

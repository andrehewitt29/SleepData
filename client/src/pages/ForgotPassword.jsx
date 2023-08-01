import {React } from 'react';
import emailjs from '@emailjs/browser';
import {auth} from "../firebase";

export default function ForgotPassword(){

    function authUser(e) {
        if (auth.currentUser == null) {
            const testEmail = document.getElementById("inputForm");
            console.log(testEmail);
            sendEmail(testEmail);
        }
        else{
            document.getElementById('test').innerHTML = "Email would not send";
        }
        
    }   

    function sendEmail(e) {
        emailjs.sendForm('service_fd21fn8', 'template_tn8fwr5', e, 'aYWGmhYGv5UUon7N6')
        .then((result) => {
            document.getElementById('test').innerHTML = 'Success';
            console.log(result.text);
        }, (error) => {
            document.getElementById('test').innerHTML = 'Fail to send. Please contact the owner';
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <div class="container-fluid">
            <h1 style={{textAlign: "center"}}>Forgotten Password</h1>
            <div class="row" style={{minHeight: "150px", padding:"25px"}}>
                <div class="col-md-4"/>
                <div class="col-md-4">
                    <form id = "inputForm" onSubmit={authUser}>
                        <div class="form-group">
                            <label for="inputResetEmail">Please input your email: </label>
                            <input type="email" class="form-control" name = "email" id="inputResetEmail" required/>
                        </div>
                        <br />
                        <button type="button" class="btn btn-primary" onClick={authUser}>Send Email</button>
                    </form>
                </div>
                <div class="col-md-4"/>
                <p id = "test"></p>
            </div>
        </div>
    );
}

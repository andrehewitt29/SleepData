import React from 'react';
import {auth} from "../firebase";

function ForgotPassword() {
    if (auth.currentUser != null) {
        return (
            <div class="container-fluid">
                <h1 style={{textAlign: "center"}}>You are already logged in!</h1>
            </div>
        );
    }

    return (
        <div class="container-fluid">
            <h1 style={{textAlign: "center"}}>Forgotten Password</h1>
            <div class="row" style={{minHeight: "150px", padding:"25px"}}>
                <div class="col-md-4"/>
                <div class="col-md-4">
                    <form>
                        <div class="form-group">
                            <label for="inputResetEmail">Please input your email: </label>
                            <input type="email" class="form-control" id="inputResetEmail" />
                        </div>
                        <br />
                        <button type="submit" class="btn btn-primary">Send Email</button>
                    </form>
                </div>
                <div class="col-md-4"/>
            </div>
        </div>
    );
}

export default ForgotPassword;
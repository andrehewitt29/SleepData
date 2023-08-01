import React from 'react';
import {auth} from "../firebase";

function Payment() {
    if (auth.currentUser != null) {
        return (
            <div class="container-fluid">
                <h1 style={{textAlign: "center"}}>Payment</h1>
                <h5 style={{textAlign: "center"}}>Insert paypal embed here</h5>
            </div>
        );
    }

    return (
        <div class="container-fluid">
            <h1 style={{textAlign: "center"}}>You must be Logged In to access this page.</h1>
        </div>
    );
}

export default Payment;
import React from 'react';
import {auth} from "../firebase";

function Payment() {

    if (auth.currentUser != null) {
        return (
            <div class="container-fluid">
                <h1>Insert paypal embed here</h1>
            </div>
        );
    } else {
        return(
            <div class="container-fluid">
                <h1 style={{textAlign: "center", minHeight: "150px"}}>Must Be Logged In to access this page.</h1>
            </div>
        )
    }
}

export default Payment;
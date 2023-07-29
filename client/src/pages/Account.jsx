import React, {useEffect, useState} from 'react';
import {auth} from "../firebase";
import placeholdImg from '../img/exampleStats.png';

function Account() {
    if (auth.currentUser != null) {
        return (
            <div class="container-fluid">
                <h1 style={{textAlign: "center"}}><strong>Your Sleep Data</strong></h1>
                <div class="row">
                    <div class="col-md-2" />
                    <div class="col-md-2">
                        <a href="Settings" id="settingsButton"><button class="btn btn-primary">Settings</button></a>
                    </div>
                    <div class="col-md-4" style={{textAlign: "center"}}>
                        <a href="DataForm" id="dataFormButton"><button class="btn btn-primary">Modify or Add Sleep Data</button></a>
                    </div>
                    <div class="col-md-2" style={{textAlign: "right"}}>
                        <a href="Payment" id="paymentButton"><button class="btn btn-primary">Payment</button></a>
                    </div>
                    <div class="col-md-2" />
                </div>
                <br />
                <div class="row">
                    <div class="col-md-2" />
                    <div class="col-md-8">
                        <img src={placeholdImg} alt="User Sleep Data" style={{maxWidth: "100%"}}/>
                    </div>
                    <div class="col-md-2" />
                </div>
            </div>
        );
    }

    return (
        <div class="container-fluid">
            <h1 style={{textAlign: "center"}}>You must be Logged In to access this page.</h1>
        </div>
    );
}

export default Account;
import React, {useEffect, useState} from 'react';
import placeholdImg from '../img/exampleStats.png';

function Account() {
    return (
        <div class="container-fluid">
            <h1>Your Sleep Data</h1>
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

export default Account;
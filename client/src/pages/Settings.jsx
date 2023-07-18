import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';
import placeholdImg from '../img/card_placeholder.png';

function Settings() {
    return (
        <div class="container-fluid">
            <Header />
            <div style={{textAlign: "center"}}>
                <div class="row">
                    <div class="col-md-3"/>
                    <div class="col-md-3">
                        <img src={placeholdImg} alt="User Profile Picture" style={{maxHeight: "300px", maxWidth: "200px"}}/>
                    </div>
                    <div class="col-md-3">
                        <p>Username: Placeholder</p>
                        <p>Email: Placeholder</p>
                        <p>Other: Placeholder</p>
                    </div>
                    <div class="col-md-3"/>
                </div>
                <div>
                    <button>Delete Account?</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Settings;
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';
import placeholdImg from '../img/exampleStats.png';

function Data() {
    return (
        <div class="container-fluid">
            <Header />
            <br />
            <h1 style={{textAlign: "center"}}><strong>User Sleep Data:</strong></h1>
            <br />
            <div class="row">
                <div class="col-md-2" />
                <div class="col-md-8">
                <img src={placeholdImg} alt="" style={{maxWidth: "100%"}}/>
                </div>
                <div class="col-md-2" />
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default Data;
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';

function NoPage() {
    return (
        <div class="container-fluid">
            <Header />
            <br />
            <h1 style={{textAlign: "center", fontSize: "100px"}}>Error 404</h1>
            <br />
            <Footer />
        </div>
    );
}

export default NoPage;
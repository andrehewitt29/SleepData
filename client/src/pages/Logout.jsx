import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';

function Logout() {
    return (
        <div class="container-fluid">
            <Header />
            <h1>You have been logged out.</h1>
            <Footer />
        </div>
    );
}

export default Logout;
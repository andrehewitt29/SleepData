import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';

function NoPage() {
    return (
        <div class="container-fluid">
            <Header />
            <h1>Error 404</h1>
            <Footer />
        </div>
    );
}

export default NoPage;
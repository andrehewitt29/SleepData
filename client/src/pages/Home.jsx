import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="container-fluid">
            {Header("Home Page")}
            <Footer />
        </div>
    );
}

export default Home;
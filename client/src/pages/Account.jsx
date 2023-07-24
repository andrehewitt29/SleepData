import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="container-fluid">
            {Header("About")}
            <div>
                This page shows account information
                <li className="nav-item active">
                <a className="nav-link" href="home">Submit Sleep Data</a>
                </li>
                <li className="nav-item active">
                <a className="nav-link" href="home">Review Sleep Data</a>
                </li>
                <li className="nav-item active">
                <a className="nav-link" href="home">Account Settings</a>
                </li>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
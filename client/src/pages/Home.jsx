import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Home() {
    return (
        <div class="container-fluid">
            {Header("Home Page")}
            <Footer />
        </div>
    );
}

export default Home;
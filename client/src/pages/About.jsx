import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
    return (
        <div class="container-fluid">
            {Header("About")}
            <div>
                This is the about page, all information about purpose of this application will go here.
             
            </div>
            <Footer />
        </div>
    );
}

export default Home;
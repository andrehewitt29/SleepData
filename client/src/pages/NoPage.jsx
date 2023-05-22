import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NoPage() {
    return (
        <>
            {Header("")}
            <h1>Error 404</h1>
            <Footer />
        </>
    );
}

export default NoPage;
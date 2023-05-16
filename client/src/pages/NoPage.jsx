import React from 'react';
import Header from './Header';
import Footer from './Footer';

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
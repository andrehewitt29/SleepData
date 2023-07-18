import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignInForm from '../components/SignIn';
function SignIn() {
    return (
        <div className="container-fluid">
            {Header("Sign In")}
            {SignInForm()}
            <Footer />
        </div>
    );
}

export default SignIn;
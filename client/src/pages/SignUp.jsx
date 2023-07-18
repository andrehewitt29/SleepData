import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignInForm from '../components/SignUp';
function SignUp() {
    return (
        <div className="container-fluid">
            {Header("Sign Up")}
            {SignInForm()}
            <Footer />
        </div>
    );
}

export default SignUp;
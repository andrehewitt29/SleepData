import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignInForm from '../components/SignInform';
function SignIn() {
    return (
        <div class="container-fluid">
            {Header("Sign In")}
            {SignInForm()}
            <Footer />
        </div>
    );
}

export default SignIn;
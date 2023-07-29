import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';

function ForgotPassword() {
    return (
        <div class="container-fluid">
            <Header />
            <br />
            <h1 style={{textAlign: "center"}}>Forgotten Password</h1>
            <div class="row" style={{minHeight: "150px", padding:"25px"}}>
                <div class="col-md-4"/>
                <div class="col-md-4">
                    <form>
                        <div class="form-group">
                            <label for="inputResetEmail">Please input your email: </label>
                            <input type="email" class="form-control" id="inputResetEmail" />
                        </div>
                        <br />
                        <button type="submit" class="btn btn-primary">Send Email</button>
                    </form>
                </div>
                <div class="col-md-4"/>
            </div>
            <Footer />
        </div>
    );
}

export default ForgotPassword;
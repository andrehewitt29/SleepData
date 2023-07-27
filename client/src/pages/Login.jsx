import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';

function Login() {

    
    return (
        <div class="container-fluid">
            <Header />
            <div class="row" style={{minHeight: "250px", padding:"25px"}}>
                <div class="col-md-4"/>
                <div class="col-md-4">
                    <form>
                        <div class="form-group">
                            <label for="InputEmail">Email address</label>
                            <input type="email" class="form-control" id="InputEmail" />
                        </div>
                        <div class="form-group">
                            <label for="InputPassword">Password</label>
                            <input type="password" class="form-control" id="InputPassword" />
                        </div>
                        <h6><a href="ForgotPassword" id="forgotpasswordbutton">Forgot Password?</a></h6>
                        <br/>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
                <div class="col-md-4"/>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
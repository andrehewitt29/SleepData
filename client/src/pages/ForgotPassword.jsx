import React from 'react';

function ForgotPassword() {
    return (
        <div class="container-fluid">
            <h1>Forgotten Password</h1>
            <div class="row account-form">
                <div class="col-md-4"/>
                <div class="col-md-4">
                    <form class="form-background">
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
        </div>
    );
}

export default ForgotPassword;
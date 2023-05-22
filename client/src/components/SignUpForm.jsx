import React from "react";

function SignUpForm(){
    return(
        <div class="row">
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
                        <div class="form-group">
                            <label for="InputPassword">Confirm Password</label>
                            <input type="password" class="form-control" id="InputPassword" />
                        </div>
                        <br/>
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                    </form>
                </div>
                <div class="col-md-4"/>
            </div>
    )
}

export default SignUpForm;


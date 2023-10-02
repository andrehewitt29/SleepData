import {React, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from "../firebase";
import { AuthCredential, getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const formRef = useRef();

    const signup = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        
            fetch('http://localhost:5000/api/sleepData/addSettings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {userData: auth.currentUser,
                    formData: {
                        firstNameValue: formRef.current.InputFirstName.value,
                        lastNameValue: formRef.current.InputLastName.value,
                        dateOfBirthValue: formRef.current.InputDateOfBirth.value,
                        countryValue: formRef.current.InputCountry.value,
                        districtValue: formRef.current.InputDistrict.value
                    }}
                    )
            })

            fetch('http://localhost:5000/api/sleepData/addPersonal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(
                {userData: auth.currentUser,
                formData: {
                    phoneValue: "Neither",
                    heightValue: "",
                    waistValue: "",
                    weightValue: "",
                    bodyMassIndexValue: "",
                    bodyFatPercentageValue: "",
                    maxHeartRateVariabilityValue: "",
                    dyslexicValue: "",
                    selfFocusValue: ""
                    //changePasswordValue: formRef.current.changePasswordValue.value
                }}
                )
            })

            alert("Account with the email (" + userCredential.user.email + ") " + "was successfully created. \nPlease Check your email to verify the account.");  
            navigate("/Account");
        }).catch((error) => {
            alert("Your email alreday been register. Please go to login page to reset your password.");
            console.log(error);
        });
    }

    return (
        <div class="container-fluid">
            <div class="row account-form">
                <div class="col-md-4"/>
                <div class="col-md-4">
                    <form class="form-background" ref={formRef} onSubmit={signup}>
                        <h3>Sign Up</h3>
                        <div class="form-group">
                            <label for="InputEmail">Email address</label>
                            <input required type="email" class="form-control" id="InputEmail" onChange={(e) =>setEmail(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label for="InputPassword">Password</label>
                            <input required type="password" class="form-control" id="InputPassword" onChange={(e) =>setPassword(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label for="InputFirstName">First Name</label>
                            <input required class="form-control" id="InputFirstName"/>
                        </div>
                        <div class="form-group">
                            <label for="InputLastName">Last Name</label>
                            <input required class="form-control" id="InputLastName"/>
                        </div>
                        <div class="form-group">
                            <label for="InputDateOfBirth">Date of Birth</label>
                            <input required class="form-control" type="date" id="InputDateOfBirth"/>
                        </div>
                        <div class="form-group">
                            <label for="InputCountry">Country</label>
                            <input required class="form-control" id="InputCountry"/>
                        </div>
                        <div class="form-group">
                            <label for="InputDistrict">District/City</label>
                            <input required class="form-control" id="InputDistrict"/>
                        </div>
                        <br />
                        <label>By signing up to our website, you agree to our <a href="TermsAndConditions" class="form-link">Terms and Conditions</a> and <a href="PrivacyPolicy" class="form-link">Privacy Policy</a>.</label>
                        <br/>
                        <br/>
                        <button type="submit" class="btn btn-primary" style={{width: "100%"}}>Create Account </button>
                    </form>
                </div>
                <div class="col-md-4"/>
            </div>
        </div>
    );
}

export default SignUp;
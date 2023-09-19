import React from 'react';

function Settings() {
    return (
        <div class="container-fluid">
            <h1>Account Settings</h1>
            <div class="row">
                <div class="col-md-3" />
                <div class="col-md-6">
                    <form class="inputAlignHeight" style={{lineHeight: "200%"}}>
                    <div class="form-background">
                    <label>Email: </label><input id="emailValue"></input><hr style={{margin: "0%"}} />
                    <label>Password: </label><input type="password" id="passwordValue"></input><hr style={{margin: "0%"}} />
                    <label>First Name: </label><input id="firstNameValue"></input><hr style={{margin: "0%"}} />
                    <label>Last Name: </label><input id="lastNameValue"></input><hr style={{margin: "0%"}} />
                    <label>Date of Birth: </label><input id="dateOfBirthValue" type="date"></input><hr style={{margin: "0%"}} />
                    <label>Country: </label><input id="countryValue"></input><hr style={{margin: "0%"}} />
                    <label>District/City: </label><input id="districtValue"></input><hr style={{margin: "0%"}} />
                    <br />
                    <label>Enter current password to confirm changes: </label><input type="password" id="changePasswordValue"></input><br />
                    <br />
                    <div>
                        <button class="btn btn-danger">Delete Account?</button>
                    </div>
                    </div>
                    <br />
                    <div class="centered">
                        <input type='submit' id="settingsSubmitButton" className="btn btn-primary" value="Done"></input><br />
                    </div>
                    </form>
                </div>
                <div class="col-md-3"/>
            </div>
            <br />
        </div>
    );
}

export default Settings;
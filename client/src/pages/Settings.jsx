import React from 'react';

function Settings() {
    return (
        <div class="container-fluid">
            <h1>Account Settings</h1>
            <br />
            <div class="row">
                <div class="col-md-3" />
                <div class="col-md-6">
                    <form class="inputAlignHeight" style={{lineHeight: "200%"}}>
                    <div class="form-background">
                    <label>Username: </label><input id="usernameValue"></input><br />
                    <label>Email: </label><input id="emailValue"></input><br />
                    <label>Password: </label><input id="passwordValue"></input><br />
                    <label>First Name: </label><input id="firstNameValue"></input><br />
                    <label>Last Name: </label><input id="lastNameValue"></input><br />
                    <label>Date of Birth: </label><input id="dateOfBirthValue" type="date"></input><br />
                    <label>Country: </label><input id="countryValue"></input><br />
                    <label>District/City: </label><input id="districtValue"></input><br />
                    <label>Android or Apple: </label><select id="phoneValue" defaultValue={"Neither"}><option value="Android">Android</option><option value="Apple">Apple</option><option value="Both">Both</option><option value="Neither">Neither</option></select><br />
                    <label>Height (CM): </label><input type="number" id="heightValue" min="0" max="300" ></input><br />
                    <label>Waist (CM): </label><input type="number" id="waistValue" min="0" max="300" ></input><br />
                    <label>Weight (Kg): </label><input type="number" id="weightValue" min="0" max="500"></input><br />
                    <label>Body-Mass Index: </label><input type="number" id="bodyMassIndexValue" min="0" max="50"></input><br />
                    <label>Body Fat Percentage: </label><input type="number" id="bodyFatPercentageValue" min="0" max="100"></input><br />
                    <label>Max Heart Rate Variability: </label><input type="number" id="maxHeartRateVariabilityValue"></input><br />
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
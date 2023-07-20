import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';

function Settings() {
    return (
        <div class="container-fluid">
            <Header />
            <br />
            <h1 style={{textAlign: "center"}}><strong>Account Settings:</strong></h1>
            <br />
            <div class="row">
                <div class="col-md-4" />
                <div class="col-md-4">
                    <form style={{lineHeight: "200%"}}>
                    <label>Username: </label><span class="inputAlignHeight"><input id="usernameValue"></input></span><br />
                    <label>Email: </label><span class="inputAlignHeight"><input id="emailValue"></input></span><br />
                    <label>Password: </label><span class="inputAlignHeight"><input id="passwordValue"></input></span><br />
                    <label>First Name: </label><span class="inputAlignHeight"><input id="firstNameValue"></input></span><br />
                    <label>Last Name: </label><span class="inputAlignHeight"><input id="lastNameValue"></input></span><br />
                    <label>Date of Birth: </label><span class="inputAlignHeight"><input id="dateOfBirthValue" type="date"></input></span><br />
                    <label>Country: </label><span class="inputAlignHeight"><input id="countryValue"></input></span><br />
                    <label>District/City: </label><span class="inputAlignHeight"><input id="districtValue"></input></span><br />
                    <label>Android or Apple: </label><span class="inputAlignHeight"><select id="phoneValue" defaultValue={"Neither"}><option value="Android">Android</option><option value="Apple">Apple</option><option value="Both">Both</option><option value="Neither">Neither</option></select></span><br />
                    <label>Height (CM): </label><span class="inputAlignHeight"><input type="number" id="heightValue" min="0" max="300" ></input></span><br />
                    <label>Waist (CM): </label><span class="inputAlignHeight"><input type="number" id="waistValue" min="0" max="300" ></input></span><br />
                    <label>Weight (Kg): </label><span class="inputAlignHeight"><input type="number" id="weightValue" min="0" max="500"></input></span><br />
                    <label>Body-Mass Index: </label><span class="inputAlignHeight"><input type="number" id="bodyMassIndexValue" min="0" max="50"></input></span><br />
                    <label>Body Fat Percentage: </label><span class="inputAlignHeight"><input type="number" id="bodyFatPercentageValue" min="0" max="100"></input></span><br />
                    <label>Max Heart Rate Variability: </label><span class="inputAlignHeight"><input type="number" id="maxHeartRateVariabilityValue"></input></span><br />
                    <br />
                    <label>Enter current password to confirm changes: </label><br /><input type="password" id="changePasswordValue"></input><br />
                    <br />
                    <input type='submit' value="Done" style={{float: "center"}}></input><br />
                    </form>
                </div>
                <div class="col-md-4"/>
            </div>
            <br />
            <div style={{textAlign: "center"}}>
                <button>Delete Account?</button>
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default Settings;
import {React, useRef} from 'react';
import {auth} from "../firebase";
import {EmailAuthProvider, reauthenticateWithCredential} from "firebase/auth";

function Settings() {
    // Used to quickly reference the form
    const formRef = useRef();

    // Loads and shows the user's data
    async function loadData() {
        var dataJson = await fetch('http://localhost:5000/api/sleepData/settings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(
                {"user": auth.currentUser}
            )}
        )
        var dataList = "";

        await dataJson.json().then(result => dataList = result);

        document.getElementById("emailValue").value = auth.currentUser.email;
        document.getElementById("firstNameValue").value = dataList[0].firstNameValue;
        document.getElementById("lastNameValue").value = dataList[0].lastNameValue;
        document.getElementById("dateOfBirthValue").value = dataList[0].dateOfBirthValue;
        document.getElementById("countryValue").value = dataList[0].countryValue;
        document.getElementById("districtValue").value = dataList[0].districtValue;
    }

    function verifyPassword(action) {
        var credential = EmailAuthProvider.credential(
            auth.currentUser.email,
            document.getElementById("changePasswordValue").value
        );

        reauthenticateWithCredential(auth.currentUser, credential).then(function() {
            // User re-authenticated.
            if (action == "delete") {
                fetch('http://localhost:5000/api/sleepData/removeUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {userData: auth.currentUser}
                    )
                })
            } else {
                fetch('http://localhost:5000/api/sleepData/addSettings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {userData: auth.currentUser,
                    formData: {
                        emailValue: formRef.current.emailValue.value,
                        //passwordValue: formRef.current.passwordValue.value,
                        firstNameValue: formRef.current.firstNameValue.value,
                        lastNameValue: formRef.current.lastNameValue.value,
                        dateOfBirthValue: formRef.current.dateOfBirthValue.value,
                        countryValue: formRef.current.countryValue.value,
                        districtValue: formRef.current.districtValue.value//,
                        //changePasswordValue: formRef.current.changePasswordValue.value
                    }}
                    )
                })
            }
            
            document.getElementById("notice").hidden = false;
            setTimeout(hideNotice, 3000);
        }).catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    function hideNotice() {
        document.getElementById("notice").hidden = true;
    }

    return (
        <div class="container-fluid">
            <h1 onLoad={loadData()}>Account Settings</h1>
            <div class="row">
                <div class="col-md-3" />
                <div class="col-md-6">
                    <form class="inputAlignHeight" style={{lineHeight: "200%"}} ref={formRef}>
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
                        <button class="btn btn-danger" onClick={() => verifyPassword("delete")}>Delete Account?</button>
                    </div>
                    <label id="notice" style={{float: "none", width: "100%", textAlign: "center", fontSize: "20px"}} hidden>Settings Updated!<br/></label>
                    </div>
                    <br />
                    <div class="centered">
                        <input type='button' id="settingsSubmitButton" className="btn btn-primary" value="Done" onClick={() => verifyPassword("update")}></input><br />
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
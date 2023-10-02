import {React, useRef} from 'react';
import {auth} from "../firebase";
import {EmailAuthProvider, reauthenticateWithCredential} from "firebase/auth";
import { async } from '@firebase/util';

function PersonalData() {
    // Used to quickly reference the form
    const formRef = useRef();

    // Loads and shows the user's data
    async function loadData() {
        var dataJson = await fetch('http://localhost:5000/api/sleepData/personal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(
                {"user": auth.currentUser}
            )}
        )
        var dataList = "";

        await dataJson.json().then(result => dataList = result);

        document.getElementById("phoneValue").value = dataList[0].phoneValue;
        document.getElementById("heightValue").value = dataList[0].heightValue;
        document.getElementById("waistValue").value = dataList[0].waistValue;
        document.getElementById("weightValue").value = dataList[0].weightValue;
        document.getElementById("bodyMassIndexValue").value = dataList[0].bodyMassIndexValue;
        document.getElementById("bodyFatPercentageValue").value = dataList[0].bodyFatPercentageValue;
        document.getElementById("maxHeartRateVariabilityValue").value = dataList[0].maxHeartRateVariabilityValue;
        document.getElementById("dyslexicValue").value = dataList[0].dyslexicValue;
        document.getElementById("selfFocusValue").value = dataList[0].selfFocusValue;
    }

    async function SubmitClicked() {
        if (await verifyPassword("update")) {
            await fetch('http://localhost:5000/api/sleepData/addPersonal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(
                {userData: auth.currentUser,
                formData: {
                    phoneValue: formRef.current.phoneValue.value,
                    heightValue: formRef.current.heightValue.value,
                    waistValue: formRef.current.waistValue.value,
                    weightValue: formRef.current.weightValue.value,
                    bodyMassIndexValue: formRef.current.bodyMassIndexValue.value,
                    bodyFatPercentageValue: formRef.current.bodyFatPercentageValue.value,
                    maxHeartRateVariabilityValue: formRef.current.maxHeartRateVariabilityValue.value,
                    dyslexicValue: formRef.current.dyslexicValue.value,
                    selfFocusValue: formRef.current.selfFocusValue.value,
                    //changePasswordValue: formRef.current.changePasswordValue.value
                }}
                )
            })

            showNotice("Personal Data Updated!");
        }
    }

    async function verifyPassword(action) {
        var returnValue;

        var credential = EmailAuthProvider.credential(
            auth.currentUser.email,
            document.getElementById("changePasswordValue").value
        );

        await reauthenticateWithCredential(auth.currentUser, credential).then(function() {
            // User re-authenticated.
            returnValue = true;
        }).catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);

            if (errorCode == "auth/wrong-password") {
                showNotice("Wrong Password!");
            }

            returnValue = false;
        });

        console.log(returnValue);
        return returnValue;
    }

    function showNotice(text) {
        document.getElementById("notice").innerHTML = "<br />" + text + "<br />";
        document.getElementById("notice").hidden = false;
        setTimeout(hideNotice, 3000);
    }

    function hideNotice() {
        document.getElementById("notice").hidden = true;
    }

    return (
        <div class="container-fluid">
            <h1 onLoad={loadData()}>Personal Data</h1>
            <div class="row">
                <div class="col-md-3" />
                <div class="col-md-6">
                    <form class="inputAlignHeight" style={{lineHeight: "200%"}} ref={formRef} onSubmit={(e) => {SubmitClicked(); e.preventDefault();}}>
                    <div class="form-background">
                    <label>Android or Apple: </label><select id="phoneValue" defaultValue={"Neither"}><option value="Android">Android</option><option value="Apple">Apple</option><option value="Both">Both</option><option value="Neither">Neither</option></select><hr style={{margin: "0%"}} />
                    <label>Height (CM): </label><input type="number" id="heightValue" min="0" max="300" ></input><hr style={{margin: "0%"}} />
                    <label>Waist (CM): </label><input type="number" id="waistValue" min="0" max="300" ></input><hr style={{margin: "0%"}} />
                    <label>Weight (Kg): </label><input type="number" id="weightValue" min="0" max="500"></input><hr style={{margin: "0%"}} />
                    <label>Body-Mass Index: </label><input type="number" id="bodyMassIndexValue" min="0" max="50"></input><hr style={{margin: "0%"}} />
                    <label>Body Fat Percentage: </label><input type="number" id="bodyFatPercentageValue" min="0" max="100"></input><hr style={{margin: "0%"}} />
                    <label>Max Heart Rate Variability: </label><input type="number" id="maxHeartRateVariabilityValue"></input><hr style={{margin: "0%"}} />
                    <label>Dyslexic Score <a class="btn btn-primary" style={{lineHeight: "100%"}} title="The Dyslexia Quiz can be found in Brian McKeown's book, 'Sleep Beyond Your Dreams'" onClick={() => alert("The Dyslexia Quiz can be found in Brian McKeown's book, 'Sleep Beyond Your Dreams'")}>i</a></label><input id="dyslexicValue" type='number' max={40} min={0} defaultValue={0}></input><hr style={{margin: "0%"}} />
                    <label>Self-Focus Score <a class="btn btn-primary" style={{lineHeight: "100%"}} title="The Self-Focus Quiz can be found in Brian McKeown's book, 'Sleep Beyond Your Dreams'" onClick={() => alert("The Self-Focus Quiz can be found in Brian McKeown's book, 'Sleep Beyond Your Dreams'")}>i</a></label><input id="selfFocusValue" type='number' max={40} min={0} defaultValue={0}></input><hr style={{margin: "0%"}} />
                    <br />
                    <label>Enter current password to confirm changes: </label><input required type="password" id="changePasswordValue"></input><br />
                    <label id="notice" hidden />
                    </div>
                    <br />
                    <div class="centered">
                        <input type='submit' id="personalDataSubmitButton" className="btn btn-primary" value="Done"></input><br />
                    </div>
                    </form>
                </div>
                <div class="col-md-3"/>
            </div>
            <br />
        </div>
    );
}

export default PersonalData;
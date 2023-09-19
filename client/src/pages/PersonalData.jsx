import React from 'react';

function PersonalData() {
    return (
        <div class="container-fluid">
            <h1>Personal Data</h1>
            <div class="row">
                <div class="col-md-3" />
                <div class="col-md-6">
                    <form class="inputAlignHeight" style={{lineHeight: "200%"}}>
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
                    <label>Enter current password to confirm changes: </label><input type="password" id="changePasswordValue"></input><br />
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
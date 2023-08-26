import React, {useEffect, useState} from 'react';
import profilePicture from '../img/profilePicture.png';
import placeholdImg from '../img/dataSummaryGraph.png';

function Account() {
    return (
        <div class="container-fluid">
            <h1>Your Account and Sleep Data</h1>
            <div class="row">
                <div class="col-md-2" />
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-3">
                            <img src={profilePicture} alt="Pfp" style={{maxWidth: "100%"}}/>
                        </div>
                        <div class="col-md-4">
                            <h3 id='accountFirstName'>[First Name]</h3>
                            <h3 span id='accountLastName'>[Last Name]</h3>
                            <h5 span id='accountDateOfBirth'>[Date of Birth]</h5>
                            <h5 span id='accountCountry'>[Country]</h5>
                            <h5 span id='accountID'>[User ID]</h5>
                            <a href='Settings'><button class='btn btn-primary'>Edit Profile</button></a>
                        </div>
                        <div class="col-md-5">
                            <div class="form-background" style={{border: "solid", borderColor: "#1077FF", borderWidth: "2px", backgroundColor: "var(--content-color)"}}>
                                <p class='centered' style={{fontWeight: "bold", height: "1vh"}}>Recent Form Submission</p>
                                <hr style={{borderColor: "#1077FF", opacity: "1", height: "1px", margin: "0px", padding: "0px"}}/>
                                <p id="accountDate" class='centered' style={{fontSize: "12px", height: "1vh"}}>[Date]</p>
                                <div class="inputAlignHeight" style={{lineHeight: "200%"}}>
                                    <label>Dyslexic Score</label><p id="accountDyslexicValue" style={{float: "right"}}>[Value]</p><br />
                                    <label>Self-Focus Score</label><p id="accountSelfFocusValue" style={{float: "right"}}>[Value]</p><br />
                                    <label>Wellbeing Score</label><p id="accountWellbeingValue" style={{float: "right"}}>[Value]</p><br />
                                </div>
                                <p class='centered' style={{fontWeight: "bold", height: "2vh"}}>. . .</p>
                                <a href='DataForm'><button class='btn btn-primary' style={{backgroundColor: "var(--content-color)", padding:"0px", borderRadius: "10px", fontSize: "12px", width: "100%"}}>Show More</button></a>
                            </div>
                        </div>
                    </div>
                    <hr style={{color: "#FFFF88", borderWidth: "5px", opacity: "1"}}/>
                    <h1 class="centered">Data Summary Comparisons</h1>
                    <a href='DataForm'><button class='btn btn-primary' style={{float: "right"}}>Add/Modify Sleep Data</button></a>
                    <img src={placeholdImg} alt="User Sleep Data" style={{maxWidth: "100%"}}/>
                </div>
                <div class="col-md-2" />
            </div>
        </div>
    );
}

export default Account;
import React, {useEffect, useState} from 'react';
import profilePicture from '../img/profilePicture.png';
import placeholdImg from '../img/dataSummaryGraph.png';

function Account() {
    var currentTab = 1;
    function switchActiveTab(num) {
        document.getElementById("ex1-content").children[currentTab-1].classList.remove("active");
        document.getElementById("ex1").children[currentTab-1].children[0].classList.remove("active");
        currentTab = num;
        document.getElementById("ex1-content").children[currentTab-1].classList.add("active");
        document.getElementById("ex1").children[currentTab-1].children[0].classList.add("active")
    }

    return (
        <div class="container-fluid">
            <h1>Your Account and Sleep Data</h1>
            <div class="row">
                <div class="col-md-2" />
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-4">
                            <h3 id='accountName'>[Name]</h3>
                        </div>
                        <div class="col-md-8">
                            <a href='Settings' class='btn btn-primary' style={{float: "right"}}>Edit Settings</a>
                            <a href='PersonalData' class='btn btn-primary' style={{float: "right"}}>Edit Personal Data</a>
                            <a href='DataForm' class='btn btn-primary' style={{float: "right"}}>Add/Modify Sleep Data</a>
                        </div>
                    </div>
                    <hr style={{color: "#FFFF88", borderWidth: "5px", opacity: "1"}}/>
                    <ul class="nav nav-tabs mb-3" id="ex1" style={{border: "none"}}>
                        <li class="nav-item">
                            <a class="nav-link active" id="ex1-tab-1" href="javascript:void(0);" onClick={() => switchActiveTab(1)}>
                                Wellbeing
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="ex1-tab-2" href="javascript:void(0);" onClick={() => switchActiveTab(2)}>
                                Stress
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="ex1-tab-3" href="javascript:void(0);" onClick={() => switchActiveTab(3)}>
                                Sleep
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content" id="ex1-content">
                        <div class="tab-pane fade show active" id="ex1-tabs-1">
                            <h1 class="centered">Average Wellbeing Score Over Time</h1>
                            <img src={placeholdImg} alt="" style={{maxWidth: "100%"}}/>
                        </div>
                        <div class="tab-pane fade show" id="ex1-tabs-2">
                            <h1 class="centered">Average Stress Score Over Time</h1>
                            <img src={placeholdImg} alt="" style={{maxWidth: "100%"}}/>
                        </div>
                        <div class="tab-pane fade show" id="ex1-tabs-3">
                            <h1 class="centered">Average Sleep Score Over Time</h1>
                            <img src={placeholdImg} alt="" style={{maxWidth: "100%"}}/>
                        </div>
                    </div>
                    <hr style={{color: "#FFFF88", borderWidth: "5px", opacity: "1"}}/>
                    <div>
                        <div class="form-background" style={{border: "solid", borderColor: "#1077FF", borderWidth: "2px", backgroundColor: "var(--content-color)"}}>
                            <p class='centered' style={{fontWeight: "bold", height: "5vh", fontSize: "30px"}}>Recent Form Submission</p>
                            <hr style={{borderColor: "#1077FF", opacity: "1", height: "1px", margin: "0px", padding: "0px"}}/>
                            <p id="accountDate" class='centered' style={{fontSize: "18px", height: "3vh"}}>[Date]</p>
                            <div id="recentFormSubmissionContent" class="inputAlignHeight" style={{lineHeight: "200%"}}>
                                <label>Wellbeing Score</label><p id="accountWellbeingValue" style={{float: "right"}}>[Value]</p><br />
                                <label>Stress Score</label><p id="accountStressValue" style={{float: "right"}}>[Value]</p><br />
                                <label>Sleep Score</label><p id="accountSleepValue" style={{float: "right"}}>[Value]</p><br />
                            </div>
                            <p class='centered' style={{fontWeight: "bold", height: "3vh", fontSize: "18px"}}>. . .</p>
                            <a href='DataForm'><button class='btn btn-primary' style={{backgroundColor: "var(--content-color)", padding:"0px", borderRadius: "10px", fontSize: "18px", width: "100%"}}>Show More</button></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2" />
            </div>
        </div>
    );
}

export default Account;
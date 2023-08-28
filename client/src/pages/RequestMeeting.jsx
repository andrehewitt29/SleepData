import React from 'react';

function RequestMeeting() {
    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substring(0,10);

    return (
        <div class="container-fluid">
            <h1>Book a Meeting</h1>
            <div class="row">
                <div class="col-md-3" />
                <div class="col-md-6">
                    <form class="inputAlignHeight" style={{lineHeight: "200%"} }>
                    <div class="form-background">
                        <label>Meeting Date:</label><input id="bookingDate" type='date' defaultValue={date} max={70} min={date}></input><br />
                        <label>Meeting Time</label><input id="bookingTime" type='time'></input><br />
                        <label>Councilor:</label><input id="readEnjoymentValue" type='number' max={10} min={0} defaultValue={5}></input><br />
                    </div>
                    <br />
                    <div class="centered">
                        <input type='submit' id="meetingSubmitButton" className="btn btn-primary" value="Done"></input><br />
                    </div>
                    </form>
                </div>
                <div class="col-md-3" />
            </div>
        </div>
    );
}

export default RequestMeeting;
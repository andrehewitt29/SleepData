import process from 'process';
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
                    <iframe src={process.env.REACT_APP_YOUCANBOOKME_ADDRESS} id="ycbm" style={{width: "100%", minHeight: "550px", border: "0px", backgroundColor: "transparent"}} frameborder="0" allowtransparency="true" />
                </div>
                <div class="col-md-3" />
            </div>
        </div>
    );
}

export default RequestMeeting;
import React from 'react';
import '../style.css';

function Footer() {
    return (
        <div class="row" style={{fontFamily: "Courier 10 Pitch", color: "#7a7a7a"}}>
            <div class="col-md-5">
                <p class="text-center">Copyright © 2023 Lifespantrust | All rights reserved</p>
            </div>
            <div class="col-md-1" />
            <div class="col-md-3">
                <p class="text-center"><a href='http://www.lifespantrust.com/privacy-policy/'>Privacy Policy</a></p>
            </div>
            <div class="col-md-3">
                <p class="text-center"><a href='http://www.lifespantrust.com/terms-and-conditions/'>Terms and Condition</a></p>
            </div>
        </div>
    );
}

export default Footer;
import emailjs from "@emailjs/browser";
import React from "react";

export default function ContactUs(){
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_3yyme7m', 'template_si9ltns', e.target, '65wP-bQFr9O_0pSCt')
        .then((result) => {
            //document.getElementById('printWord').innerHTML = 'Success';
            console.log(result.text);
        }, (error) => {
            //document.getElementById('printWord').innerHTML = 'Fail to send. Please contact the owner';
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <div class="container-fluid">
            <h1>Contact Us</h1>
            <div class="row">
                <div class="col-md-3" />
                <div class="col-md-6 centered">
                    <form class="form-background" onSubmit={sendEmail}>
                        <input type="text" className="form-control" placeholder="Your Name" name="name"/>
                        <input type="email" className="form-control" placeholder="Your Email Address" name="email"/>
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        <textarea className="form-control"  cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        <br />
                        <input type="submit" className="btn btn-primary" value="Send Message"></input>
                    </form>
                </div>
                <div class="col-md-3" />
            </div>
        </div>
    );
}
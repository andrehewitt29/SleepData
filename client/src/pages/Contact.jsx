import emailjs from "@emailjs/browser";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

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
        e.target.reset()
    }
    return(
        <div class="container-fluid">
        <Header />
        <br />
        <div style={{textAlign: "center"}}>
        <h2>Contact US</h2>
        <form onSubmit={sendEmail}>
                    
                        
                            <input type="text" className="form-control" placeholder="Your Name" name="name"/>
                        
                        
                            <input type="email" className="form-control" placeholder="Your Email Address" name="email"/>
                    
                        
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        
                        
                            <textarea className="form-control"  cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        
                        
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        
                   
                </form>
        </div>
    <Footer/>
    </div>
    )
}
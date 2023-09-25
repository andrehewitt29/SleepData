import {React, useState }from "react";

export default function Reminder(){
    const [emailAddress, setEmail] = useState();

    function addSub(e)
    {
        e.preventDefault();
        if(emailAddress != null)
        { 
            
            const fetchData = {
                method: 'POST',
                body: JSON.stringify({email: emailAddress, js: true}),
                headers: {"Content-Type":  "application/json"}
            }
            fetch('/subscribe', fetchData)
            .then(res=> {
                if(res.ok){
                    //Good
                    document.getElementById("text").innerHTML = "Successfult Subsuribe";
                    console.log("Test Success");
                }
                else{
                    console.error(res.statusText);
                }
            })
        }
        else{
            document.getElementById("text").innerHTML = "Please insert Email";
        }
        //emailAddress.target.reset();
    }
    return (
        <div class="container-fluid">
            <h1>Get notified every month</h1>
            <div class="row">
                <div class="col-md-3" />
                <div class="col-md-6 centered">
                    <form class="form-background" onSubmit={addSub}>
                        <input type="email" className="form-control" placeholder="Your Email Address" name="email" required onChange={e=> setEmail(e.target.value)}/>
                        <input type="submit" className="btn btn-primary" value="Subscribe Now"></input>
                    </form>
                    <p id = "text"></p>
                </div>
                
                <div class="col-md-3" />
            </div>
        </div>
        
    );

}


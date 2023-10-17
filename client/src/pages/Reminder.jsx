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
                    document.getElementById("info").innerHTML = "Subsuribe Success";
                }
                else{
                    console.error(res.statusText);
                }
            })
        }
        else{
            document.getElementById("info").innerHTML = "Please insert Email";
        }
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
                        <h1 id = "info"></h1>
                    </form>
                </div>
                
                <div class="col-md-3" />
            </div>
        </div>
        
    );

}


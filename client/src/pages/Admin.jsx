import React from 'react';
import { json } from 'react-router';
import { auth } from '../firebase';

function Admin() {

    async function loadUserData(){
        var dataJson = await fetch('http://'+ process.env.REACT_APP_IP_ADDRESS +':5000/api/sleepData/admin', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(
            {"user": auth.currentUser}
        )}
        )
        var dataList = "";

        await dataJson.json().then(result => dataList = result)

            document.getElementById("test").innerText = checkExistsData("wellbeingValue", dataList);
    }

    function checkExistsData(data, dataList){
        if (dataList.length > 0){
            if (data in dataList[dataList.length-1]){
                return dataList[dataList.length-1][data];
            }
            else{
                return "Undefined";
            }
        }
        else{
            return "Undefined";
        }
    }

    return (
        <div class="container-fluid">
            <h1>Search for Users</h1>
            <div class="form-background">
                <input id="userNameInput"></input><input id="userNameSearch" class="btn btn-primary" type="button" value="Search"></input>
            </div>
            <br />
            <p id= 'test'></p>
        </div>
    );
}


export default Admin;
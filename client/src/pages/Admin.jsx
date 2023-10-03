import React from 'react';
import { json } from 'react-router';
import { auth } from '../firebase';

function Admin() {

    async function loadUserData(){
        var dataJson = await fetch('http://localhost:5000/api/sleepData/AllUserData', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'}}
        )
        var dataList = "";
        await dataJson.json().then(result => dataList = result);

        var dataJson = await fetch('http://localhost:5000/api/sleepData/Settings', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(
            {"user": auth.currentUser}
        )}
        )
        var settingsDataList = "";
        await dataJson.json().then(result => settingsDataList = result);
    }

    return (
        <div class="container-fluid">
            <h1>Search for Users</h1>
            <div class="form-background">
                <input id="userNameInput" /><input id="userNameSearch" class="btn btn-primary" type="button" value="Search" onClick={loadUserData}/>
            </div>
            <br />
            <table id='results'></table>
        </div>
    );
}


export default Admin;
import React from 'react';
import { json } from 'react-router';
import { auth } from '../firebase';

function Admin() {

    async function loadUserData(){
        var UIDDataJson = await fetch('http://localhost:5000/api/sleepData/AllUserUID', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'}}
        )
        var UIDList = "";
        await UIDDataJson.json().then(result => UIDList = result);

        console.log(UIDList);

        var dataJson = await fetch('http://localhost:5000/api/sleepData/', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(
            {"user": auth.currentUser}
        )}
        )
        var dataList = "";
        await dataJson.json().then(result => dataList = result);
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
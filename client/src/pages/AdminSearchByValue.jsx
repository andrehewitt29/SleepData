import React from 'react';

function SearchByValue() {

    async function loadUserData() {
        var tableContents = "<tr><td>Name</td><td>User ID</td><td>Date Submitted</td><td>Value</td></tr>";
        var input = document.getElementById("userValueInput").value;

        var UIDDataJson = await fetch('http://localhost:5000/api/sleepData/AllUserUID', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'}}
        )
        var UIDList = "";
        await UIDDataJson.json().then(result => UIDList = result);

        for (var i = 0; i < UIDList.length; i++) {
            var settingsDataJson = await fetch('http://localhost:5000/api/sleepData/getSettingsWithUid', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(
                {"user": UIDList[i]._queryOptions.collectionId}
            )}
            )
            var settingsDataList = "";
            await settingsDataJson.json().then(result => settingsDataList = result);

            var dataJson = await fetch('http://localhost:5000/api/sleepData/getWithUid', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(
                {"user": UIDList[i]._queryOptions.collectionId}
            )}
            )
            var dataList = "";
            await dataJson.json().then(result => dataList = result);

            for (var a = 0; a < dataList.length; a++) {
                tableContents = tableContents + "<tr><td>" + settingsDataList[0].firstNameValue + " " + settingsDataList[0].lastNameValue + "</td><td>" + UIDList[i]._queryOptions.collectionId + "</td><td>" + dataList[a].userInputDate + "</td><td>" + dataList[a][input] + "</td></tr>"
            }
        }
        console.log(settingsDataJson);
        console.log(settingsDataList);

        document.getElementById("results").innerHTML = tableContents;
    }

    return (
        <div class="container-fluid">
            <h1>Search By Value</h1>
            <div class="form-background">
                <input id="userValueInput" /><input id="userValueSearch" class="btn btn-primary" type="button" value="Search" onClick={loadUserData}/>
            </div>
            <br />
            <table id='results'></table>
        </div>
    );
}


export default SearchByValue;
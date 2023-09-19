import React from 'react';

function Admin() {
    return (
        <div class="container-fluid">
            <h1>Search for Users</h1>
            <div class="form-background">
                <input id="userNameInput"></input><input id="userNameSearch" class="btn btn-primary" type="button" value="Search"></input>
            </div>
            <br />
        </div>
    );
}

export default Admin;
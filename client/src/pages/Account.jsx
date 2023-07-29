import React, {useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';
import { NavLink, useNavigate } from 'react-router-dom';
import {auth} from "../firebase";
function Account() {
    return (
        <div class="container-fluid">
            <Header />
            Logged In as {auth.currentUser.email} 
            <form >
                <div>
                
                </div>
            </form>  
            <br/><br/>
            This is the logged in account page, 
            Users will have options to enter review or delete sleep data.
            <Footer />
        </div>
    )     
}

export default Account;
import React, {useEffect, useState} from 'react';
import './style.css';
import logo from './img/LifespanTrustLogo.png';


function App(){

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
  fetch("/api").then(
    response => response.json()
  ).then(
    data =>{
      setBackendData(data)
    }
  )
  }, [])

  return(
    <Navigation />
  )
}

const Navigation = () => (
  <header id="topbar">
        <ul id="leftHeader">
            <a href="#" class="headlink" id="selected"><li>Home</li></a>
            <a href="#" class="headlink"><li>About</li></a>
        </ul>
        <img id="logo" src={logo} />
        <ul id="rightHeader">
            <a href="#" class="headlink"><li>Sign Up</li></a>
            <a href="#" class="headlink"><li>Login</li></a>
        </ul>
    </header>
)

export default App
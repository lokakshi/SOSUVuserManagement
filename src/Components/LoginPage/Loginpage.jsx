import React, { useState } from 'react';
import "./Loginpage.css"
import { useNavigate } from 'react-router-dom'
export const Loginpage = () => {

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // Send a login request to the server with the username and password
    // If login is successful, redirect the user to the dashboard
    // If login fails, display an error message
    navigate('/Home');
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="logo-div">
        <img className="logo" src="./logo192.png"  alt="React Image" />
    </div>
      <label>
        Username:
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} required />
      </label>
      <br />
      <input type="submit" value="Login" />
      
      <button className="guest-button" onClick={() =>navigate('/User')}>
       Guest User
      </button>
    </form>
   
    
    </>
  )
}





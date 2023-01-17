import React, { useState } from 'react';
import "./Loginpage.css"

export const Loginpage = () => {

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Send a login request to the server with the username and password
    // If login is successful, redirect the user to the dashboard
    // If login fails, display an error message
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
    </form>
    
    </>
  )
}





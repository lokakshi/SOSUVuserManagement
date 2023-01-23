import React, { useState ,useEffect } from 'react';
import "./Loginpage.css"
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';

export const Loginpage = (props) => {

  const 
  {
    email,
    setEmail,
    password,
    setPassword,
    handleSignup,
    handlelogin,
    hasAccount,
    sethasAccount,
    EmailError,
    passworderror}
    =props;

  return (
   <section className='login'>
    <div className="loginContainer">
      {/* <img className="logo" src="./logo192.png" alt="SOSUV"/>    */}
      <label>Username:</label>
      <input type="text" autoFocus required value={email} onChange={(e)=>{
        setEmail(e.target.value)
      }}/>
      <p className="errorMsg">{EmailError}</p>
      <label>Password:</label>
      <input type="password" autoFocus required value={password} onChange={(e)=>{
        setPassword(e.target.value)
      }}/>
      <p className="errorMsg">{passworderror}</p>
      <div className="btnContainer">
        {hasAccount?(
          <>
          <button onClick={handlelogin}>Sign in</button>
          <p>Don't have a Account <span onClick={()=>sethasAccount(!hasAccount)}>Sign up</span></p>
          </>
        ):(
          <>
          <button onClick={handleSignup}>Sign up</button>
          <p>Have an Account? <span onClick={()=>sethasAccount(!hasAccount)}>Sign in</span></p>
          </>
        )}
      </div>
    </div>
   </section>
  )
}





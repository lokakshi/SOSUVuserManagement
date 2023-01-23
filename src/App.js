import React, { useState ,useEffect } from 'react';
import './App.css';
import fire from './fire';
import { Loginpage } from './Components/LoginPage/Loginpage';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import UserPage from './Components/User/UserPage';
import DashboardPanel from './Components/DashboardPanel/DashboardPanel';


function App() {
  const  [user, setUser] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [EmailError,  setEmailError] = useState('');
   const [passworderror, setPasswordError] = useState('');
   const [hasAccount, sethasAccount] = useState(false);


   const clearInputs=()=>{
    setEmail('');
    setPassword('');
   }
   const clearErrors=()=>{
    setEmailError('');
    setPasswordError('');
   }

  const handlelogin=()=>{
    clearInputs();
      fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err=>{
          switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
          }
      })
  };
  const handleSignup=()=>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err=>{
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
    })
};  

const handleLogout=()=>{
  fire.auth().signOut();
}

const authListener=()=>{
  fire.auth().onAuthStateChanged(user=>{
    if(user){
      clearInputs();

      setUser(user);
    }else{
      setUser('')
    }
  })
};

useEffect(()=>{
  authListener();
},[]);

  return (
    <>
   
      {user?(
      <UserPage handleLogout={handleLogout}/>):(
      <Loginpage 
      email={email} 
      setEmail={setEmail}
      password={password} 
      setPassword={setPassword}
      handleSignup={handleSignup}
      handlelogin={handlelogin}
      hasAccount={hasAccount}
      sethasAccount={sethasAccount}
      EmailError={EmailError}
      passworderror={passworderror}
      />)}
     
    
   
   </>  
  );
}

export default App;

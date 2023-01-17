import React from 'react'
import { TopBar } from '../TopBar/TopBar'
import { UserForm } from '../UserForm/UserForm'
import './Home.css'
export const Home = () => {
  return (
    <div className="home"> 
        <TopBar/>

      <div className='Createuser'>
       <UserForm/> 
      </div>
        
    </div>

        
  )
}

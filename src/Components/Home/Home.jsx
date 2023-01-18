import React from 'react'
import { TopBar } from '../TopBar/TopBar'
import { UserForm } from '../UserForm/UserForm'
import { SideBar } from '../SideBar/SideBar'
import './Home.css'

export const Home = () => {
  return (
   
    <div className="home"> 
        <TopBar className='navbar-home'/> 
    <div className='Switch-div'>
        <div className='graph-div'>
             
        </div>
        <div className='companydetail-div'>

        </div>
        <div className='div1'>

        </div>
        <div className='div2'>

        </div>
    </div>
    <div className='Sidebar-div'>

    </div>  

    </div>  
   
  )
}

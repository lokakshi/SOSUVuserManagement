import React from 'react'
import { TopBar } from '../TopBar/TopBar'
import SideMenu from '../HomePageSideMenu/SideMenu'
import './Home.css'

const users = [
  { id: 1, name: 'John Smith', profileIconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rAEMVqbuolFP4GWFx5yh708EqFbkdIQgWA&usqp=CAU" },
  { id: 2, name: 'Jane Doe', profileIconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rAEMVqbuolFP4GWFx5yh708EqFbkdIQgWA&usqp=CAU" },
  { id: 3, name: 'Bob Johnson', profileIconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rAEMVqbuolFP4GWFx5yh708EqFbkdIQgWA&usqp=CAU" }

];
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
        <SideMenu users={users}/>
    </div>  

    </div>  
   
  )
}

import React from 'react'
import './UserPage.css'
import { TopBar } from '../TopBar/TopBar'
import Export from '../Export/Export'
import DashboardPanel from '../DashboardPanel/DashboardPanel'
const UserPage = (props) => {
  const {handleLogout} =props
  return (<>
    <TopBar/>
    
    <button className='btn-logout' onClick={handleLogout}>Logout</button>
    
    <div className='user-switch'>
          <DashboardPanel/>
    </div>
    
        

    
    </>
  )
}

export default UserPage
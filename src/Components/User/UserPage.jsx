import React from 'react'
import './UserPage.css'
import { TopBar } from '../TopBar/TopBar'
import Export from '../Export/Export'
import TodoTable from '../TodoTable/TodoTable'
const UserPage = () => {
  return (<>
    <TopBar/>
    <div className='user-panel'>

        <div className='Side-window'>
          <div className='child-Side-window'>
            <Export/>
          </div>
          
    </div>
    <div className='user-switch'>
          <TodoTable/>
          </div>
        

    </div>
    </>
  )
}

export default UserPage
import React from 'react'
import "./TopBar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import TranslateIcon from '@mui/icons-material/Translate';
import SettingsIcon from '@mui/icons-material/Settings';
export const TopBar = () => {
  return (
    <div>
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img className="logo" src="./logo192.png" alt="SOSUV"/>   
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsIcon/>
                        <span className="topIconBadge">5</span>
                    </div>

                    <div className="topbarIconContainer">
                        <TranslateIcon/>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon/>
                    </div>
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Profile" className="topAvatar" />
                </div>
            </div>
        </div>
    </div>
  )
}

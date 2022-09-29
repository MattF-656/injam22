import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import HomeDashboard from '../../components/HomeDashboard/HomeDashboard'

import './HomePage.css'

function HomePage() {
  return (
    <div className='HomeParent'>
      <div className='SidebarContainer'>
        <SideBar/>
      </div>
      <div className='DynamicContentContainer'>
        {/* This will switch based on the selection of the sidebar */}
        <HomeDashboard/>
      </div>
    </div>
  )
}

export default HomePage
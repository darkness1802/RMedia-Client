import React from 'react'
import SidebarButton from './SidebarButton'
import { MdFavorite, MdSpaceDashboard } from "react-icons/md"
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa"
import { IoLibrary } from "react-icons/io5"
import "./Sidebar.css"
function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img src='https://picsum.photos/55/55' alt="" className='profile-img' />
      <div>
        <SidebarButton title="Browser" to="/" icon={<MdSpaceDashboard/>} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay/>} />
        <SidebarButton title="Favorites" to="/favorite" icon={<MdFavorite/>} />
      </div>
      <SidebarButton title="SignOut" to="/" icon={<FaSignOutAlt/>} />
    </div>
  )
}

export default Sidebar
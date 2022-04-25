import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconContext } from 'react-icons'
import "./Sidebar.css"

function SidebarButton({ title, to, icon }) {
// ----->
    const location = useLocation()
    const isActive = location.pathname === to
    const btnClass = isActive?"btn-body active":"btn-body"
// ----->
    return <Link className='btn-link' to={to}>
        <div className={btnClass}>
            <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
                {icon}
            </IconContext.Provider>
        </div>
        <p className='btn-title'>{title}</p>
    </Link>
}

export default SidebarButton
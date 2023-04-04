import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Categories() {
  const activeClassName=({isActive})=>{
    return isActive?'group-item selected':'group-item';
  }
  const activeStyle = ({isActive})=>{
    return{
      backgroundColor:isActive?'yellow':'blue',
      color:isActive?'red':'yellow'
    }
  }
  return (
    <div>
      <h2>Welcome to Categories - Các khóa học chuyên đề </h2>
      <ul>
        <li>
          <NavLink style={activeStyle} className={activeClassName}  to={'program'}>Khóa học lập trình </NavLink>
        </li>
        <li>
          <NavLink style={activeStyle} className={activeClassName} to={'network'}>Khóa học lập trình mạng </NavLink>
        </li>
        <li>
          <NavLink style={activeStyle} className={activeClassName} to={'kid'}>Khóa học lập trình cho trẻ em </NavLink>
        </li>
      </ul>
      <div className='box'>
        <Outlet ></Outlet>
      </div>
    </div>
  )
}

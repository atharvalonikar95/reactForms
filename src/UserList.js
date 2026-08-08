import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserList = ({users}) => {
    const navigate=useNavigate()
  return (
    <div>
        <h2>UserList</h2>
        <ul>
            {
                users.map(item=>{
                    return(
                        <li key={item.id}  ><Link to={`/users/${item.id}`}>{item.name}</Link></li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default UserList
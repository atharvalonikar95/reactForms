import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = ({ users }) => {
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const user = users.find(item => item.id === Number(id))

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 100)
        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return<p>loading...</p>
    }
    return (
        <div>
            <h2>UserDetails</h2>
            <p><b>Name :</b> {user.name}</p>
            <p><b>Username :</b> {user.username}</p>
            <p><b>Email :</b> {user.email}</p>
            <p><b>Phone :</b> {user.phone}</p>
            <p><b>website :</b> {user.website}</p>
        </div>
    )
}

export default UserDetails
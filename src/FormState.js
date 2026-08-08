import React, { useState } from 'react'
import Card from './Card'

const FormState = () => {
    const [formData,setFormData]=useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{

        e.preventDefault();
        console.log(formData)
    }
  return (
    <Card>
        <form id="form-state-link" onSubmit={handleSubmit}>
            <input id="full_name" placeholder="Full Name" name='fullName' value={formData.fullName} onChange={handleChange} />
            <input id="email" placeholder="email" name='email' value={formData.email} onChange={handleChange} />
            <input id="password" placeholder="password" name='password' value={formData.password} onChange={handleChange} />
            <input id="password_confirmation" placeholder="confirmPassword" name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
            <button type="submit">submit</button>
        </form>
    </Card>
  )
}

export default FormState
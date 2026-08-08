import React, { useRef } from 'react'
import Card from './Card'

const FormRef = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log({
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value
    })
  }

  return (
    <Card>
        <form id="form-ref-link" onSubmit={handleSubmit}>
            <input  
                id="full_name"
                ref={fullNameRef}
                placeholder="Full Name"
            />
            <input  
                id="email"
                ref={emailRef}
                placeholder="email"
            />
            <input  
                id="password"
                type="password"
                ref={passwordRef}
                placeholder="password"
            />
            <input  
                id="password_confirmation"
                type="password"
                ref={confirmPasswordRef}
                placeholder="Confirm Password"
            />
            <button type="submit">
            Submit
            </button>
        </form>
    </Card>
  )
}

export default FormRef
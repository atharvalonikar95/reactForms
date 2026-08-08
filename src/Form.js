import React from 'react'
import Card from './Card'

const Form = () => {
    return (
        <Card>
            <form>
                <input
                    id="full_name"
                    placeholder="Full Name"
                />

                <input
                    id="email"
                    placeholder="Email"
                />

                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                />

                <input
                    id="password_confirmation"
                    type="password"
                    placeholder="Confirm Password"
                />

                <button type="submit">
                    Submit
                </button>
            </form>
        </Card>
    )
}

export default Form
import React from 'react'

const ReactMemo = ({ todos }) => {
    console.log('rendered')
    return (
        <div>
            <ul>
            {
                todos.map((todo, idx) => {
                        return(
                        <li key={idx}>{todo}</li>
                        )

                })
            }
            </ul>
        </div>
    )
}

export default React.memo(ReactMemo)
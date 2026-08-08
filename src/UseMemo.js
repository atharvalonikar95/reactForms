import React, { useEffect, useMemo, useState } from 'react'
import ReactMemo from './ReactMemo'

const UseMemo = () => {
    const [todos, setTodos] = useState(['hell'])
    const [count, setCount] = useState(0)
    const [task, setTask] = useState("")
    useEffect(() => {
        console.log(todos)
    }, [todos])

    const handleSubmit = () => {
        if (task.trim().length > 5) {
            setTodos([...todos, task])
            setTask("")
        }
    }
    const totalTodos = useMemo(() => {
        console.log("Calculating total todos...");
        return todos.length
    })
    return (
        <div>
            <h4>My Todos</h4>
            <button onClick={() => setTodos([...todos, 'New Todo'])}>Add Todo</button>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h4>Expensive calculation</h4>
            <p>{totalTodos}</p>
            <input value={task} onChange={(e) => setTask(e.target.value)} placeholder='enter task' />
            <button onClick={handleSubmit}>Add skill</button>
            <h4>React.memo</h4>
            <ReactMemo todos={todos} />
        </div>
    )
}

export default UseMemo
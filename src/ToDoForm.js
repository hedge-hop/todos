import React, { useState } from 'react'


export default function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')


    }
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)

    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type='text'
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Name your task here..." />
            <button>Save task</button>
        </form>
    )
}

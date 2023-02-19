import { useState } from 'react'
import Button from './Button'
import Card from './Card'
import Input from './Input'

export default function Todo() {
    const [newTask, setNewTask] = useState('Empty')
    const [tasks, setTask] = useState('')

    function handleAddTask(e) {
        e.preventDefault()

        setTask((prevTask) => [
            ...prevTask,
            {
                id: Math.floor(Math.random() * Date.now()),
                name: newTask,
                completed: false,
            },
        ])
        setNewTask('')
    }
    function handleComplete(e) {
        const updateTask = tasks.map((task) => {
            if (e === task.id) {
                return {
                    ...task,
                    completed: !task.completed,
                }
            }

            return task
        })
        setTask(updateTask)
    }
    function handleRemove(e) {
        const removeTask = tasks.filter((task) => task.id !== e)

        setTask(removeTask)
    }
    return (
        <Card>
            <Card.Title>Todo</Card.Title>
            <Card.Body>
                <form>
                    <div className='flex items-center'>
                        <Input value={tasks.id} onChange={(e) => setNewTask(e.target.value)} />
                        <Button onClick={handleAddTask} text={'Add Task'} />
                    </div>
                </form>
                {tasks.length > 0 ? (
                    <ol className='space-x-2'>
                        {tasks.map((task) => (
                            <li className='flex items-center justify-between mt-3' key={task.id}>
                                <span>
                                    {task.name} {task.completed ? '✅' : '❌'}
                                </span>

                                <div className='space-x-2 '>
                                    <button onClick={() => handleComplete(task.id)} className='border p-1'>
                                        Mark as {task.completed ? 'Completed' : 'Incomplete'}
                                    </button>
                                    <button onClick={() => handleRemove(task.id)} className='border p-1'>
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ol>
                ) : null}
            </Card.Body>
            <Card.Footer>U have {tasks.length} task</Card.Footer>
        </Card>
    )
}

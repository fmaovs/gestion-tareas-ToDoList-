import { useState} from "react";

export default function(){

    const [ tasks, setTasks ] = useState([])
    const [ newTask, setNewTask ] = useState('')

    /* Crear Tarea */
    const addTask = () => {
        if(newTask.trim() === '')return
        setTasks([...tasks, {id: Date.now(), text: newTask, completed: false}])
        setNewTask('')
    }

    /* Eliminar tarea */
    const deleteTask = (id) => {
        setTask(tasks.filter((task) => task.id != id))
    }

    /* Marcar tarea como compleatada */
    const toggleCompleted = (id) => {
        setTasks(
            tasks.map((task) => {
                task.id === id ? {...task,completed: !task.completed } : task
            })
        )
    }

    return(
        tasks, newTask, setNewTask, addTask, deleteTask, toggleCompleted
    )
}
import TaskItem from "../TaskItem/TaskItem";

function TaskList({ tasks, toggleCompleted, deleteTask, setEditingTask }) {
    if (tasks.length === 0) {
        return <p className="text-center text-gray-500">No hay tareas para mostrar.</p>;
    }

    return (
        <ul className="space-y-2 mt-4">
        {tasks.map((task) => (
            <TaskItem
            key={task.id}
            task={task}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
            setEditingTask={setEditingTask}
            />
        ))}
        </ul>
    );
}

export default TaskList;

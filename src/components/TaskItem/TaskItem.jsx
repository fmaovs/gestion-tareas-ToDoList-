function TaskItem({ task, toggleCompleted, deleteTask, setEditingTask }) {
        return (
            <li
            className={`flex justify-between items-start p-4 border rounded-2xl shadow-md transition ${
                task.completed
                    ? "bg-gray-100 line-through text-gray-500"
                    : "bg-white hover:bg-indigo-50"
            }`}
            >
            <div className="flex items-start gap-2">
                <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(task.id)}
                className="mt-1"
                />
                <div>
                <h3 className="font-semibold">{task.title}</h3>
                {task.description && <p className="text-sm">{task.description}</p>}
                </div>
            </div>

            <div className="flex gap-2">
                <button
                    onClick={() => setEditingTask(task)}
                    className="text-indigo-500 hover:text-indigo-700 text-sm font-semibold transition"
                >
                    
                    Editar
                </button>
                <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-semibold transition"
                >
                    X   
                </button>

            </div>
            </li>
    );
}

export default TaskItem;

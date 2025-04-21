import { useEffect, useState } from "react";

function TaskForm({ addTask, editingTask, updateTask, setEditingTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
    if (editingTask) {
        setTitle(editingTask.title);
        setDescription(editingTask.description);
    } else {
        setTitle("");
        setDescription("");
    }
    }, [editingTask]);

    const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
        alert("El título no puede estar vacío.");
        return;
    }

    if (editingTask) {
        updateTask({
        ...editingTask,
        title,
        description,
        });
        setEditingTask(null);
    } else {
        addTask({ title, description });
    }

    setTitle("");
    setDescription("");
    };

    return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
        type="text"
        className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
        className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder="Descripción (opcional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex gap-2">
        <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
            {editingTask ? "Actualizar tarea" : "Agregar tarea"}
        </button>

        {editingTask && (
            <button
            type="button"
            onClick={() => setEditingTask(null)}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
            Cancelar
            </button>
        )}
        </div>
    </form>
    );
}

export default TaskForm;

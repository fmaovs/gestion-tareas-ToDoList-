import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import TaskStats from "./components/TaskStats/TaskStats";

// Datos iniciales opcionales
const initialTasks = [
  {
    id: uuidv4(),
    title: "Aprender React",
    description: "Estudiar los fundamentos de React",
    completed: false,
    createdAt: new Date(),
  },
];

function App() {
  // Estado de tareas
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : initialTasks;
  });

  const [filter, setFilter] = useState("all"); // all | active | completed
  const [editingTask, setEditingTask] = useState(null);

  // Guardar en localStorage cuando cambian las tareas
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Agregar nueva tarea
  const addTask = ({ title, description }) => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };
    setTasks([newTask, ...tasks]);
  };

  // Actualizar tarea existente
  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  // Eliminar tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Marcar como completada
  const toggleCompleted = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Aplicar filtro
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
          <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600 drop-shadow-sm">
            Lista de Tareas 📝
          </h1>


          <TaskForm
            addTask={addTask}
            editingTask={editingTask}
            updateTask={updateTask}
            setEditingTask={setEditingTask}
          />

          <TaskFilter filter={filter} setFilter={setFilter} />

          <TaskList
            tasks={filteredTasks}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
            setEditingTask={setEditingTask}
          />

          <TaskStats tasks={tasks} />
          </div>
    </div>

    
  );
}

export default App;

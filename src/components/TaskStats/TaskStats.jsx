function TaskStats({ tasks }) {
    const total = tasks.length;
    const pending = tasks.filter((t) => !t.completed).length;

        return (
        <div className="text-center my-4">
            <p className="text-sm text-gray-600">
            Tienes <span className="font-semibold">{pending}</span> tarea{pending !== 1 && "s"} pendiente{pending !== 1 && "s"} de un total de <span className="font-semibold">{total}</span>.
            </p>
        </div>
        );
}
export default TaskStats;
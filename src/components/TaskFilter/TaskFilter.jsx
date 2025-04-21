function TaskFilter({ filter, setFilter }) {
    const filters = [
        { label: "Todas", value: "all" },
        { label: "Activas", value: "active" },
        { label: "Completadas", value: "completed" },
    ];
        return (
            <div className="flex justify-center gap-2 my-4">
                {filters.map((f) => (
                <button
                    key={f.value}
                    onClick={() => setFilter(f.value)}
                    className={`px-4 py-1 rounded-full font-medium border transition-all duration-200 shadow-sm ${
                    filter === f.value
                        ? "bg-indigo-500 text-white border-indigo-500"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-indigo-100"
                    }`}
                >
                    {f.label}
                </button>
                ))}
            </div>
        );
}
export default TaskFilter;
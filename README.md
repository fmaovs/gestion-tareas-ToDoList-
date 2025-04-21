# 📝 Gestión de Tareas - Todo App

Aplicación de gestión de tareas desarrollada con **React**, **Vite** y **Tailwind CSS**. Permite crear, editar, completar, eliminar y filtrar tareas, con persistencia de datos mediante `localStorage`.

---

## 🚀 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [UUID](https://www.npmjs.com/package/uuid) para generación de IDs únicos

---

## 🎯 Funcionalidades

- ✅ Añadir nuevas tareas con título y descripción  
- ✅ Editar tareas existentes  
- ✅ Eliminar tareas  
- ✅ Marcar tareas como completadas  
- ✅ Filtrar tareas por estado: Todas, Activas, Completadas  
- ✅ Mostrar contador de tareas pendientes  
- ✅ Guardar tareas en `localStorage` para mantener datos al recargar  
- ✅ Interfaz amigable, responsive y estilizada con Tailwind CSS  

---

## 📁 Estructura del proyecto

/src 
    /components 
        /TaskForm 
            TaskForm.jsx 
        /TaskList 
            TaskList.jsx 
        /TaskItem 
            TaskItem.jsx 
        /TaskFilter 
            TaskFilter.jsx 
        /TaskStats 
            TaskStats.jsx 
    App.jsx 
    main.jsx 
    index.css


---

## ⚙️ Instalación y ejecución

1. Clona este repositorio:
   ```bash
   git clone https://github.com/fmaovs/gestion-tareas.git

2. Instala dependencias:
    npm install

3. Inicia la aplicación:
    npm run dev

4. Accede en tu navegador a:
    http://localhost:5173

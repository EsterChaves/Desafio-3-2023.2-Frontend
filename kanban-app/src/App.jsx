import React, { useState } from 'react';
import './App.css'; 
import KanbanBoard from './components/KanbanBoard'; 

function App() {
  const [tasks, setTasks] = useState([]); 

  // Adicionar nova tarefa à lista
  const addTask = (newTaskData) => {
    const newTask = {
      id: Date.now(), 
      title: newTaskData.title,
      description: newTaskData.description,
      responsible: newTaskData.responsible,
      deadline: newTaskData.deadline,
      status: newTaskData.status || 'A Fazer'
    };
    
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // DELETAR uma tarefa 
  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };
  
  return (
    <div className="app-container">
      <KanbanBoard 
        tasks={tasks} 
        addTask={addTask} 
        deleteTask={deleteTask} 
      />
    </div>
  );
}

export default App;
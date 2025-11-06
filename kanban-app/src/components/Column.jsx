import React, { useState } from 'react';
import TaskCard from './TaskCard'; 
import TaskForm from './Taskform'; 
import '../App.css'; 

// Recebe deleteTask
function Column({ title, tasks, addTask, deleteTask }) { 
  const [isFormVisible, setIsFormVisible] = useState(false);
  const columnClass = title.toLowerCase().replace(' ', '-'); 

  const handleSave = (newTaskData) => {
    addTask({ ...newTaskData, status: title }); 
    setIsFormVisible(false);
  };
  
  const handleCancel = () => {
    setIsFormVisible(false);
  };

  return (
    <div className={`kanban-column ${columnClass}`}>
      
      <h2 className="column-title">{title}</h2>
      
      <div className="task-list">
        {tasks.map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            deleteTask={deleteTask} // <--- PASSANDO PARA O TASKCARD
          />
        ))}
      </div>
      
      {isFormVisible && (
        <TaskForm onSave={handleSave} onCancel={handleCancel} />
      )}

      {!isFormVisible && (
        <button 
          className="add-task-btn" 
          onClick={() => setIsFormVisible(true)}
        >
          +
        </button>
      )}
    </div>
  );
}

export default Column;
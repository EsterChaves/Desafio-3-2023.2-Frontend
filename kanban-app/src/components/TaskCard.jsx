import React from 'react';
import '../App.css'; 

const UserIcon = () => <span style={{marginRight: '5px'}}>👤</span>;
const DateIcon = () => <span style={{marginRight: '5px'}}>📅</span>;

// Recebe deleteTask
function TaskCard({ task, deleteTask }) { 
  const { title, description, responsible, deadline } = task;
  const statusClass = task.status.toLowerCase().replace(' ', '-');

  // Exclusão
  const handleDelete = () => {
      if(window.confirm(`Tem certeza que deseja excluir a tarefa: "${title}"?`)){
          deleteTask(task.id);
      }
  }

  return (
    <div className={`task-card card-${statusClass}`}>
      <div className="task-header">
        <h3 className="task-title">{title}</h3>
        {/* Botão de excluir */}
        <button onClick={handleDelete} className="delete-btn">
            🗑️
        </button>
      </div>

      <p className="task-description">{description}</p>

      <div className="task-details">
        {/* Responsável */}
        <div className="task-responsible">
          <UserIcon />
          <span>{responsible}</span>
        </div>

        {/* Prazo */}
        <div className="task-deadline">
          <DateIcon />
          <span className="deadline-date">{deadline}</span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
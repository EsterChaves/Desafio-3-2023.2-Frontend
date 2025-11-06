import React from 'react';
import Column from './Column'; 
import '../App.css'; 

// Recebe deleteTask
function KanbanBoard({ tasks, addTask, deleteTask }) { 
  const columns = ['A Fazer', 'Fazendo', 'Feito'];

  return (
    <div className="kanban-board">
      {columns.map(status => (
        <Column
          key={status}
          title={status}
          tasks={tasks.filter(task => task.status === status)}
          addTask={addTask} 
          deleteTask={deleteTask} // <--- PASSANDO PARA O COLUMN
        />
      ))}
    </div>
  );
}

export default KanbanBoard;
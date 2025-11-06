import React, { useState } from 'react';
import '../App.css'; 

function TaskForm({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    responsible: '',
    deadline: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveClick = () => {
    if (!formData.title.trim()) {
        alert("O Título da tarefa é obrigatório!");
        return;
    }

    onSave(formData); 
  };

  return (
    <div className="task-form-card">
      
      <input
        type="text"
        name="title"
        placeholder="Título da tarefa"
        value={formData.title}
        onChange={handleChange}
        className="form-input form-title"
      />

      <div className="form-details-row">
        <input
          type="text"
          name="responsible"
          placeholder="Responsável"
          value={formData.responsible}
          onChange={handleChange}
          className="form-input form-responsible"
        />
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="form-input form-deadline"
        />
      </div>

      <textarea
        name="description"
        placeholder="Descrição"
        value={formData.description}
        onChange={handleChange}
        className="form-input form-description"
      />

      <div className="form-actions">
        <button onClick={onCancel} className="form-btn-cancel">
          ❌
        </button>
        <button onClick={handleSaveClick} className="form-btn-save">
          ✔️
        </button>
      </div>
    </div>
  );
}

export default TaskForm;
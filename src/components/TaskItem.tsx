import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  toggleComplete: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className={`task-item ${task.isCompleted ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => toggleComplete(task.id)}
      />
      <span>{task.title}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;

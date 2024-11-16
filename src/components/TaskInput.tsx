import React, { useState } from 'react';

interface TaskInputProps {
  addTask: (title: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    if (title.trim()) {
      addTask(title);
      setTitle(""); // Clear the input field
    }
  };

  // Detects when the "Enter" key is pressed
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="What's your next task?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown} // Adding the Enter key functionality
      />
      <button onClick={handleAddTask}>➕ Add Task</button>
    </div>
  );
};

export default TaskInput;

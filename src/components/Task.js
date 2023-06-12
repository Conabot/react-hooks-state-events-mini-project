import React from "react";
import { TASKS } from "../data";

function Task({task, text, category, handleDeleteTask}) {

  const handleDelete = () => {
    handleDeleteTask(task)
  }
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;

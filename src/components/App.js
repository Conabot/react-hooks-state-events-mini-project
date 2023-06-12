import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { ta } from "date-fns/locale";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState ("All");
  //const [filteredTasksCategory, setFilteredTasksCategory] = useState(tasks);

  console.log(selectedCategory)
 //console.log(filteredTasksCategory)
  const handleDeleteTask = (deleteTask) => {
    const filteredTasks = tasks.filter((task) => deleteTask.text !== task.text);
    setTasks(filteredTasks)
  }
  
  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const handleCategoryClick = (category) => {
    
    setSelectedCategory(category)
    
    }

  const filteredTasksCategory= tasks.filter((task) => {
  if (selectedCategory === "All") {
    return task
  } else{
    return task.category === selectedCategory}})


 
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} 
                      handleCategoryClick={handleCategoryClick} 
                      selectedCategory={selectedCategory}/>
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasksCategory} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;

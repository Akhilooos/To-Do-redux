import React, { useState } from 'react';

const ToDoApp = () => {
 const [tasks, setTasks] = useState([]);
 const [text, setText] = useState("");

 const handleTaskChange = (e) => {
    setText(e.target.value);
 };

 const handleAddTask = (e) => {
    e.preventDefault();
    if (text) {
      setTasks([...tasks, { text, status: "Pending" }]);
      setText("");
    }
 };

 const handleTaskStatusChange = (index) => {
    const newTasks = [...tasks];
    newTasks[index].status = newTasks[index].status === "Pending" ? "Completed" : "Pending";
    setTasks(newTasks);
 };

 return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleAddTask} className="mb-4">
        <input
          type="text"
          value={text}
          onChange={handleTaskChange}
          className="border-2 border-gray-300 p-2 rounded-md w-full"
          placeholder="Enter a task"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Add Task
        </button>
      </form>
      <div>
        {tasks.map((task, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <span>{task.text}</span>
            <button
              onClick={() => handleTaskStatusChange(index)}
              className={`font-bold py-2 px-4 rounded ${task.status === "Pending" ? "bg-green-500 hover:bg-green-700" : "bg-yellow-500 hover:bg-yellow-700"} text-white`}
            >
              {task.status}
            </button>
          </div>
        ))}
      </div>
    </div>
 );
};

export default ToDoApp;

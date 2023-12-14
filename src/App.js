import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTrash } from "@fortawesome/free-solid-svg-icons";

function App() {
  const initialTasks = ['Identify & contextualize the problem', 'Present ideas and changes to team', 'Prepare user flows', 'Prepare design style guide', 'Delivery stage: test and release'];
  const [tasks, setTasks] = useState(initialTasks.map(task => ({ text: task, completed: false })));

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const addTask = () => {
    const newTask = prompt('Enter a new task:');
    if (newTask) {
      setTasks((prevTasks) => [...prevTasks, { text: newTask, completed: false }]);
    }
  };

  const completedTasksCount = tasks.filter(task => task.completed).length;
  const totalTasksCount = tasks.length;

  return (
    <div className="bg-gray-100 flex flex-col items-center md:flex md:items-center relative">
      {/* Image section */}
      <div className="mb-8 mt-8 mx-5 relative">
        <img
          className="w-100 h-60 object-cover mx-auto rounded"
          src="https://intellsys-optimizer.b-cdn.net/interviews/978ea909-91ec-49c2-bd69-d494c097d38d/header.jpg"
          alt="Random Placeholder Image"
        />
        <h2 className="text-4xl text-blue-400 font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">TODO</h2>
      </div>

      {/* Task List section */}
      <div className="flex flex-col mx-4 md:flex">
        <div className="bg-white p-4 rounded shadow-lg w-full md:w-1/2 flex flex-col mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Task List</h2>
            <p className="text-gray-500 ml-auto">
              {completedTasksCount}/{totalTasksCount} done
            </p>
          </div>
          <div className="flex flex-col items-start">
            <ul className="list-none pl-4 mb-4 w-full">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className={`flex items-center mb-2 ${
                    task.completed ? 'line-through text-gray-500' : ''
                  }`}
                  style={{ borderBottom: '1px solid #ccc', paddingBottom: '8px' }}
                >
                  <FontAwesomeIcon icon={faBars} className="mr-2" />
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(index)}
                  />
                  <span>{task.text}</span>
                  {task.completed && (
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="ml-auto text-red-500 cursor-pointer"
                      onClick={() => deleteTask(index)}
                    />
                  )}
                </li>
              ))}
            </ul>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={addTask}
            >
              + Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

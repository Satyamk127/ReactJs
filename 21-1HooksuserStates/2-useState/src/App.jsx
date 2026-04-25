import { useState } from "react";

const App = () => {}
  const [tasks, setTasks] = useState([
    { id: 1, text: "Explore React Hooks", completed: true },
    { id: 2, text: "Build a premium UI", completed: false },
    { id: 3, text: "Master useState", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    
    setTasks([newTask, ...tasks]);
    setInputValue("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="card animate-fade">
      <header className="header">
        <h1>ZenTask</h1>
        <p>Stay focused, be productive.</p>
      </header>

      <form onSubmit={addTask} className="input-group">
        <input 
          type="text" 
          placeholder="Add a new task..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-btn">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </form>

      <div className="stats">
        <div className="stat-item">
          Tasks <span className="stat-value">{tasks.length}</span>
        </div>
        <div className="stat-item">
          Completed <span className="stat-value">{completedCount} of {tasks.length}</span>
        </div>
      </div>

      <ul className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id} className="task-item">
              <div 
                className={`checkbox ${task.completed ? 'checked' : ''}`}
                onClick={() => toggleTask(task.id)}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="3" fill="none">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span 
                className={`task-text ${task.completed ? 'completed' : ''}`}
                onClick={() => toggleTask(task.id)}
              >
                {task.text}
              </span>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </li>
          ))
        ) : (
          <div className="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <p>Your workspace is clear.</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default App;
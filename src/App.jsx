import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const markAllCompleted = () => {
    setTasks(tasks.map(task => ({ ...task, completed: true })));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const getTaskStats = () => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  };

  const stats = getTaskStats();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
          <p className="mt-2 text-gray-600">Organize your tasks efficiently</p>
        </div>

        <TaskForm onAddTask={addTask} />
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Your Tasks</h2>
            <button
              onClick={markAllCompleted}
              className="text-sm bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Mark All Completed
            </button>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-4">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1 rounded-md ${
                    filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  All ({stats.total})
                </button>
                <button
                  onClick={() => setFilter('pending')}
                  className={`px-3 py-1 rounded-md ${
                    filter === 'pending' ? 'bg-yellow-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  Pending ({stats.pending})
                </button>
                <button
                  onClick={() => setFilter('completed')}
                  className={`px-3 py-1 rounded-md ${
                    filter === 'completed' ? 'bg-green-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  Completed ({stats.completed})
                </button>
              </div>
            </div>

            {filteredTasks.length === 0 ? (
              <p className="text-center text-gray-500 py-4">
                {filter === 'all' 
                  ? 'No tasks yet. Add some tasks to get started!'
                  : `No ${filter} tasks found.`}
              </p>
            ) : (
              <TaskList
                tasks={filteredTasks}
                onToggleTask={toggleTask}
                onDeleteTask={deleteTask}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
import { FaTrash, FaCheck } from 'react-icons/fa';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`bg-white p-4 rounded-lg shadow-md flex items-center justify-between ${
            task.completed ? 'opacity-75' : ''
          }`}
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onToggleTask(task.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                task.completed
                  ? 'border-green-500 bg-green-500'
                  : 'border-gray-300'
              }`}
            >
              {task.completed && <FaCheck className="text-white text-sm" />}
            </button>
            
            <div>
              <h3 className={`font-medium ${
                task.completed ? 'line-through text-gray-500' : 'text-gray-900'
              }`}>
                {task.title}
              </h3>
              <div className="flex space-x-2 mt-1">
                <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                  {task.category}
                </span>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => onDeleteTask(task.id)}
            className="text-red-600 hover:text-red-800 p-2"
          >
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
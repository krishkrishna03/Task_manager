import React from 'react';
import { Edit3, Trash2, CheckCircle, Circle, Calendar, Flag } from 'lucide-react';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
  onToggleComplete: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ 
  task, 
  onEdit, 
  onDelete, 
  onToggleComplete 
}) => {
  const priorityColors = {
    high: 'text-red-700 bg-red-50 border-red-200',
    medium: 'text-amber-700 bg-amber-50 border-amber-200',
    low: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className={`bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-6 ${
      task.completed ? 'opacity-75' : ''
    }`}>
      <div className="flex items-start justify-between mb-4">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`flex-shrink-0 mr-4 mt-1 transition-all duration-200 hover:scale-110 ${
            task.completed 
              ? 'text-emerald-600 hover:text-emerald-700' 
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          {task.completed ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <Circle className="w-5 h-5" />
          )}
        </button>
        
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold text-slate-900 mb-2 text-lg ${
            task.completed ? 'line-through text-slate-500' : ''
          }`}>
            {task.title}
          </h3>
          
          {task.description && (
            <p className={`text-sm mb-4 leading-relaxed ${
              task.completed ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {task.description}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
                priorityColors[task.priority]
              }`}>
                <Flag className="w-3 h-3 mr-1" />
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </span>
              
              <span className="flex items-center text-xs text-slate-500 font-medium">
                <Calendar className="w-3 h-3 mr-1" />
                {formatDate(task.createdAt)}
              </span>
            </div>
            
            <div className="flex items-center space-x-1">
              <button
                onClick={() => onEdit(task)}
                className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200"
                title="Edit task"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => onDelete(task.id)}
                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                title="Delete task"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
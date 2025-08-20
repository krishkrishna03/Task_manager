import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types/Task';
import { ListTodo } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
  onToggleComplete: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ 
  tasks, 
  onEdit, 
  onDelete, 
  onToggleComplete 
}) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <ListTodo className="mx-auto w-16 h-16 text-slate-300 mb-4" />
        <h3 className="text-lg font-semibold text-slate-900 mb-2">No tasks found</h3>
        <p className="text-slate-500">Create your first task to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">
        Tasks ({tasks.length})
      </h2>
      
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
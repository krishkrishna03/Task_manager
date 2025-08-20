import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import ProgressSummary from './ProgressSummary';
import { Task, FilterStatus, SortOption } from '../types/Task';

const TaskDashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [sortOption, setSortOption] = useState<SortOption>('date');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...taskData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
    setIsAddingTask(false);
  };

  const updateTask = (taskId: string, updates: Partial<Task>) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, ...updates } : task
    ));
    setEditingTask(null);
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskComplete = (taskId: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  // Filter and sort tasks
  const filteredAndSortedTasks = tasks
    .filter(task => {
      // Filter by completion status
      if (filterStatus === 'completed') return task.completed;
      if (filterStatus === 'pending') return !task.completed;
      
      // Filter by search term
      if (searchTerm) {
        return task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               task.description.toLowerCase().includes(searchTerm.toLowerCase());
      }
      
      return true;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case 'date':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'status':
          // Show pending tasks first, then completed
          if (a.completed === b.completed) return 0;
          return a.completed ? 1 : -1;
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        filterStatus={filterStatus}
        onFilterChange={setFilterStatus}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          onAddTask={() => setIsAddingTask(true)}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            <ProgressSummary tasks={tasks} />
            
            <div className="mt-8">
              <TaskList
                tasks={filteredAndSortedTasks}
                onEdit={setEditingTask}
                onDelete={deleteTask}
                onToggleComplete={toggleTaskComplete}
              />
            </div>
          </div>
        </main>
      </div>

      {/* Task Form Modal */}
      {(isAddingTask || editingTask) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <TaskForm
            task={editingTask}
            onSubmit={editingTask ? 
              (data) => updateTask(editingTask.id, data) : 
              addTask
            }
            onCancel={() => {
              setIsAddingTask(false);
              setEditingTask(null);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TaskDashboard;
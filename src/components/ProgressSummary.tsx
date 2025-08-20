import React from 'react';
import { CheckCircle, Clock, TrendingUp, List } from 'lucide-react';
import { Task } from '../types/Task';

interface ProgressSummaryProps {
  tasks: Task[];
}

const ProgressSummary: React.FC<ProgressSummaryProps> = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const highPriorityTasks = tasks.filter(task => task.priority === 'high' && !task.completed).length;

  const stats = [
    {
      title: 'Total Tasks',
      value: totalTasks,
      icon: List,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
    },
    {
      title: 'Completed',
      value: completedTasks,
      icon: CheckCircle,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    },
    {
      title: 'Pending',
      value: pendingTasks,
      icon: Clock,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
    },
    {
      title: 'High Priority',
      value: highPriorityTasks,
      icon: TrendingUp,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">Progress Overview</h3>
          <span className="text-3xl font-bold text-indigo-600">
            {completionRate.toFixed(0)}%
          </span>
        </div>
        
        <div className="w-full bg-slate-200 rounded-full h-4 mb-3">
          <div
            className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-4 rounded-full transition-all duration-700 ease-out shadow-sm"
            style={{ width: `${completionRate}%` }}
          />
        </div>
        
        <div className="flex justify-between text-sm text-slate-600 font-medium">
          <span>{completedTasks} completed</span>
          <span>{pendingTasks} remaining</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className={`bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ${stat.borderColor}`}
            >
              <div className="flex items-center">
                <div className={`${stat.bgColor} ${stat.borderColor} border rounded-xl p-3`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.title}</p>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressSummary;
import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  List, 
  CheckCircle, 
  Clock, 
  Calendar,
  ArrowUpDown,
  Star,
  AlignLeft
} from 'lucide-react';
import { FilterStatus, SortOption } from '../types/Task';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  filterStatus: FilterStatus;
  onFilterChange: (status: FilterStatus) => void;
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  onToggle,
  filterStatus,
  onFilterChange,
  sortOption,
  onSortChange,
}) => {
  const filterOptions = [
    { value: 'all' as FilterStatus, label: 'All Tasks', icon: List },
    { value: 'pending' as FilterStatus, label: 'Pending', icon: Clock },
    { value: 'completed' as FilterStatus, label: 'Completed', icon: CheckCircle },
  ];

  const sortOptions = [
    { value: 'date' as SortOption, label: 'Date Created', icon: Calendar },
    { value: 'priority' as SortOption, label: 'Priority', icon: Star },
    { value: 'status' as SortOption, label: 'Status', icon: CheckCircle },
    { value: 'alphabetical' as SortOption, label: 'Alphabetical', icon: AlignLeft },
  ];

  return (
    <div className={`bg-slate-50 border-r border-slate-200 transition-all duration-300 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4 border-b border-slate-200">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-slate-200 transition-colors duration-200"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5 text-slate-600" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          )}
        </button>
      </div>

      {!collapsed && (
        <div className="p-4 space-y-6">
          {/* Filter Section */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Filter</h3>
            <div className="space-y-1">
              {filterOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.value}
                    onClick={() => onFilterChange(option.value)}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${
                      filterStatus === option.value
                        ? 'bg-indigo-100 text-indigo-700 shadow-sm'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sort Section */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Sort By</h3>
            <div className="space-y-1">
              {sortOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.value}
                    onClick={() => onSortChange(option.value)}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${
                      sortOption === option.value
                        ? 'bg-indigo-100 text-indigo-700 shadow-sm'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
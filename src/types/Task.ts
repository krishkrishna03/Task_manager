export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  completed: boolean;
  createdAt: string;
}

export type Priority = 'low' | 'medium' | 'high';

export type FilterStatus = 'all' | 'completed' | 'pending';

export type SortOption = 'date' | 'priority' | 'status' | 'alphabetical';
# Task Management Dashboard

A modern, responsive task management dashboard built with React, TypeScript, and Tailwind CSS. Features a clean interface with comprehensive task management capabilities, real-time filtering, sorting, and progress tracking.

## 🚀 Features

### Core Functionality
- **Task Management**: Create, edit, delete, and mark tasks as complete
- **Real-time Filtering**: Filter tasks by status (All, Pending, Completed)
- **Advanced Sorting**: Sort by date created, priority, status, or alphabetically
- **Search**: Real-time search through task titles and descriptions
- **Progress Tracking**: Visual progress indicators and completion statistics

### User Interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Collapsible Sidebar**: Space-efficient navigation with filtering and sorting options
- **Modal Forms**: Intuitive task creation and editing experience
- **Visual Feedback**: Hover states, transitions, and micro-interactions

### Data Management
- **Local Storage**: Automatic persistence of tasks between sessions
- **Priority Levels**: High, Medium, and Low priority classification
- **Task Metadata**: Creation dates and completion status tracking

## 🛠️ Technology Stack

- **React 18** - Modern React with functional components and hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Fast build tool and development server

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <https://github.com/krishkrishna03/Task_manager>
   cd task-management-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Project Structure

```
src/
├── components/
│   ├── TaskDashboard.tsx    # Main dashboard container
│   ├── Header.tsx           # Top navigation with search and add button
│   ├── Sidebar.tsx          # Collapsible sidebar with filters and sorting
│   ├── TaskList.tsx         # Task list container
│   ├── TaskItem.tsx         # Individual task card component
│   ├── TaskForm.tsx         # Task creation/editing modal
│   └── ProgressSummary.tsx  # Progress tracking and statistics
├── types/
│   └── Task.ts              # TypeScript type definitions
├── App.tsx                  # Root application component
├── main.tsx                 # Application entry point
└── index.css                # Global styles and Tailwind imports
```

## 🎯 Usage

### Creating Tasks
1. Click the "Add Task" button in the header
2. Fill in the task title (required)
3. Add an optional description
4. Select priority level (Low, Medium, High)
5. Click "Create Task" to save

### Managing Tasks
- **Complete**: Click the circle icon to mark as complete/incomplete
- **Edit**: Click the edit icon to modify task details
- **Delete**: Click the trash icon to remove the task

### Filtering and Sorting
- **Filter**: Use the sidebar to filter by All Tasks, Pending, or Completed
- **Sort**: Choose from Date Created, Priority, Status, or Alphabetical sorting
- **Search**: Use the search bar in the header to find specific tasks

### Progress Tracking
The dashboard displays:
- Overall completion percentage with visual progress bar
- Total task count
- Completed and pending task counts
- High priority pending tasks

## 🎨 Design Features

### Color System
- **Primary**: Blue (#3B82F6) for main actions and highlights
- **Success**: Green (#10B981) for completed tasks
- **Warning**: Amber (#F59E0B) for medium priority
- **Error**: Red (#EF4444) for high priority and delete actions

### Responsive Breakpoints
- **Mobile**: < 768px - Stacked layout, condensed sidebar
- **Tablet**: 768px - 1024px - Balanced layout
- **Desktop**: > 1024px - Full sidebar and grid layout

### Animations
- Smooth transitions on hover states
- Progress bar animations
- Modal fade-in/fade-out effects
- Sidebar collapse/expand animations

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ using React and TypeScript**

import './App.css';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';

function App() {
  return (
    <div className="flex h-full">
      <Sidebar />
      <Routes>
        <Route path="/" element={<AddTask />} />
        <Route path="/all-task" element={<TaskList />} />
        <Route path="/tasks/:taskId/edit" element={<EditTask />} />
      </Routes>
    </div>
  );
}

export default App;

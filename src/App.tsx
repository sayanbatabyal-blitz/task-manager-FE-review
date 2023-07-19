import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./molecules/Navbar";
import "react-toastify/dist/ReactToastify.css";
import HomeScr from "./oraganisms/HomeScreen";
import TasksScr from "./oraganisms/TaskScreen";
import CreateScr from "./oraganisms/CreateTaskScreen";
import BulkDwnScr from "./oraganisms/BulkDownloadScreen";
import ModifyScr from "./oraganisms/ModifyTaskScreen";
function App() {
  return (
    <div className="container">
      <ToastContainer />
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<HomeScr />} />
          <Route path="tasks" element={<TasksScr />} />
          <Route path="create" element={<CreateScr />} />
          <Route path="down" element={<BulkDwnScr />} />
          <Route path="modify/:id" element={<ModifyScr />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App" id="app-body">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;

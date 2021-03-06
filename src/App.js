import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

function App() {
  return (
    <div className="App" id="app-body">
      <Router>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="createaccount" element={<CreateAccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

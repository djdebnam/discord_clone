import "./App.css";
import TitleBar from "./components/TitleBar";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import Login from "./components/Login";

function App() {
  return (
    <div className="App" id="app-body">
      <TitleBar />
      <Login />
      {/* <SideBar/>
      <Content/> */}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css'; 
import TitleBar from './components/TitleBar';
import SideBar from './components/SideBar';
import Content from './components/Content';

function App() {
  return (
    <div className="App" id='app-body'>
      <TitleBar/>
      <SideBar/>
      <Content/>
    </div>
  );
}

export default App;

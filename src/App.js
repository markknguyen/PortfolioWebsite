import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from "./components/HomePage/HomePage";
import Tank from "./components/Tank/Tank";
import Sweet from "./components/Sweet/Sweet";
import Bean from "./components/Bean/Bean";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/tank" element={<Tank/>} />
        <Route exact path="/nuprojects" element={<Sweet/>} />
        <Route exact path="/bean" element={<Bean/>} />
      </Routes>
    </div>
  );
}

export default App;

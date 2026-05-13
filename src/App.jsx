import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "../pages/Home";
import Floor from "../pages/Floor";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<Floor/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Videopage from "./pages/Videodetail";
import Homepage from "./pages/Homepage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/videopage" element={<Videopage />}/>
      </Routes> 
    </>
  )
}

export default App

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import playlistID from './components/playlistID';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/" element={<Homepage />}/>
      </Routes> 
      <div>
            <h1>Tokopedia Play Clone</h1>
            <playlistID />
        </div>
    </>
  )
}

export default App;


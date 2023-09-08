import React from 'react';
import { Route, Routes } from "react-router-dom"
import Navbar from './modules/Navbar';
import Goals from './modules/goals-page/goals';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </div>
  );
}

export default App;

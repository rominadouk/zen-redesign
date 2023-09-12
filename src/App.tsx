import React from 'react';
import { Route, Routes } from "react-router-dom"
import Navbar from './modules/Navbar';
import Goals from './modules/goals-page/goals';
import { useState, useEffect } from 'react';
import AddGoal from './modules/goals-page/new-goal'


function App() {
  const [modalOpen, setGoalModalOpen] = useState(false);
  
  const handleOpenGoalModal = () => {
      setGoalModalOpen(true);
  };

  const handleCloseGoalModal = () => {
      setGoalModalOpen(false);
  };
      useEffect(() => {
        //When Add New Button is clicked, render the goal component.
        const addButton = document.getElementById('add-goal-button');
        const goalModal = document.getElementById('new-goal-modal-bg');

        addButton?.addEventListener("click", handleOpenGoalModal);
        goalModal?.addEventListener("click", handleCloseGoalModal);

    }, []);
  
  return (
    <div className="App">
      {modalOpen && <AddGoal />} 
      <Navbar />
      <Routes>
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </div>
  );
}

export default App;

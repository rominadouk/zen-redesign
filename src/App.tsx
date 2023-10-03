import React from 'react';
import { Route, Routes } from "react-router-dom"
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import Goals from './modules/goals-page/goals';
import { useState, useEffect } from 'react';
import AddGoal from './modules/goals-page/new-goal'


function App() {
  //handling goal modal in app because it needs to go over the navbar
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
        const exitGoalModal = document.getElementById('cancel-goal-modal');

        addButton?.addEventListener('click', handleOpenGoalModal);
        exitGoalModal?.addEventListener('click', handleCloseGoalModal);
        
        if (modalOpen === true) {
          goalModal?.addEventListener('click', handleCloseGoalModal)}

    }, [modalOpen]);
  
  return (
    <div className='App flex flex-col h-screen justify-between'>
      {modalOpen && <AddGoal modalOpen={modalOpen} onClose={handleCloseGoalModal} />} 
      <Navbar />
      <Routes>
        <Route path='/goals' element={<Goals />} />
      </Routes>
      <Footer />
    </div>
  ); 
}

export default App;

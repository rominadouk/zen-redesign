import React from 'react';
import { Route, Routes } from "react-router-dom"
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import Goals from './modules/goals-page/goals';
import SelfCare from './modules/selfcare-page/Selfcare';
import Journal from './modules/journal-page/journal';
import { useState, useEffect } from 'react';
import AddGoal from './modules/goals-page/new-goal'
import Home from './modules/home-page/home';
import Habits from './modules/habits-page/Habits';


function App() {
  //handling goal modal in app because it needs to go over the navbar
  const [modalOpen, setGoalModalOpen] = useState(false);
  
  const handleOpenGoalModal = () => {
      setGoalModalOpen(true);
  };

  const handleCloseGoalModal = () => {
      setGoalModalOpen(false);
  };

 document.querySelector('body')!.className='flex h-screen w-screen bg-off-white'
 document.querySelector('html')!.className='flex h-screen w-screen'
      useEffect(() => {
        //When Add New Button is clicked, render the goal component.
        const addButton = document.getElementById('add-goal-button');
        const goalModal = document.getElementById('new-goal-modal-bg');
        const exitGoalModal = document.getElementById('cancel-goal-modal');

        addButton?.addEventListener('click', handleOpenGoalModal);
        exitGoalModal?.addEventListener('click', handleCloseGoalModal);
        
        if (modalOpen === true) {
          goalModal?.addEventListener('click', handleCloseGoalModal)};
          return () => {
            addButton?.removeEventListener('click', handleOpenGoalModal);
            exitGoalModal?.removeEventListener('click', handleCloseGoalModal);

            if (modalOpen === true) {
                goalModal?.removeEventListener('click', handleCloseGoalModal);
            }
          }

    }, [modalOpen]);
  
  return (
    <div className='App flex flex-col h-screen'>
      {modalOpen && <AddGoal modalOpen={modalOpen} onClose={handleCloseGoalModal} />} 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/goals' element={<Goals />} />
        <Route path='/selfcare' element={<SelfCare />} />
        <Route path='/journal' element={<Journal />} />
        <Route path='/habits' element={<Habits />} />
      </Routes>
      <Footer />
    </div>
  ); 
}

export default App;

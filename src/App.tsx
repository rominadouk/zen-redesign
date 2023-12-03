import React, { useContext } from 'react';
import { Route, Routes, Navigate } from "react-router-dom"
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import Goals from './modules/goals-page/goals';
import SelfCare from './modules/selfcare/Selfcare';
import Journal from './modules/journals/Journals';
import JournalView from './modules/journals/journal-view';
import AddJournal from './modules/journals/new-journal';
import { useState, useEffect } from 'react';
import Home from './modules/home-page/HomePage';
import Habits from './modules/habits/Habits';
import Login from './modules/authentication/Login';
import Register from './modules/authentication/Register';
import Settings from './modules/user-settings/Settings';
import { AuthContext } from './modules/authentication/AuthContext';


function App() {

  const ProtectedRoute = ({ children } : {children: JSX.Element}) => {

    const { isAuthenticated } = useContext(AuthContext);
    if (!isAuthenticated) {
      // Redirect them to the home page if not authenticated
      return <Navigate to="/" />;
    }
  
    return children;
  }
 document.querySelector('body')!.className='flex h-screen w-screen bg-off-white'
 document.querySelector('html')!.className='flex h-screen w-screen'

  
  return (
    <div className='App flex flex-col h-screen w-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
          <Route path='/goals' element={
            <ProtectedRoute>
              <Goals /> 
            </ProtectedRoute>} />
          <Route path='/selfcare' element={
            <ProtectedRoute>
              <SelfCare />
            </ProtectedRoute>
          } />
          <Route path='/journals' element={
            <ProtectedRoute>
              <Journal />
            </ProtectedRoute>
          } />
          <Route path='/habits' element={
            <ProtectedRoute>
              <Habits />
            </ProtectedRoute>
          } />
          <Route path='/journals/:id' element={
          <ProtectedRoute>
            <JournalView />
          </ProtectedRoute>} />
          <Route path='/journals/newjournal' element={
          <ProtectedRoute>
            <AddJournal />
          </ProtectedRoute>} />
          <Route path='/settings' element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>} />
      </Routes>
      <Footer />
    </div>
  ); 
}

export default App;

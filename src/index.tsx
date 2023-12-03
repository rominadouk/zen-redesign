import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from './modules/authentication/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  {/* Wrapping in AuthProvider makes auth state available to all components in app */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);


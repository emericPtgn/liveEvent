// index.js
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss'
// import './index.css';
import AppProvider from './context2.js';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);

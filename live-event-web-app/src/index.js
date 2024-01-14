// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppProvider from './context';  // Importez le AppProvider
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider> {/* Assurez-vous que App est entouré par AppProvider */}
      <App />
    </AppProvider>
  </React.StrictMode>
);

// ... Reste du code

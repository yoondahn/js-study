import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Effects from './6_effects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Effects />
    <App />
  </React.StrictMode>
);

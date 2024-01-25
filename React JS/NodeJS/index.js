import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Effects from './6_Effects';
import ToDo from './7_ToDo';
import MovieApp from './7_MovieApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDo />
    <MovieApp />
    {/* <Effects /> */}
    {/* <App /> */}
  </React.StrictMode>
);

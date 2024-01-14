import React from 'react';
import ReactDOM from 'react-dom/client'; // basically react ka implementation hai react ka khud ka dom (tree structure)
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// safe mode development ke liye specific taki optimization vegera kar le



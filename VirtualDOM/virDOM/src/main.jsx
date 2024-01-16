import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // virtual dom mein javascirpt pura track karta aur ussi hisab se update karta
  // -D development ke kaam ati undler vegera
  
)

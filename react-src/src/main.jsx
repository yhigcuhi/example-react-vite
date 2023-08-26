/* import react */
import React from 'react'
import ReactDOM from 'react-dom/client'
/* import react router */
import { BrowserRouter } from 'react-router-dom';
/* import 部品 */
import App from './App.jsx'
// css load
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Di Laravel, file CSS utama biasanya ada di folder resources/css/
// Oleh karena itu, kita ubah jalurnya agar menunjuk ke app.css bawaan Laravel
import '../css/app.css' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Di Laravel, file CSS utama biasanya ada di folder resources/css/
// Oleh karena itu, kita ubah jalurnya agar menunjuk ke app.css bawaan Laravel
import '../css/app.css' 
import axios from 'axios'

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true; // Penting untuk Sanctum/Session Cookie Auth

// Get CSRF token from meta tag
const token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

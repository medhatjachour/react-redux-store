import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from './app/Store.js'
import { Provider } from 'react-redux'
import  { Toaster } from 'react-hot-toast'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={Store}>
    <Toaster position="top-right" reverseOrder={false}/>
    <App />
    </Provider>,
  </React.StrictMode>,
)

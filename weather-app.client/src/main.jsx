import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TemperatureProvider } from './Context/TemperatureContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TemperatureProvider>
            <App />
        </TemperatureProvider>
    </React.StrictMode>,
)

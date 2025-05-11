
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure we're creating the root correctly
const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')
const root = createRoot(rootElement)

// Render the app - note we only use StrictMode here, not in App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

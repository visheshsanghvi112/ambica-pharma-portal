
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './lib/firebase' // Import Firebase initialization

// Make sure we have a valid DOM element to mount the app
const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

// Create a root using React 18's createRoot API
const root = createRoot(rootElement)

// Render the app inside StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

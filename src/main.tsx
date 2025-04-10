
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './lib/firebase' // Import Firebase initialization

// Self-executing function to add test data after initialization
(async function() {
  // Wait for DOM to be ready and Firebase to initialize
  if (document.readyState === 'complete') {
    const { addTestData } = await import('./lib/firebase');
    addTestData();
  } else {
    window.addEventListener('load', async () => {
      const { addTestData } = await import('./lib/firebase');
      addTestData();
    });
  }
})();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './lib/firebase' // Import Firebase initialization

// Self-executing function to add test data after initialization
(async function() {
  // Wait for DOM to be ready and Firebase to initialize
  if (document.readyState === 'complete') {
    try {
      const { addTestData } = await import('./lib/firebase');
      const result = await addTestData();
      
      if (result.isLocalOnly) {
        // Display a more visible message about Firestore rules if needed
        setTimeout(() => {
          console.log("%c⚠️ Firestore Security Rules Need Configuration", "color: red; font-size: 18px; font-weight: bold;");
          console.log("%cPlease update your Firestore rules in the Firebase Console to allow writes to contactSubmissions and careerApplications collections.", "color: blue; font-size: 14px;");
        }, 2000);
      }
    } catch (err) {
      console.error("Error in test data function:", err);
    }
  } else {
    window.addEventListener('load', async () => {
      try {
        const { addTestData } = await import('./lib/firebase');
        const result = await addTestData();
        
        if (result.isLocalOnly) {
          // Display a more visible message about Firestore rules if needed
          setTimeout(() => {
            console.log("%c⚠️ Firestore Security Rules Need Configuration", "color: red; font-size: 18px; font-weight: bold;");
            console.log("%cPlease update your Firestore rules in the Firebase Console to allow writes to contactSubmissions and careerApplications collections.", "color: blue; font-size: 14px;");
          }, 2000);
        }
      } catch (err) {
        console.error("Error in test data function:", err);
      }
    });
  }
})();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

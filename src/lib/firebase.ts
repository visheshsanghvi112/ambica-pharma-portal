
// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp, doc, setDoc } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABzex4h7_CTisn88w7nnNOCu-5sIzOB_c",
  authDomain: "ambica-786.firebaseapp.com",
  projectId: "ambica-786",
  storageBucket: "ambica-786.firebasestorage.app",
  messagingSenderId: "234223076946",
  appId: "1:234223076946:web:5b41b28fc67b093c61018b",
  measurementId: "G-2PZ7FVFDBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize App Check (Client-side only)
if (typeof window !== 'undefined') {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LdpnhArAAAAAFqzCDVwkD5a8TQemmRQZkZocE1b'),
    isTokenAutoRefreshEnabled: true
  });
}

// Initialize Analytics and export it
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Initialize Firestore
export const db = getFirestore(app);

// Helper function to log events
export const logAnalyticsEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};

// Define the type for form submission responses
type FormSubmissionResponse = {
  success: boolean;
  id?: string;
  error?: any;
  message: string;
  isLocalOnly?: boolean;
};

// Helper function to store contact form submissions
export const submitContactForm = async (formData: any): Promise<FormSubmissionResponse> => {
  try {
    // Console log for debugging
    console.log("Submitting contact form data:", formData);
    
    const docRef = await addDoc(collection(db, "contactSubmissions"), {
      ...formData,
      timestamp: serverTimestamp(),
      userCookies: getCookiesForStorage(),
    });
    console.log("Contact form submitted successfully with ID:", docRef.id);
    return { 
      success: true, 
      id: docRef.id,
      message: "Your message has been sent successfully!"
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    
    if (error instanceof Error) {
      // Check for specific error types
      if (error.message.includes("permission")) {
        console.warn("Firebase permission error:", error.message);
        return { 
          success: false, 
          error,
          message: "Permission denied. Please check Firestore security rules.",
          isLocalOnly: true
        };
      } else {
        console.error("Firebase error:", error.message);
        return { 
          success: false, 
          error,
          message: "An error occurred while submitting your message. Please try again."
        };
      }
    }
    
    return { 
      success: false, 
      error,
      message: "An unknown error occurred. Please try again."
    };
  }
};

// Helper function to store career applications
export const submitCareerApplication = async (formData: any): Promise<FormSubmissionResponse> => {
  try {
    // Console log for debugging
    console.log("Submitting career application data:", formData);
    
    const docRef = await addDoc(collection(db, "careerApplications"), {
      ...formData,
      timestamp: serverTimestamp(),
      userCookies: getCookiesForStorage(),
    });
    console.log("Career application submitted successfully with ID:", docRef.id);
    return { 
      success: true, 
      id: docRef.id,
      message: "Your application has been submitted successfully!"
    };
  } catch (error) {
    console.error("Error submitting career application:", error);
    
    if (error instanceof Error) {
      // Check for specific error types
      if (error.message.includes("permission")) {
        console.warn("Firebase permission error:", error.message);
        return { 
          success: false, 
          error,
          message: "Permission denied. Please check Firestore security rules.",
          isLocalOnly: true
        };
      } else {
        console.error("Firebase error:", error.message);
        return { 
          success: false, 
          error,
          message: "An error occurred while submitting your application. Please try again."
        };
      }
    }
    
    return { 
      success: false, 
      error,
      message: "An unknown error occurred. Please try again."
    };
  }
};

// Helper function to get cookies for storage
const getCookiesForStorage = () => {
  if (typeof window === 'undefined') return {};
  
  // Get relevant cookies from local storage
  const consentKey = "ambica_cookie_consent";
  const storedConsent = localStorage.getItem(consentKey);
  
  // Get other relevant browser information
  const userAgent = navigator.userAgent;
  const language = navigator.language;
  const screenSize = {
    width: window.screen.width,
    height: window.screen.height
  };
  
  return {
    consentSettings: storedConsent ? JSON.parse(storedConsent) : null,
    userAgent,
    language,
    screenSize,
    referrer: document.referrer,
    visitTimestamp: new Date().toISOString(),
  };
};

// Helper function to store cookie consent in Firestore
export const saveCookieConsent = async (consentData: any): Promise<FormSubmissionResponse> => {
  try {
    const consentId = `consent_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    
    await setDoc(doc(db, "cookieConsents", consentId), {
      ...consentData,
      timestamp: serverTimestamp(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenSize: {
        width: window.screen.width,
        height: window.screen.height
      }
    });
    
    return {
      success: true,
      id: consentId,
      message: "Cookie consent saved successfully"
    };
  } catch (error) {
    console.error("Error saving cookie consent:", error);
    return {
      success: false,
      error,
      message: "Failed to save cookie consent"
    };
  }
};

// Make the app instance available for app check verification in console
if (typeof window !== 'undefined') {
  // @ts-ignore - Making Firebase available globally for console testing
  window.firebase = { 
    app: () => app,
    appCheck: () => {
      const { getAppCheck } = require('firebase/app-check');
      return getAppCheck(app);
    }
  };
}

export default app;

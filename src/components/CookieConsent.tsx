
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { X, Info, Cookie, CheckCircle, Settings, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { analytics, logAnalyticsEvent, db } from "../lib/firebase";
import { setAnalyticsCollectionEnabled } from "firebase/analytics";
import { doc, setDoc, serverTimestamp, collection } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_CONSENT_KEY = "ambica_cookie_consent";
const COOKIE_PREFERENCE_VERSION = "1.0"; // Used to track consent version

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  version: string;
}

const defaultSettings: CookieSettings = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
  preferences: false,
  version: COOKIE_PREFERENCE_VERSION,
};

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>(defaultSettings);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    // If no consent or outdated version, show consent banner
    if (!storedConsent || !isConsentValid(storedConsent)) {
      // Wait a moment before showing the consent banner for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
        setIsVisible(true);
      }, 1500);
      
      // If analytics is available, disable it by default until consent
      if (analytics) {
        setAnalyticsCollectionEnabled(analytics, false);
      }
      
      return () => clearTimeout(timer);
    } else {
      // Load stored settings
      try {
        const storedSettings = JSON.parse(storedConsent);
        setCookieSettings(storedSettings);
        
        // Enable analytics if user consented
        if (analytics && storedSettings.analytics) {
          setAnalyticsCollectionEnabled(analytics, true);
          logAnalyticsEvent('consent_given', { type: 'analytics' });
        } else if (analytics) {
          setAnalyticsCollectionEnabled(analytics, false);
        }
      } catch (e) {
        // If parsing fails, reset to default and show consent
        setShowConsent(true);
        setIsVisible(true);
        if (analytics) {
          setAnalyticsCollectionEnabled(analytics, false);
        }
      }
    }
  }, []);

  const isConsentValid = (consent: string): boolean => {
    try {
      const parsed = JSON.parse(consent);
      return parsed.version === COOKIE_PREFERENCE_VERSION;
    } catch (e) {
      return false;
    }
  };

  const saveConsent = async (settings: CookieSettings) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(settings));
    setIsVisible(false);
    setTimeout(() => setShowConsent(false), 500); // Allow time for exit animation
    
    // Enable or disable analytics based on user consent
    if (analytics) {
      setAnalyticsCollectionEnabled(analytics, settings.analytics);
      if (settings.analytics) {
        logAnalyticsEvent('consent_given', { type: 'analytics' });
      }
    }
    
    // Store consent in Firestore
    try {
      // Create a unique ID for this consent record
      const consentId = `consent_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      
      await setDoc(doc(db, "cookieConsents", consentId), {
        ...settings,
        timestamp: serverTimestamp(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenSize: {
          width: window.screen.width,
          height: window.screen.height
        },
        referrer: document.referrer,
        url: window.location.href,
        ipAddress: "IP collected server-side" // Just a placeholder - actual IP should be collected server-side
      });
      
      console.log("Cookie consent saved to Firestore successfully");
    } catch (error) {
      console.error("Error storing cookie consent:", error);
    }
    
    // If marketing is enabled, you could initialize marketing tools here
    if (settings.marketing) {
      logAnalyticsEvent('consent_given', { type: 'marketing' });
    }
  };

  const acceptAll = () => {
    const allAccepted: CookieSettings = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      version: COOKIE_PREFERENCE_VERSION,
    };
    saveConsent(allAccepted);
  };

  const acceptNecessary = () => {
    saveConsent(defaultSettings);
  };

  const savePreferences = () => {
    saveConsent({
      ...cookieSettings,
      necessary: true, // Always required
      version: COOKIE_PREFERENCE_VERSION,
    });
  };

  const handleToggle = (type: keyof Omit<CookieSettings, 'version'>) => {
    if (type === 'necessary') return; // Can't toggle necessary cookies
    setCookieSettings(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const closeConsent = () => {
    setIsVisible(false);
    setTimeout(() => setShowConsent(false), 500); // Allow time for exit animation
  };

  if (!showConsent) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Card className="shadow-lg max-w-4xl mx-auto overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            <CardHeader className="pb-2 flex justify-between items-start">
              <div className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Cookie Privacy Settings</CardTitle>
              </div>
              <Button variant="ghost" size="icon" onClick={closeConsent} className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="pb-4 text-sm">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-1">
                  <p className="mb-3 text-foreground/80">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. Your privacy matters to us at Ambica Pharma.
                  </p>
                  <p className="text-xs text-foreground/60">
                    Read our <Link to="/privacy" className="text-primary underline hover:text-primary/80 transition-colors">Privacy Policy</Link> to learn more about how we use your data.
                  </p>
                </div>
                <div className="hidden md:flex">
                  <ShieldCheck className="h-12 w-12 text-primary/50" />
                </div>
              </div>

              {showAdvanced && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 space-y-3 border rounded-md p-3 bg-white/50 dark:bg-gray-800/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-primary">Necessary Cookies</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-[200px] text-xs">These cookies are essential for the website to function properly.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>Analytics Cookies</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-[200px] text-xs">These cookies help us understand how visitors interact with our website.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleToggle('analytics')}
                      className={`h-5 w-9 rounded-full cursor-pointer flex items-center transition-all duration-300 ${cookieSettings.analytics ? 'bg-primary justify-end' : 'bg-gray-300 dark:bg-gray-600 justify-start'}`}
                    >
                      <div className={`h-4 w-4 rounded-full mx-0.5 bg-white`}></div>
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>Marketing Cookies</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-[200px] text-xs">These cookies are used to deliver advertisements more relevant to you.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleToggle('marketing')}
                      className={`h-5 w-9 rounded-full cursor-pointer flex items-center transition-all duration-300 ${cookieSettings.marketing ? 'bg-primary justify-end' : 'bg-gray-300 dark:bg-gray-600 justify-start'}`}
                    >
                      <div className={`h-4 w-4 rounded-full mx-0.5 bg-white`}></div>
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>Preference Cookies</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-[200px] text-xs">These cookies remember your preferences for future visits.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleToggle('preferences')}
                      className={`h-5 w-9 rounded-full cursor-pointer flex items-center transition-all duration-300 ${cookieSettings.preferences ? 'bg-primary justify-end' : 'bg-gray-300 dark:bg-gray-600 justify-start'}`}
                    >
                      <div className={`h-4 w-4 rounded-full mx-0.5 bg-white`}></div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3 pt-0 bg-gray-50 dark:bg-gray-800/30 p-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button
                  onClick={acceptAll}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white"
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Accept All
                </Button>
              </motion.div>
              {!showAdvanced ? (
                <>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      onClick={acceptNecessary}
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      Necessary Only
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      onClick={() => setShowAdvanced(true)}
                      variant="ghost"
                      className="w-full sm:w-auto text-primary hover:text-primary/90"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Customize Settings
                    </Button>
                  </motion.div>
                </>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    onClick={savePreferences}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Save Preferences
                  </Button>
                </motion.div>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;

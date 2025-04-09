import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { X, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { analytics, logAnalyticsEvent } from "../lib/firebase";
import { setAnalyticsCollectionEnabled } from "firebase/analytics";

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

  useEffect(() => {
    // Check if user has already given consent
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    // If no consent or outdated version, show consent banner
    if (!storedConsent || !isConsentValid(storedConsent)) {
      // Wait a moment before showing the consent banner for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      
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

  const saveConsent = (settings: CookieSettings) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(settings));
    setShowConsent(false);
    
    // Enable or disable analytics based on user consent
    if (analytics) {
      setAnalyticsCollectionEnabled(analytics, settings.analytics);
      if (settings.analytics) {
        logAnalyticsEvent('consent_given', { type: 'analytics' });
      }
    }
    
    // You could set marketing cookies here if marketing is enabled
    if (settings.marketing) {
      // Initialize marketing tools
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
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <Card className="border shadow-lg max-w-4xl mx-auto">
        <CardHeader className="pb-2 flex justify-between items-start">
          <CardTitle className="text-lg">Cookie Consent</CardTitle>
          <Button variant="ghost" size="icon" onClick={closeConsent} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="pb-4 text-sm">
          <p className="mb-3">
            We use cookies to enhance your browsing experience, serve personalized ads or content,
            and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            Read our <Link to="/privacy" className="text-primary underline">Privacy Policy</Link> to
            learn more.
          </p>

          {showAdvanced && (
            <div className="mt-4 space-y-3 border rounded-md p-3 bg-muted/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Necessary Cookies</span>
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
                <div className="h-4 w-4 rounded-full bg-primary"></div>
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
                <div 
                  onClick={() => handleToggle('analytics')}
                  className={`h-4 w-4 rounded-full cursor-pointer ${cookieSettings.analytics ? 'bg-primary' : 'bg-gray-300'}`}>
                </div>
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
                <div 
                  onClick={() => handleToggle('marketing')}
                  className={`h-4 w-4 rounded-full cursor-pointer ${cookieSettings.marketing ? 'bg-primary' : 'bg-gray-300'}`}>
                </div>
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
                <div 
                  onClick={() => handleToggle('preferences')}
                  className={`h-4 w-4 rounded-full cursor-pointer ${cookieSettings.preferences ? 'bg-primary' : 'bg-gray-300'}`}>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3 pt-0">
          <Button onClick={acceptAll} className="w-full sm:w-auto bg-primary hover:bg-primary/90">
            Accept All
          </Button>
          {!showAdvanced ? (
            <>
              <Button
                onClick={acceptNecessary}
                variant="outline"
                className="w-full sm:w-auto"
              >
                Necessary Only
              </Button>
              <Button
                onClick={() => setShowAdvanced(true)}
                variant="link"
                className="w-full sm:w-auto"
              >
                Cookie Settings
              </Button>
            </>
          ) : (
            <Button
              onClick={savePreferences}
              variant="outline"
              className="w-full sm:w-auto"
            >
              Save Preferences
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default CookieConsent;

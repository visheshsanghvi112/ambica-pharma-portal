
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "ambica_cookie_consent";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsent) {
      // Wait a moment before showing the consent banner for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "all");
    setShowConsent(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "necessary");
    setShowConsent(false);
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
          <p>
            We use cookies to enhance your browsing experience, serve personalized ads or content,
            and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            Read our <Link to="/privacy" className="text-primary underline">Privacy Policy</Link> to
            learn more.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3 pt-0">
          <Button onClick={acceptAll} className="w-full sm:w-auto bg-primary hover:bg-primary/90">
            Accept All
          </Button>
          <Button
            onClick={acceptNecessary}
            variant="outline"
            className="w-full sm:w-auto"
          >
            Necessary Only
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CookieConsent;

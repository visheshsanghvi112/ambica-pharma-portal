
import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, any>;
  language?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  breadcrumbs?: Array<{name: string, url: string}>;
  pageName?: string;
}

/**
 * A comprehensive SEO component optimized for pharmaceutical industry visibility
 * Implements full range of meta tags, structured data, and Open Graph properties
 */
const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl = "https://ambicapharma.net",
  ogImage = "/lovable-uploads/e75f626d-a490-496b-8817-294d7128b441.png",
  ogType = "website",
  structuredData,
  language = "en",
  author = "Ambica Pharma",
  publishedDate,
  modifiedDate = new Date().toISOString().split('T')[0],
  breadcrumbs = [],
  pageName,
}) => {
  // Ensure title format includes brand name for recognition and consistent branding
  const formattedTitle = title.includes("Ambica Pharma") 
    ? title 
    : `${title} | Ambica Pharma`;
  
  // Enhance keywords with comprehensive keyword variations
  const defaultKeywords = "Ambica Pharma, AmbicaPharma, Ambica, Ambicapharma, Ammbica Pharma, Ambica Pharma Mumbai, " +
    "pharmaceutical wholesaler, pharmaceutical trader, pharmaceutical exporter India, " + 
    "bulk medicine supplier, medicine manufacturer India, WHO-GMP certified, ISO certified pharma, " +
    "tablets wholesaler, capsule supplier, injectables exporter, pharmaceutical distributor, " +
    "pharmaceutical products India, generic medicine exporter, quality pharma supplier";
  
  const enhancedKeywords = keywords 
    ? `${defaultKeywords}, ${keywords}` 
    : defaultKeywords;
    
  // Absolute URL for canonical links and resources
  const absoluteUrl = (path: string) => {
    if (path.startsWith('http')) return path;
    const baseUrl = 'https://ambicapharma.net';
    return path.startsWith('/') ? `${baseUrl}${path}` : `${baseUrl}/${path}`;
  };
  
  // Ensure absolute URL for OG image
  const absoluteOgImage = absoluteUrl(ogImage);
  
  // Ensure canonical URL is absolute
  const absoluteCanonicalUrl = absoluteUrl(canonicalUrl);
  
  // Create breadcrumb structure data
  const breadcrumbsData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ambicapharma.net/"
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": crumb.name,
        "item": absoluteUrl(crumb.url)
      })),
      ...(pageName ? [{
        "@type": "ListItem",
        "position": breadcrumbs.length + 2,
        "name": pageName,
        "item": absoluteCanonicalUrl
      }] : [])
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags - Enhanced for SEO */}
      <html lang={language} />
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={enhancedKeywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={absoluteCanonicalUrl} />
      
      {/* Language and Locale */}
      <meta property="og:locale" content={`${language}_${language === 'en' ? 'US' : 'IN'}`} />
      
      {/* Open Graph / Facebook - Enhanced */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:alt" content={`Ambica Pharma - ${title}`} />
      <meta property="og:url" content={absoluteCanonicalUrl} />
      <meta property="og:site_name" content="Ambica Pharma" />
      {publishedDate && <meta property="article:published_time" content={publishedDate} />}
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter - Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ambicapharma" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
      <meta name="twitter:image:alt" content={`Ambica Pharma - ${title}`} />
      
      {/* Additional SEO meta tags - Enhanced */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="Mumbai" />
      <meta name="geo.position" content="19.0760;72.8777" />
      <meta name="ICBM" content="19.0760, 72.8777" />
      <meta name="language" content={language} />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Link Relations for SEO */}
      <link rel="shortlink" href={`https://ambicapharma.net/${canonicalUrl.split('/').pop() || ''}`} />
      
      {/* Breadcrumbs Structured Data */}
      {(breadcrumbs.length > 0 || pageName) && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbsData)}
        </script>
      )}
      
      {/* Structured Data - Enhanced */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Organization Schema if no specific structured data is provided */}
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ambica Pharma",
            "url": "https://ambicapharma.net",
            "logo": "https://ambicapharma.net/lovable-uploads/e75f626d-a490-496b-8817-294d7128b441.png",
            "foundingDate": "2005",
            "description": "Leading pharmaceutical wholesaler, trader, and exporter of tablets, capsules, and injectables with WHO-GMP certification, serving global markets since 2005.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "22 to 25, 2nd Floor, Chapsey Building, 72/78, Shamaldas Gandhi Marg, Kalbadevi",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400 002",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9004049076",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
              "https://www.facebook.com/ambicapharma",
              "https://twitter.com/ambicapharma",
              "https://www.linkedin.com/company/ambica-pharma"
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;

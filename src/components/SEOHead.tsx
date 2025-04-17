
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
}

/**
 * A reusable SEO component to ensure consistent optimization across pages
 */
const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl = "https://ambicapharma.net",
  ogImage = "/lovable-uploads/e75f626d-a490-496b-8817-294d7128b441.png",
  ogType = "website",
  structuredData,
}) => {
  // Ensure title format is "Page Name | Ambica Pharma" unless it already contains Ambica Pharma
  const formattedTitle = title.includes("Ambica Pharma") 
    ? title 
    : `${title} | Ambica Pharma`;
  
  // Enhance keywords with common variations of the company name
  const enhancedKeywords = keywords 
    ? `Ambica Pharma, Ambica, Ammbica, Ambicapharma, AmbicaPharma, ${keywords}` 
    : "Ambica Pharma, Ambica, Ammbica, Ambicapharma, AmbicaPharma, pharmaceutical distributor, medicine wholesaler, pharma exporter";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={enhancedKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Ambica Pharma" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Ambica Pharma" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="Mumbai" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;

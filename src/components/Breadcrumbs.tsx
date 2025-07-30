
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

// Map of route paths to display names
const routeNameMap: Record<string, string> = {
  '': 'Home',
  'about': 'About Us',
  'team': 'Our Team',
  'contact': 'Contact Us',
  'blog': 'Blog',
  'global-reach': 'Global Reach',
  'faq': 'FAQ',
  'privacy': 'Privacy Policy',
  'csr': 'Corporate Social Responsibility',
  'careers': 'Careers',
  'achievements': 'Achievements',
  'products': 'Products',
  'tablets': 'Tablets',
  'capsules': 'Capsules',
  'injectables': 'Injectables',
  'drops': 'Drops'
};

// Breadcrumb JSON-LD schema generator
const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, path: string}>) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://ambicapharma.net${crumb.path}`
    }))
  };
  
  return schema;
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  
  // If we're on the home page, don't show breadcrumbs
  if (pathSegments.length === 0) {
    return null;
  }
  
  // Build breadcrumb data
  const breadcrumbs = [
    { name: 'Home', path: '/' }
  ];
  
  let currentPath = '';
  
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const displayName = routeNameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbs.push({
      name: displayName,
      path: currentPath
    });
  });
  
  // Generate schema
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <nav className="bg-gray-50 dark:bg-gray-800/50 py-2 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-2 text-gray-400 dark:text-gray-500" />
              )}
              
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-primary">{crumb.name}</span>
              ) : (
                <Link 
                  to={crumb.path}
                  className="hover:underline hover:text-primary transition-colors flex items-center"
                >
                  {index === 0 ? (
                    <Home className="h-3.5 w-3.5 mr-1" />
                  ) : null}
                  <span>{crumb.name}</span>
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Include the breadcrumb structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </nav>
  );
};

export default Breadcrumbs;

import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  schema?: Record<string, any>;
}

const SITE_NAME = 'Fermi Dev';
const TWITTER_HANDLE = '@fermi_dev'; // Placeholder
const DOMAIN = 'https://fermi.dev'; // Placeholder

export function SEO({ 
  title, 
  description, 
  keywords = [], 
  image, 
  url, 
  type = 'website',
  schema 
}: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const fullUrl = url ? `${DOMAIN}${url}` : DOMAIN;
  const metaImage = image ? (image.startsWith('http') ? image : `${DOMAIN}${image}`) : `${DOMAIN}/og-image.png`;

  // Default Schema.org JSON-LD
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Fermi Dev",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "AI call analytics platform for modern teams.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const jsonLd = schema || defaultSchema;

  useEffect(() => {
    // Update title
    document.title = fullTitle;

    // Helper to update or create meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Standard Metadata
    setMetaTag('description', description);
    if (keywords.length > 0) {
      setMetaTag('keywords', keywords.join(', '));
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;

    // Open Graph
    setMetaTag('og:type', type, true);
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', fullUrl, true);
    setMetaTag('og:site_name', SITE_NAME, true);
    setMetaTag('og:image', metaImage, true);

    // Twitter
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:site', TWITTER_HANDLE);
    setMetaTag('twitter:creator', TWITTER_HANDLE);
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', metaImage);

    // Structured Data
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLd);
  }, [fullTitle, description, keywords, fullUrl, metaImage, type, jsonLd]);

  return null;
}
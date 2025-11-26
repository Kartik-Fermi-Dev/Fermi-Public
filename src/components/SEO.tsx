import React, { useEffect } from 'react';
import faviconAsset from 'figma:asset/d4c492c7fbc6f734520322de3a41f8e9378c99fb.png';

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
const TWITTER_HANDLE = '@fermi_dev';
const DOMAIN = 'https://fermi.dev';
const DEFAULT_OG_IMAGE = 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwQUklMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBkYXJrJTIwbW9kZXxlbnwxfHx8fDE3NjQwMzA2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080';

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
  const metaImage = image ? (image.startsWith('http') ? image : `${DOMAIN}${image}`) : DEFAULT_OG_IMAGE;

  // Default Schema.org JSON-LD for SaaS
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Fermi Dev",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": description,
    "image": metaImage,
    "url": fullUrl,
    "author": {
        "@type": "Organization",
        "name": "Fermi Dev",
        "url": DOMAIN,
        "logo": {
            "@type": "ImageObject",
            "url": faviconAsset
        }
    },
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

    // Helper for link tags (favicon, canonical)
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.rel = rel;
        document.head.appendChild(element);
      }
      element.href = href;
    };

    // Favicon & Icons
    setLinkTag('icon', faviconAsset);
    setLinkTag('apple-touch-icon', faviconAsset);

    // Standard Metadata
    setMetaTag('description', description);
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0'); // GEO friendly
    setMetaTag('theme-color', '#ffffff'); // Match light theme
    setMetaTag('robots', 'index, follow'); // Explicitly allow indexing
    
    if (keywords.length > 0) {
      setMetaTag('keywords', keywords.join(', '));
    }

    // Update canonical link
    setLinkTag('canonical', fullUrl);

    // Open Graph
    setMetaTag('og:type', type, true);
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', fullUrl, true);
    setMetaTag('og:site_name', SITE_NAME, true);
    setMetaTag('og:image', metaImage, true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);
    setMetaTag('og:locale', 'en_US', true);

    // Twitter
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:site', TWITTER_HANDLE);
    setMetaTag('twitter:creator', TWITTER_HANDLE);
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', metaImage);
    setMetaTag('twitter:image:alt', title);

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
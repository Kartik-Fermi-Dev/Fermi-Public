// Google Analytics 4 Event Tracking Utility

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

// Custom Events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// CTA Button Clicks
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
  });
};

// Navigation Tracking
export const trackNavigation = (destination: string, source: string) => {
  trackEvent('navigation', {
    destination,
    source,
  });
};

// Form Tracking
export const trackFormStart = (formName: string) => {
  trackEvent('form_start', {
    form_name: formName,
  });
};

export const trackFormSubmit = (formName: string, success: boolean) => {
  trackEvent('form_submit', {
    form_name: formName,
    success,
  });
};

// Conversion Events
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value || 0,
    currency: 'USD',
  });
};

// Demo Requests
export const trackDemoRequest = (source: string) => {
  trackEvent('demo_request', {
    source,
  });
  trackConversion('demo_request');
};

// Pricing Interactions
export const trackPricingView = () => {
  trackEvent('view_pricing_page', {});
};

export const trackPricingSelect = (plan: string) => {
  trackEvent('select_plan', {
    plan_name: plan,
  });
};

// Content Engagement
export const trackContentEngagement = (
  contentType: string,
  contentName: string,
  engagementTime: number
) => {
  trackEvent('content_engagement', {
    content_type: contentType,
    content_name: contentName,
    engagement_time_seconds: engagementTime,
  });
};

// Video/Animation Interactions
export const trackMediaInteraction = (
  mediaType: string,
  action: string,
  mediaName: string
) => {
  trackEvent('media_interaction', {
    media_type: mediaType,
    action,
    media_name: mediaName,
  });
};

// Scroll Depth Tracking
let scrollDepthTracked = {
  '25': false,
  '50': false,
  '75': false,
  '90': false,
  '100': false,
};

export const initScrollDepthTracking = () => {
  if (typeof window === 'undefined') return;

  const trackScrollDepth = () => {
    const scrollPercentage = Math.round(
      ((window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight) *
        100
    );

    Object.keys(scrollDepthTracked).forEach((depth) => {
      const depthNum = parseInt(depth);
      if (scrollPercentage >= depthNum && !scrollDepthTracked[depth]) {
        scrollDepthTracked[depth] = true;
        trackEvent('scroll_depth', {
          depth_percentage: depthNum,
          page_path: window.location.pathname,
        });
      }
    });
  };

  window.addEventListener('scroll', trackScrollDepth, { passive: true });

  return () => {
    window.removeEventListener('scroll', trackScrollDepth);
    // Reset tracking for new page
    scrollDepthTracked = {
      '25': false,
      '50': false,
      '75': false,
      '90': false,
      '100': false,
    };
  };
};

// Engagement Time Tracking
export const trackEngagementTime = (pageName: string, timeSpent: number) => {
  trackEvent('engagement_time', {
    page_name: pageName,
    time_seconds: Math.round(timeSpent / 1000),
  });
};

// Outbound Link Tracking
export const trackOutboundLink = (url: string, linkText: string) => {
  trackEvent('outbound_link', {
    url,
    link_text: linkText,
  });
};

// Social Media Clicks
export const trackSocialClick = (platform: string, location: string) => {
  trackEvent('social_click', {
    platform,
    location,
  });
};

// FAQ Interactions
export const trackFAQClick = (question: string) => {
  trackEvent('faq_interaction', {
    question,
  });
};

// Feature Interactions
export const trackFeatureInteraction = (featureName: string, action: string) => {
  trackEvent('feature_interaction', {
    feature_name: featureName,
    action,
  });
};

// Error Tracking
export const trackError = (errorType: string, errorMessage: string) => {
  trackEvent('error', {
    error_type: errorType,
    error_message: errorMessage,
  });
};

// Search Tracking
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount,
  });
};

// Page View Tracking (for SPA)
export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-M75JYN9WVM', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};
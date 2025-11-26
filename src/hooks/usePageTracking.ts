import { useEffect, useRef } from 'react';
import { trackPageView, trackEngagementTime, initScrollDepthTracking } from '../utils/analytics';

export const usePageTracking = (pageName: string, pageTitle: string) => {
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    // Track page view
    trackPageView(window.location.pathname, pageTitle);

    // Initialize scroll depth tracking
    const cleanupScrollTracking = initScrollDepthTracking();

    // Reset start time
    startTimeRef.current = Date.now();

    // Track engagement time on unmount or page change
    return () => {
      const timeSpent = Date.now() - startTimeRef.current;
      if (timeSpent > 3000) { // Only track if spent more than 3 seconds
        trackEngagementTime(pageName, timeSpent);
      }
      if (cleanupScrollTracking) {
        cleanupScrollTracking();
      }
    };
  }, [pageName, pageTitle]);
};

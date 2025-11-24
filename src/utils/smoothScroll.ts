/**
 * Premium smooth scroll utility - Apple-style
 * Provides consistent, fluid scroll animations across the entire site
 */

interface SmoothScrollOptions {
  duration?: number; // 900-1200ms for premium feel
  offset?: number; // Header offset
  callback?: () => void;
}

export const smoothScrollTo = (
  targetId: string,
  options: SmoothScrollOptions = {}
) => {
  const {
    duration = 1000, // Default 1000ms for balanced feel
    offset = 140,
    callback
  } = options;

  const element = document.getElementById(targetId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;
  const startPosition = window.scrollY;
  const distance = offsetPosition - startPosition;
  const startTime = performance.now();

  // Premium cubic-bezier easing for Apple-like feel
  // Soft acceleration at start, gentle deceleration at end
  const premiumEasing = (t: number): number => {
    // Custom bezier curve: (0.25, 0.1, 0.25, 1)
    // Equivalent to CSS ease-out with subtle acceleration
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easing = premiumEasing(progress);

    window.scrollTo(0, startPosition + distance * easing);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    } else {
      if (callback) callback();
    }
  };

  requestAnimationFrame(animateScroll);
};

/**
 * Smooth scroll to top with premium animation
 */
export const smoothScrollToTop = (duration: number = 900) => {
  const startPosition = window.scrollY;
  const startTime = performance.now();

  const premiumEasing = (t: number): number => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easing = premiumEasing(progress);

    window.scrollTo(0, startPosition * (1 - easing));

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

/**
 * Initialize section observers for fade-up animations
 */
export const initSectionAnimations = () => {
  const sections = document.querySelectorAll('[data-scroll-section]');
  
  const observerOptions = {
    root: null,
    rootMargin: '-10% 0px -10% 0px',
    threshold: 0.1
  };

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach(section => {
    const element = section as HTMLElement;
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
  });

  return observer;
};

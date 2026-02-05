import { useState, useEffect, useRef } from 'react';
import FermiHeader from './components/fermi/FermiHeader';
import FermiFooter from './components/fermi/FermiFooter';
import { StickyDemoButton } from './components/StickyDemoButton';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import ProductDemoPage from './pages/ProductDemo';
import ExploreProductPage from './pages/ExploreProduct';
import BrainPage from './pages/Brain';
import BlogPage from './pages/Blog';
import BlogPostPage from './pages/BlogPost';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import TermsOfServicePage from './pages/TermsOfService';
import CareersPage from './pages/Careers';
import SitemapPage from './pages/Sitemap';

// Extend window interface for Google Analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: Record<string, any>[];
  }
}

type Page = 'home' | 'product' | 'explore-product' | 'brain' | 'blog' | 'blog-post' | 'about' | 'contact' | 'privacy' | 'terms' | 'careers' | 'sitemap';

export default function App() {
  const getInitialPage = (): Page => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname;
    
    // Remove trailing slash if present (except for root)
    const cleanPath = path === '/' ? '/' : path.replace(/\/$/, '');
    
    switch (cleanPath) {
      case '/': return 'home';
      case '/product': return 'product';
      case '/explore-product': return 'explore-product';
      case '/brain': return 'brain';
      case '/blog': return 'blog';
      case '/about': return 'about';
      case '/contact': return 'contact';
      case '/privacy': return 'privacy';
      case '/terms': return 'terms';
      case '/careers': return 'careers';
      case '/sitemap': return 'sitemap';
      default:
        // Check for blog posts
        if (cleanPath.startsWith('/blog/')) {
          return 'blog-post';
        }
        return 'home'; // Fallback to home (or could be 404 page)
    }
  };

  const getInitialPostSlug = (): string => {
    if (typeof window === 'undefined') return '';
    const path = window.location.pathname;
    if (path.startsWith('/blog/') && path.length > 6) {
      return path.slice(6);
    }
    return '';
  };

  const [currentPage, setCurrentPage] = useState<Page>(getInitialPage);
  const [currentPostSlug, setCurrentPostSlug] = useState<string>(getInitialPostSlug);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingPage, setPendingPage] = useState<Page | null>(null);
  const [pendingPostSlug, setPendingPostSlug] = useState<string>('');
  const isFirstRender = useRef(true);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const newPage = getInitialPage();
      const newSlug = getInitialPostSlug();
      setCurrentPage(newPage);
      setCurrentPostSlug(newSlug);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle page view tracking
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      const pagePath = currentPage === 'home' ? '/' : `/${currentPage}`;
      const pageTitle = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
      
      window.gtag('event', 'page_view', {
        page_title: pageTitle,
        page_path: pagePath,
        page_location: window.location.origin + pagePath
      });
    }
  }, [currentPage, currentPostSlug]);

  // Handle page transition animation
  useEffect(() => {
    if (pendingPage) {
      console.log('🎬 Starting transition to:', pendingPage);
      console.log('📊 Current scroll position:', window.pageYOffset);
      
      // Start the overlay animation
      setIsTransitioning(true);
      
      // At 50% of animation (400ms), change page
      setTimeout(() => {
        console.log('🔄 Changing page content...');
        setCurrentPage(pendingPage);
        setCurrentPostSlug(pendingPostSlug);
      }, 400);
      
      // Scroll to top multiple times to force it
      setTimeout(() => {
        console.log('📍 Forcing scroll to top...');
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
        console.log('✅ Scroll position after force:', window.pageYOffset);
      }, 450);
      
      // Force again right before animation ends
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
        console.log('🔒 Final scroll position:', window.pageYOffset);
      }, 750);
      
      // End transition after full animation
      setTimeout(() => {
        setIsTransitioning(false);
        setPendingPage(null);
        console.log('🎉 Transition complete');
      }, 800);
    }
  }, [pendingPage, pendingPostSlug]);

  const navigateToPost = (slug: string) => {
    // Update URL
    const url = `/blog/${slug}`;
    window.history.pushState({}, '', url);
    
    setPendingPostSlug(slug);
    setPendingPage('blog-post');
  };

  const navigateTo = (page: Page) => {
    // Update URL
    const url = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== url) {
      window.history.pushState({}, '', url);
    }

    // Skip transition on first render or if navigating to same page
    if (isFirstRender.current || page === currentPage) {
      isFirstRender.current = false;
      setCurrentPage(page);
      return;
    }
    
    setPendingPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'product':
        return <ProductDemoPage onNavigate={navigateTo} />;
      case 'explore-product':
        return <ExploreProductPage />;
      case 'brain':
        return <BrainPage onNavigate={navigateTo} />;
      case 'blog':
        return <BlogPage onNavigateToPost={navigateToPost} />;
      case 'blog-post':
        return <BlogPostPage slug={currentPostSlug} onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPolicyPage onNavigate={navigateTo} />;
      case 'terms':
        return <TermsOfServicePage onNavigate={navigateTo} />;
      case 'careers':
        return <CareersPage onNavigate={navigateTo} />;
      case 'sitemap':
        return <SitemapPage onNavigate={navigateTo} onNavigateToPost={navigateToPost} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  // Don't show header/footer/sticky button on product demo page or explore product page
  const isProductDemo = currentPage === 'product' || currentPage === 'explore-product';

  return (
    <div className={`${isProductDemo ? 'fixed inset-0 w-screen h-screen overflow-hidden' : 'min-h-screen'} bg-white text-gray-900 w-full m-0 p-0`}>
      {!isProductDemo && <FermiHeader currentPage={currentPage} onNavigate={navigateTo} />}
      <main className={`${isProductDemo ? 'w-full h-full' : 'w-full'} m-0 p-0`}>
        {renderPage()}
      </main>
      {!isProductDemo && <FermiFooter onNavigate={navigateTo} />}
      
      {/* Sticky Demo Button - appears on all pages except product demo */}
      {!isProductDemo && <StickyDemoButton onNavigate={navigateTo} />}
      
      {/* Page Transition Overlay - don't show on product demo */}
      {isTransitioning && !isProductDemo && (
        <div 
          className="fixed inset-0 bg-white pointer-events-none z-[9999]"
          style={{
            animation: 'pageTransition 800ms cubic-bezier(0.22, 0.36, 0, 1) forwards'
          }}
        />
      )}
      
      <style>{`
        @keyframes pageTransition {
          0% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  );
}
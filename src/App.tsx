import { useState, useEffect, useRef } from 'react';
import FermiHeader from './components/fermi/FermiHeader';
import FermiFooter from './components/fermi/FermiFooter';
import { StickyDemoButton } from './components/StickyDemoButton';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import BrainPage from './pages/Brain';
import BlogPage from './pages/Blog';
import BlogPostPage from './pages/BlogPost';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import TermsOfServicePage from './pages/TermsOfService';
import CareersPage from './pages/Careers';

type Page = 'home' | 'product' | 'brain' | 'blog' | 'blog-post' | 'about' | 'contact' | 'privacy' | 'terms' | 'careers';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentPostSlug, setCurrentPostSlug] = useState<string>('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingPage, setPendingPage] = useState<Page | null>(null);
  const [pendingPostSlug, setPendingPostSlug] = useState<string>('');
  const isFirstRender = useRef(true);

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
    setPendingPostSlug(slug);
    setPendingPage('blog-post');
  };

  const navigateTo = (page: Page) => {
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
        return <ProductPage onNavigate={navigateTo} />;
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
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 w-full m-0 p-0">
      <FermiHeader currentPage={currentPage} onNavigate={navigateTo} />
      <main className="w-full m-0 p-0">
        {renderPage()}
      </main>
      <FermiFooter onNavigate={navigateTo} />
      
      {/* Sticky Demo Button - appears on all pages */}
      <StickyDemoButton onNavigate={navigateTo} />
      
      {/* Page Transition Overlay */}
      {isTransitioning && (
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
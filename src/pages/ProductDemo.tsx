import { useEffect } from 'react';
// import ProductDemoApp from '../product-demo/app/App';
// import '../product-demo/styles/index.css';

type Page = 'home' | 'product' | 'brain' | 'blog' | 'about' | 'contact';

interface ProductDemoPageProps {
  onNavigate: (page: Page) => void;
}

// Placeholder component until ProductDemoApp is available
function ProductDemoApp() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Demo</h1>
        <p className="text-gray-600">Product demo will be available here</p>
      </div>
    </div>
  );
}

export default function ProductDemoPage({ onNavigate: _onNavigate }: ProductDemoPageProps) {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Remove any body margins/padding that might interfere
    const originalBodyMargin = document.body.style.margin;
    const originalBodyPadding = document.body.style.padding;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlMargin = document.documentElement.style.margin;
    const originalHtmlPadding = document.documentElement.style.padding;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      // Cleanup - restore original styles
      document.body.style.margin = originalBodyMargin;
      document.body.style.padding = originalBodyPadding;
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.margin = originalHtmlMargin;
      document.documentElement.style.padding = originalHtmlPadding;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 w-screen h-screen overflow-hidden" 
      style={{ 
        margin: 0, 
        padding: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh'
      }}
    >
      <ProductDemoApp />
    </div>
  );
}

// Inline icon to avoid lucide-react runtime errors
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

type Page = 'home' | 'product' | 'brain' | 'about' | 'contact';

interface StickyDemoButtonProps {
  onNavigate: (page: Page) => void;
}

export function StickyDemoButton({ onNavigate }: StickyDemoButtonProps) {
  return (
    <div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-fade-in"
      style={{ animationDelay: '1s' }}
    >
      <div className="bg-[#1A1A1A] rounded-full shadow-2xl border border-gray-800 flex items-center overflow-hidden">
        {/* Buttons */}
        <div className="flex items-center divide-x divide-gray-700">
          {/* Book a Demo Button */}
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-white hover:bg-[#FFB800]/10 transition-all flex items-center gap-2 group hover:scale-105 active:scale-95"
          >
            <span className="text-sm font-medium">Book a demo</span>
            <div className="group-hover:translate-x-1 transition-transform">
              <ArrowRightIcon />
            </div>
          </button>

          {/* Explore Product Button — opens demo in new tab */}
          <a
            href="https://demo.fermi.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-[#87CEEB] hover:bg-[#87CEEB]/10 transition-all flex items-center gap-2 group hover:scale-105 active:scale-95"
          >
            <span className="text-sm font-medium">Explore Product</span>
            <div className="group-hover:translate-x-1 transition-transform">
              <ArrowRightIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
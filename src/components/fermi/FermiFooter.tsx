import ColorLogoNoBackground from '../../imports/ColorLogoNoBackground1';

// Inline icons to avoid lucide-react runtime errors
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

type Page = 'home' | 'product' | 'brain' | 'about' | 'contact' | 'privacy' | 'terms' | 'careers' | 'sitemap';

interface FermiFooterProps {
  onNavigate: (page: Page) => void;
}

export default function FermiFooter({ onNavigate }: FermiFooterProps) {
  return (
    <footer className="border-t border-gray-200 bg-white mt-24">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 mb-[32px] mt-[0px] mr-[0px] ml-[0px]">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 cursor-pointer w-32 h-8" onClick={() => onNavigate('home')}>
              <ColorLogoNoBackground />
            </div>
            <p className="text-[#6B6D71] leading-relaxed text-[16px]">
              AI Operational Brain for Modern Enterprises
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs text-gray-400 mb-4 uppercase tracking-wider text-[16px]">Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'Features', page: 'product' as Page },
                { label: 'The Brain', page: 'brain' as Page },
                { label: 'Integrations', page: 'product' as Page },
                { label: 'Request Demo', page: 'contact' as Page }
              ].map((link, i) => (
                <li 
                  key={i}
                  className="hover:translate-x-1 transition-transform"
                >
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-sm text-gray-600 hover:text-[#0A2F51] transition-colors text-[16px]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs text-gray-400 mb-4 uppercase tracking-wider text-[16px]">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', page: 'about' as Page },
                { label: 'Careers', page: 'careers' as Page },
                { label: 'Contact', page: 'contact' as Page }
              ].map((link, i) => (
                <li 
                  key={i}
                  className="hover:translate-x-1 transition-transform"
                >
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-sm text-gray-600 hover:text-[#0A2F51] transition-colors text-[16px]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs text-gray-400 mb-4 uppercase tracking-wider text-[16px]">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: 'Documentation', page: null },
                { label: 'API Reference', page: null },
                { label: 'Privacy Policy', page: 'privacy' as Page },
                { label: 'Terms of Service', page: 'terms' as Page },
                { label: 'Sitemap', page: 'sitemap' as Page }
              ].map((link, i) => (
                <li 
                  key={i}
                  className="hover:translate-x-1 transition-transform"
                >
                  {link.page ? (
                    <a
                      href={`/${link.page}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(link.page);
                      }}
                      className="text-sm text-gray-600 hover:text-[#0A2F51] transition-colors text-[16px]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-[#0A2F51] transition-colors text-[16px]"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h4 className="text-xs text-gray-400 mb-4 uppercase tracking-wider text-[16px]">Stay Updated</h4>
            <p className="text-sm text-gray-600 mb-3 text-[16px]">
              Get the latest updates and insights.
            </p>
            <div className="flex gap-2 hover:scale-105 transition-transform">
              <input
                type="email"
                placeholder="Email"
                className="text-sm px-3 py-2 border border-gray-200 rounded-md flex-1 focus:outline-none focus:border-[#C7E0F4] transition-colors text-[16px]"
              />
              <button 
                className="px-4 py-2 bg-[#1A1A1A] text-white text-sm rounded-md hover:scale-105 active:scale-95 transition-transform"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2025 Fermi Dev. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' },
              { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0A2F51] transition-all hover:scale-125 active:scale-90"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
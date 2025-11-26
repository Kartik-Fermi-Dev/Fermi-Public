import { SEO } from '../components/SEO';
import { ArrowRight } from 'lucide-react';

type Page = 'home' | 'product' | 'brain' | 'blog' | 'blog-post' | 'about' | 'contact' | 'privacy' | 'terms' | 'careers' | 'sitemap';

interface SitemapPageProps {
  onNavigate: (page: Page) => void;
  onNavigateToPost?: (slug: string) => void;
}

export default function SitemapPage({ onNavigate, onNavigateToPost }: SitemapPageProps) {
  const sections = [
    {
      title: 'Main',
      links: [
        { label: 'Home', page: 'home' as Page },
        { label: 'Product', page: 'product' as Page },
        { label: 'Brain', page: 'brain' as Page },
        { label: 'About', page: 'about' as Page },
        { label: 'Contact', page: 'contact' as Page },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', page: 'about' as Page },
        { label: 'Careers', page: 'careers' as Page },
        { label: 'Contact', page: 'contact' as Page },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', page: 'privacy' as Page },
        { label: 'Terms of Service', page: 'terms' as Page },
      ]
    },
    {
      title: 'Blog',
      links: [
        { label: 'Blog Home', page: 'blog' as Page },
      ]
    }
  ];

  const blogPosts = [
    { title: 'From scattered tools to a digital brain', slug: 'scattered-tools-to-digital-brain' },
    { title: 'Coordination as a competitive advantage', slug: 'coordination-as-competitive-advantage' },
    { title: 'From firefighting to forward-thinking', slug: 'from-firefighting-to-forward-thinking' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Sitemap - Fermi Dev"
        description="Overview of all pages on the Fermi Dev website."
        keywords={["sitemap", "fermi dev pages", "site structure"]}
      />

      <section className="container-custom pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl tracking-tight text-[#1A1A1A] mb-12">
            Sitemap
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {sections.map((section) => (
              <div key={section.title} className="space-y-6">
                <h2 className="text-xl font-semibold text-[#0A2F51] border-b border-gray-200 pb-2">
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => onNavigate(link.page)}
                        className="text-lg text-[#6B6D71] hover:text-[#0A2F51] transition-colors flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">
                          {link.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Blog Posts Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-[#0A2F51] border-b border-gray-200 pb-2">
                Latest Articles
              </h2>
              <ul className="space-y-4">
                {blogPosts.map((post) => (
                  <li key={post.slug}>
                    <button
                      onClick={() => {
                         // If onNavigateToPost is provided, use it. 
                         // Otherwise we assume the parent might handle it or we just navigate to blog page as fallback (though ideally we fix the prop drilling)
                         if (onNavigateToPost) {
                             onNavigateToPost(post.slug);
                         } else {
                             onNavigate('blog' as Page);
                         }
                      }}
                      className="text-lg text-[#6B6D71] hover:text-[#0A2F51] transition-colors flex items-center group text-left"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {post.title}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

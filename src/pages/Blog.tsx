import { Button } from '../components/ui/button';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useEffect } from 'react';

type Page = 'home' | 'product' | 'brain' | 'blog' | 'about' | 'contact';

interface BlogPageProps {
  onNavigateToPost: (slug: string) => void;
}

export type BlogPostSlug = 'scattered-tools-to-digital-brain' | 'coordination-as-competitive-advantage' | 'from-firefighting-to-forward-thinking';

interface BlogPost {
  slug: BlogPostSlug;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage?: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'scattered-tools-to-digital-brain',
    title: 'From scattered tools to a digital brain',
    excerpt: 'Most enterprises run on a patchwork of disconnected systems. Learn how a unified operational brain changes everything.',
    author: 'Sarah Chen',
    date: 'November 8, 2025',
    readTime: '5 min read',
    tags: ['Operations', 'AI', 'Digital Transformation'],
  },
  {
    slug: 'coordination-as-competitive-advantage',
    title: 'Coordination as a competitive advantage',
    excerpt: 'Effective coordination is key to staying ahead in a fast-paced business environment. Discover how to leverage Fermi Dev for better coordination.',
    author: 'Michael Torres',
    date: 'November 1, 2025',
    readTime: '6 min read',
    tags: ['Coordination', 'Workflow', 'Best Practices'],
  },
  {
    slug: 'from-firefighting-to-forward-thinking',
    title: 'From firefighting to forward-thinking',
    excerpt: 'Traditional operations often involve reactive problem-solving. Learn how to shift to a proactive approach with Fermi Dev.',
    author: 'Alex Rivera',
    date: 'October 25, 2025',
    readTime: '7 min read',
    tags: ['Proactive Operations', 'Automation', 'Future of Work'],
  },
];

export default function BlogPage({ onNavigateToPost }: BlogPageProps) {
  return (
    <div className="bg-white">
      <SEO 
        title="Blog - AI & Operations Insights"
        description="Thoughts on AI, automation, and the future of enterprise operations. Learn how to leverage Fermi Dev for your business."
        keywords={["AI blog", "operations insights", "enterprise automation", "digital transformation", "Fermi Dev blog"]}
      />
      {/* Hero */}
      <section className="container-custom pt-20 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-[#D4C7E8]/30 text-[#0A2F51] px-4 py-2 rounded-full text-xs mb-8 uppercase tracking-wider">
            Blog & Insights
          </div>
          <h1 className="text-5xl md:text-7xl mb-8 tracking-tight text-[#1A1A1A] leading-tight">
            Intelligent<br />
            operations
          </h1>
          <p className="text-xl md:text-2xl text-[#6B6D71] leading-relaxed">
            Thoughts on AI, automation, and the future of enterprise operations.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container-custom pb-32">
        <div className="bg-gradient-to-br from-[#C7E0F4]/20 to-[#D4C7E8]/20 border border-gray-200 rounded-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 p-12">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {blogPosts[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-[#0A2F51] text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl md:text-5xl tracking-tight text-[#1A1A1A]">
                {blogPosts[0].title}
              </h2>
              <p className="text-lg text-[#6B6D71] leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-[#6B6D71]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <div>
                <Button
                  onClick={() => onNavigateToPost(blogPosts[0].slug)}
                  className="bg-[#0A2F51] hover:bg-[#0A2F51]/90 text-white rounded-md"
                >
                  Read article <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg min-h-[300px] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#C7E0F4]/30 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#0A2F51]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-sm">Featured Article</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="container-custom py-32 bg-[#F5F2ED] -mt-32 pt-48 border-t border-gray-200">
        <h2 className="text-3xl md:text-5xl mb-12 tracking-tight text-[#1A1A1A]">All Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#0A2F51] transition-colors cursor-pointer group"
              onClick={() => onNavigateToPost(post.slug)}
            >
              <div className="aspect-video bg-gradient-to-br from-[#C7E0F4]/30 to-[#D4C7E8]/30 flex items-center justify-center border-b border-gray-200">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                  <svg className="w-6 h-6 text-[#0A2F51]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-[#0A2F51]/10 text-[#0A2F51] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl text-[#1A1A1A] group-hover:text-[#0A2F51] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#6B6D71] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs text-[#6B6D71]">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-2 text-xs text-[#6B6D71]">
                    {post.date}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container-custom py-32">
        <div className="bg-gradient-to-br from-[#0A2F51] to-[#1A1A1A] rounded-lg p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl mb-6 tracking-tight text-white">
            Stay updated
          </h2>
          <p className="text-[#C7E0F4] text-lg mb-8 max-w-xl mx-auto">
            Get the latest insights on AI, automation, and intelligent operations delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C7E0F4]"
            />
            <Button className="bg-white hover:bg-[#F5F2ED] text-[#0A2F51] rounded-md">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
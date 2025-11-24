import { ArrowLeft, Clock, Tag, Share2, Twitter, Linkedin, Link2, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { SEO } from '../components/SEO';
import type { BlogPostSlug } from './Blog';
import { useEffect } from 'react';

type Page = 'home' | 'product' | 'brain' | 'blog' | 'about' | 'contact';

interface BlogPostPageProps {
  slug: BlogPostSlug;
  onNavigate: (page: Page) => void;
}

const blogPostContent: Record<string, any> = {
  'scattered-tools-to-digital-brain': {
    title: 'From scattered tools to a digital brain',
    author: 'Sarah Chen',
    role: 'Head of Product',
    date: 'November 8, 2025',
    readTime: '5 min read',
    tags: ['Operations', 'AI', 'Digital Transformation'],
    content: `
Modern enterprises operate with dozens—sometimes hundreds—of disconnected systems. Your CRM doesn't talk to your ERP. Your project management tool has no idea what's in your database. Every team has their own tools, their own workflows, their own version of the truth.

## The Cost of Fragmentation

This fragmentation comes with enormous hidden costs. Knowledge workers spend up to 20% of their time just finding information. Changes require manual coordination across multiple systems. Nobody has a complete picture of operations.

When you need to answer a simple question like "Why did our approval times spike last quarter?" you're stuck stitching together data from five different sources, hoping you haven't missed something critical.

## Enter the Digital Brain

What if all your operational data and processes existed in one unified model? Not a data warehouse—a living, breathing representation of your business that understands entities, relationships, and workflows.

This is what we call the Digital Brain. It's not about replacing your existing systems—it's about creating a layer of intelligence on top of them that sees the complete picture.

## How It Works

The Brain learns through a combination of guided interviews, system integrations, and continuous observation. It discovers:

- What entities exist (customers, orders, teams, resources)
- How they relate to each other
- What policies govern them
- What outcomes you're trying to achieve

Once built, this model becomes queryable. "Where is our cycle time stuck?" "What would happen if we changed this policy?" "Why are approvals taking longer?"

## Real Impact

Organizations using a unified operational brain report dramatic improvements:

- 60% reduction in time spent searching for information
- 40% faster decision-making cycles
- 50% fewer errors from coordination failures

More importantly, it enables capabilities that were previously impossible—like safely simulating changes before applying them, or deploying AI agents with full business context.

## The Path Forward

Building a digital brain isn't a six-month implementation project. With modern self-onboarding systems, you can be operational in days, not months. The key is starting with your most critical workflows and expanding from there.

The future of enterprise operations isn't more tools—it's unified intelligence that brings them all together.
    `,
  },
  'simulate-approve-apply': {
    title: 'Simulate → Approve → Apply: safe change at speed',
    author: 'Michael Torres',
    role: 'VP of Engineering',
    date: 'November 1, 2025',
    readTime: '6 min read',
    tags: ['Change Management', 'Workflow', 'Best Practices'],
    content: `
Traditional change management is broken. It takes weeks to coordinate a simple workflow change. By the time approvals come through, the problem has evolved or the opportunity has passed.

## The Old Way

Here's how most organizations handle operational changes today:

1. Someone identifies a needed change
2. Multiple meetings to discuss impacts
3. Manual testing in isolated environments
4. Rounds of approval emails
5. Deployment with fingers crossed
6. Hope nothing breaks

This process takes weeks and still introduces risk because testing never captures the full complexity of production systems.

## A Better Model

What if you could test every change in a perfect simulation of your production environment? Not a static copy—a dynamic model that understands dependencies and can predict impacts.

This is the Simulate → Approve → Apply model.

### Simulate

Run proposed changes in an isolated sandbox that mirrors your production data and workflows. See exactly what would happen before you commit. Test edge cases. Understand downstream impacts.

The simulation isn't just replaying data—it's using your operational brain to predict how entities will behave, what policies will trigger, which teams will be affected.

### Approve

With complete visibility into impacts, approvals become straightforward. Stakeholders see:

- What will change
- Who will be affected
- What the expected outcomes are
- What the risks are

No more endless email threads. No more surprise impacts discovered after deployment.

### Apply

Deploy changes with confidence, knowing exactly what will happen. Complete audit trail included. Rollback capability built-in.

## Real-World Example

One customer needed to change their order routing logic. Traditional approach would have taken 3 weeks and still carried risk.

With Simulate → Approve → Apply:
- Day 1: Simulated the change, discovered it would affect 23% of orders
- Day 2: Stakeholders reviewed and approved
- Day 3: Deployed to production

Zero surprises. Zero fires to fight.

## The Future of Change Management

Safe change at speed isn't a luxury—it's a competitive necessity. Organizations that can adapt quickly while maintaining reliability will outpace those stuck in slow change processes.

The technology exists today. The question is: how long can you afford to wait?
    `,
  },
  'agents-as-business-hands': {
    title: 'Agents as the new hands of your business',
    author: 'Alex Rivera',
    role: 'AI Solutions Architect',
    date: 'October 25, 2025',
    readTime: '7 min read',
    tags: ['AI Agents', 'Automation', 'Future of Work'],
    content: `
AI agents aren't just the latest buzzword—they represent a fundamental shift in how work gets done. But most organizations are thinking about agents all wrong.

## Beyond Simple Automation

Traditional automation follows rigid rules: if X happens, do Y. It breaks when edge cases appear. It can't adapt to changing contexts. It requires constant maintenance.

AI agents are different. They understand context, make decisions, and learn from outcomes. They're not scripts—they're digital workers.

## The Three Types of Agents

### 1. Task Agents

These handle specific, repeatable work. Order routing, invoice processing, data entry, report generation. They work 24/7, never get tired, and handle edge cases intelligently.

### 2. Coordination Agents

These manage workflows between humans and systems. They know when to escalate, when to wait, when to proceed. They understand SLAs and business priorities.

### 3. Analysis Agents

These observe, learn, and recommend. They spot patterns humans miss, identify optimization opportunities, and flag potential issues before they become problems.

## The Critical Ingredient: Context

Here's why most agent deployments fail: the agents lack business context. They don't understand the operational model—the entities, relationships, policies, and goals.

A customer service agent that doesn't understand your product catalog and return policies is just an expensive chatbot. An order routing agent that doesn't understand your supplier relationships and inventory constraints will make poor decisions.

This is why the Brain matters. Agents with access to your unified operational model become dramatically more capable.

## Human-in-the-Loop

The future isn't humans OR agents—it's humans AND agents. Critical decisions still need human judgment. But agents can:

- Handle the routine 90%
- Flag items needing human review
- Provide context and recommendations
- Execute approved decisions

## Getting Started

You don't need to deploy dozens of agents on day one. Start with one high-impact workflow:

1. Choose a repetitive, rule-based process
2. Give the agent access to your operational brain
3. Start with human-in-the-loop approvals
4. Gradually increase autonomy as trust builds

## The ROI is Real

Organizations with mature agent deployments report:

- 70% reduction in manual work
- 95% faster task completion
- 99.9% accuracy rates
- Happier teams (freed from repetitive work)

## What's Next

Agents will become as common as APIs. Every business function will have its own agent workforce. The question isn't whether to adopt agents—it's how quickly you can build the infrastructure to support them.

That infrastructure is: a unified operational brain, safe change management, and intelligent orchestration.

The future is already here. Are you ready?
    `,
  },
};

export default function BlogPostPage({ slug, onNavigate }: BlogPostPageProps) {
  const post = blogPostContent[slug] || blogPostContent['scattered-tools-to-digital-brain'];
  
  const description = post.content
    .replace(/#{1,6}\s/g, '')
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .substring(0, 160)
    .trim() + '...';

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "description": description
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    const shareButtons = document.querySelectorAll('.share-button');
    shareButtons.forEach(button => {
      button.addEventListener('click', () => {
        const shareUrl = button.getAttribute('data-url');
        if (shareUrl) {
          window.open(shareUrl, '_blank');
        }
      });
    });
  }, []);

  return (
    <div>
      <SEO 
        title={post.title}
        description={description}
        type="article"
        keywords={post.tags}
        schema={schema}
      />
      {/* Back Button */}
      <div className="container-custom pt-20 md:pt-24">
        <Button
          variant="ghost"
          onClick={() => onNavigate('blog')}
          className="text-foreground/60 hover:text-foreground"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Blog
        </Button>
      </div>

      {/* Article Header */}
      <article className="container-custom pt-8 pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-[#3D7BFF]/10 text-[#3D7BFF] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-6 pb-8 mb-8 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#3D7BFF]/10 flex items-center justify-center">
                <span className="text-[#3D7BFF] font-semibold">
                  {post.author.split(' ').map((n: string) => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="font-medium">{post.author}</div>
                <div className="text-sm text-foreground/60">{post.role}</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph: string, index: number) => {
              // Handle headers
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl md:text-3xl font-semibold mt-12 mb-6 tracking-tight">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl md:text-2xl font-semibold mt-8 mb-4 tracking-tight">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              // Handle lists
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n- ').map(item => item.replace(/^- /, ''));
                return (
                  <ul key={index} className="space-y-3 my-6 ml-6">
                    {items.map((item, i) => (
                      <li key={i} className="text-foreground/70 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              // Handle numbered lists
              if (/^\d+\./.test(paragraph)) {
                const items = paragraph.split(/\n\d+\.\s/).filter(Boolean);
                return (
                  <ol key={index} className="space-y-3 my-6 ml-6 list-decimal">
                    {items.map((item, i) => (
                      <li key={i} className="text-foreground/70 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ol>
                );
              }
              // Regular paragraphs
              return (
                <p key={index} className="text-foreground/70 leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-[#3D7BFF]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[#3D7BFF] font-semibold text-lg">
                  {post.author.split(' ').map((n: string) => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="font-semibold text-lg">{post.author}</div>
                <div className="text-sm text-foreground/60 mb-2">{post.role}</div>
                <p className="text-sm text-foreground/70">
                  Passionate about building intelligent systems that help enterprises operate more effectively.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-xl font-semibold mb-6">Continue Reading</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => onNavigate('blog')}
                className="bg-card border border-border rounded-lg p-6 hover:border-[#3D7BFF]/50 transition-colors text-left"
              >
                <div className="font-medium mb-2">View All Articles</div>
                <div className="text-sm text-foreground/60">
                  Explore more insights on intelligent operations
                </div>
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-br from-[#3D7BFF]/10 to-transparent border border-border rounded-lg p-6 hover:border-[#3D7BFF]/50 transition-colors text-left"
              >
                <div className="font-medium mb-2">Get a Demo</div>
                <div className="text-sm text-foreground/60">
                  See Fermi Dev in action
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-xl font-semibold mb-6">Share This Article</h3>
            <div className="flex items-center gap-4">
              <button
                className="share-button bg-[#3D7BFF]/10 text-[#3D7BFF] rounded-full p-2 hover:bg-[#3D7BFF]/20 transition-colors"
                data-url={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                className="share-button bg-[#3D7BFF]/10 text-[#3D7BFF] rounded-full p-2 hover:bg-[#3D7BFF]/20 transition-colors"
                data-url={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button
                className="share-button bg-[#3D7BFF]/10 text-[#3D7BFF] rounded-full p-2 hover:bg-[#3D7BFF]/20 transition-colors"
                data-url={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                className="share-button bg-[#3D7BFF]/10 text-[#3D7BFF] rounded-full p-2 hover:bg-[#3D7BFF]/20 transition-colors"
                data-url={window.location.href}
              >
                <Link2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
import { useEffect } from 'react';
import { SEO } from '../components/SEO';

// Inline icons to avoid lucide-react runtime errors
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MessageSquareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

export default function ContactPage() {
  // Initialize Cal.com embed
  useEffect(() => {
    // Cal.com initialization function
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize Cal
    const Cal = (window as any).Cal;
    Cal("init", "30min", { origin: "https://app.cal.com" });

    // Set up inline embed
    Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { layout: "month_view", theme: "light" },
      calLink: "fermidev/30min",
    });

    // Configure UI
    Cal.ns["30min"]("ui", { theme: "light", hideEventTypeDetails: false, layout: "month_view" });
  }, []);

  return (
    <div className="bg-white">
      <SEO 
        title="Contact Us - Schedule a Demo"
        description="Tell us about your workflows and we'll map your Brain. Schedule a personalized demo of Fermi Dev today."
        keywords={["contact fermi dev", "schedule demo", "enterprise AI demo", "AI consulting"]}
      />
      {/* Hero */}
      <section className="container-custom pt-12 md:pt-20 pb-16">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="font-display text-4xl md:text-6xl mb-6 tracking-tight text-[#1A1A1A]">
            Tell us about your workflows. We'll map your Brain.
          </h1>
          <p className="text-lg md:text-xl text-[#6B6D71] leading-relaxed">
            Schedule a personalized demo and see how Fermi Dev can transform your operations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom pb-24">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Cal.com Calendar */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 animate-fade-in">
            {/* Cal inline embed code begins */}
            <div style={{width:'100%',height:'100%',overflow:'scroll'}} id="my-cal-inline-30min"></div>
            {/* Cal inline embed code ends */}
          </div>

          {/* Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="text-2xl tracking-tight text-[#1A1A1A] mb-4">What to expect</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#87CEEB] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Discovery Call</h3>
                    <p className="text-sm text-[#6B6D71]">
                      We'll learn about your current workflows, pain points, and objectives. No sales pitch—just understanding.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFB800] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Custom Demo</h3>
                    <p className="text-sm text-[#6B6D71]">
                      We'll show you Fermi Dev in action, tailored to your specific use cases and challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#4CD964] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] mb-1">Implementation Plan</h3>
                    <p className="text-sm text-[#6B6D71]">
                      If there's a fit, we'll create a detailed plan for onboarding and deployment. Most customers are live within days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
              <h3 className="text-[#1A1A1A]">Other ways to reach us</h3>

              <div className="space-y-3">
                <a
                  href="mailto:info@fermi.dev"
                  className="flex items-center gap-3 text-sm text-[#6B6D71] hover:text-[#1A1A1A] transition-colors"
                >
                  <div className="w-8 h-8 bg-[#A78BFA] rounded-lg flex items-center justify-center">
                    <MailIcon />
                  </div>
                  <span>info@fermi.dev</span>
                </a>
              </div>
            </div>

            <div className="bg-[#F5F2ED] border border-gray-200 rounded-lg p-6">
              <h3 className="text-[#1A1A1A] mb-2">Typical response time</h3>
              <p className="text-sm text-[#6B6D71]">
                We typically respond within <strong className="text-[#1A1A1A]">1 hour</strong>. For urgent inquiries, please call or use live chat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-custom py-24 bg-[#F5F2ED]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl tracking-tight text-center text-[#1A1A1A] mb-8">
            Common questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#87CEEB] transition-colors">
              <h3 className="text-[#1A1A1A] mb-2">How long does implementation take?</h3>
              <p className="text-sm text-[#6B6D71]">
                Most customers are operational within days, not weeks. The self-onboarding process guides you through setup, and our team is available to help throughout.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#FFB800] transition-colors">
              <h3 className="text-[#1A1A1A] mb-2">Do you integrate with our existing systems?</h3>
              <p className="text-sm text-[#6B6D71]">
                Yes. We have pre-built connectors for major CRMs, ERPs, and databases, plus APIs for custom integrations. Our team will work with you to ensure smooth connectivity.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#A78BFA] transition-colors">
              <h3 className="text-[#1A1A1A] mb-2">Is our data secure?</h3>
              <p className="text-sm text-[#6B6D71]">
                Absolutely. We're SOC 2 Type II compliant, with encryption at rest and in transit, SSO/SAML support, and comprehensive audit logs. Enterprise security is built into every layer.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#4CD964] transition-colors">
              <h3 className="text-[#1A1A1A] mb-2">What size teams do you work with?</h3>
              <p className="text-sm text-[#6B6D71]">
                We work with organizations of all sizes, from 50-person startups to Fortune 500 enterprises. Our platform scales with you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
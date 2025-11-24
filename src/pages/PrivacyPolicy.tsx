import { useEffect } from 'react';

type Page = 'home' | 'product' | 'brain' | 'about' | 'contact' | 'privacy' | 'terms' | 'careers';

interface PrivacyPolicyPageProps {
  onNavigate: (page: Page) => void;
}

export default function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="mb-6">Privacy Policy</h1>
            <p className="text-[#6B6D71]">
              Last Updated: November 24, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl prose prose-lg">
            <div className="space-y-12">
              <div>
                <h2 className="mb-4">1. Introduction</h2>
                <p className="text-[#6B6D71]">
                  Welcome to Fermi Development, Inc. ("Fermi Dev," "we," "us," or "our"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI call analytics platform and related services.
                </p>
              </div>

              <div>
                <h2 className="mb-4">2. Information We Collect</h2>
                <h3 className="mb-3">2.1 Information You Provide</h3>
                <p className="text-[#6B6D71] mb-4">
                  We collect information that you voluntarily provide to us when you:
                </p>
                <ul className="text-[#6B6D71] space-y-2 mb-4">
                  <li>Register for an account</li>
                  <li>Use our services</li>
                  <li>Contact us for support</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-[#6B6D71]">
                  This may include: name, email address, company name, phone number, payment information, and call data.
                </p>

                <h3 className="mb-3 mt-6">2.2 Automatically Collected Information</h3>
                <p className="text-[#6B6D71]">
                  When you access our platform, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and cookies installed on your device. We also collect information about your usage patterns and interactions with our services.
                </p>
              </div>

              <div>
                <h2 className="mb-4">3. How We Use Your Information</h2>
                <p className="text-[#6B6D71] mb-4">
                  We use the information we collect to:
                </p>
                <ul className="text-[#6B6D71] space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your transactions and send related information</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4">4. Data Processing and AI Analytics</h2>
                <p className="text-[#6B6D71]">
                  Our platform uses artificial intelligence to analyze call data and provide operational intelligence. Call recordings and transcripts are processed using advanced AI models to extract insights, identify patterns, and generate analytics. We implement strict security measures to protect this sensitive data during processing and storage.
                </p>
              </div>

              <div>
                <h2 className="mb-4">5. Data Sharing and Disclosure</h2>
                <p className="text-[#6B6D71] mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="text-[#6B6D71] space-y-2">
                  <li><strong>Service Providers:</strong> We share information with third-party vendors who perform services on our behalf</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                </ul>
                <p className="text-[#6B6D71] mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </div>

              <div>
                <h2 className="mb-4">6. Data Security</h2>
                <p className="text-[#6B6D71]">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure socket layer technology (SSL), firewalls, and secure server facilities. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="mb-4">7. Data Retention</h2>
                <p className="text-[#6B6D71]">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Call data and analytics are retained according to your subscription plan and can be deleted upon request.
                </p>
              </div>

              <div>
                <h2 className="mb-4">8. Your Rights</h2>
                <p className="text-[#6B6D71] mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="text-[#6B6D71] space-y-2">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-[#6B6D71] mt-4">
                  To exercise these rights, please contact us at privacy@fermidev.com.
                </p>
              </div>

              <div>
                <h2 className="mb-4">9. Cookies and Tracking Technologies</h2>
                <p className="text-[#6B6D71]">
                  We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                </p>
              </div>

              <div>
                <h2 className="mb-4">10. International Data Transfers</h2>
                <p className="text-[#6B6D71]">
                  Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We ensure appropriate safeguards are in place for such transfers.
                </p>
              </div>

              <div>
                <h2 className="mb-4">11. Children's Privacy</h2>
                <p className="text-[#6B6D71]">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
                </p>
              </div>

              <div>
                <h2 className="mb-4">12. Changes to This Privacy Policy</h2>
                <p className="text-[#6B6D71]">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div>
                <h2 className="mb-4">13. Contact Us</h2>
                <p className="text-[#6B6D71] mb-4">
                  If you have questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className="text-[#6B6D71] space-y-2">
                  <p><strong>Fermi Development, Inc.</strong></p>
                  <p>Email: privacy@fermidev.com</p>
                  <p>Email: support@fermidev.com</p>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => onNavigate('home')}
                className="text-[#FFB800] hover:text-[#FF9500] transition-colors inline-flex items-center gap-2"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
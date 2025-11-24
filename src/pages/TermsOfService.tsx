import { useEffect } from 'react';

type Page = 'home' | 'product' | 'brain' | 'blog' | 'about' | 'contact' | 'privacy' | 'terms' | 'careers';

interface TermsOfServicePageProps {
  onNavigate: (page: Page) => void;
}

export default function TermsOfServicePage({ onNavigate }: TermsOfServicePageProps) {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="mb-6">Terms of Service</h1>
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
                <h2 className="mb-4">1. Agreement to Terms</h2>
                <p className="text-[#6B6D71]">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and Fermi Development, Inc. ("Fermi Dev," "we," "us," or "our") concerning your access to and use of our AI call analytics platform and related services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
                </p>
              </div>

              <div>
                <h2 className="mb-4">2. Eligibility</h2>
                <p className="text-[#6B6D71]">
                  You must be at least 18 years old and have the legal capacity to enter into contracts to use our Services. By using the Services, you represent and warrant that you meet these requirements. If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
                </p>
              </div>

              <div>
                <h2 className="mb-4">3. Account Registration</h2>
                <p className="text-[#6B6D71] mb-4">
                  To access certain features of our Services, you must register for an account. When you register, you agree to:
                </p>
                <ul className="text-[#6B6D71] space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized access or security breach</li>
                </ul>
                <p className="text-[#6B6D71] mt-4">
                  We reserve the right to suspend or terminate accounts that violate these Terms.
                </p>
              </div>

              <div>
                <h2 className="mb-4">4. Subscription and Fees</h2>
                <h3 className="mb-3">4.1 Subscription Plans</h3>
                <p className="text-[#6B6D71]">
                  Our Services are offered through various subscription plans. The features, limitations, and pricing for each plan are described on our website. We reserve the right to modify our subscription plans and pricing at any time.
                </p>

                <h3 className="mb-3 mt-6">4.2 Payment Terms</h3>
                <p className="text-[#6B6D71]">
                  Subscription fees are charged in advance on a recurring basis (monthly or annually) according to your selected plan. You authorize us to charge your payment method on a recurring basis until you cancel your subscription. All fees are non-refundable except as required by law or as explicitly stated in these Terms.
                </p>

                <h3 className="mb-3 mt-6">4.3 Free Trials</h3>
                <p className="text-[#6B6D71]">
                  We may offer free trial periods for certain subscription plans. At the end of the trial period, your subscription will automatically convert to a paid subscription unless you cancel before the trial ends.
                </p>
              </div>

              <div>
                <h2 className="mb-4">5. Use of Services</h2>
                <h3 className="mb-3">5.1 License Grant</h3>
                <p className="text-[#6B6D71]">
                  Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your internal business purposes.
                </p>

                <h3 className="mb-3 mt-6">5.2 Prohibited Activities</h3>
                <p className="text-[#6B6D71] mb-4">
                  You agree not to:
                </p>
                <ul className="text-[#6B6D71] space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the intellectual property rights of others</li>
                  <li>Upload or transmit malicious code, viruses, or harmful content</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Interfere with or disrupt the Services or servers</li>
                  <li>Use the Services for any illegal, fraudulent, or harmful purpose</li>
                  <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                  <li>Resell, sublicense, or otherwise commercialize the Services</li>
                  <li>Remove or modify any proprietary notices or labels</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4">6. Your Data and Content</h2>
                <h3 className="mb-3">6.1 Your Data</h3>
                <p className="text-[#6B6D71]">
                  You retain all ownership rights in the data you upload, input, or submit to the Services ("Your Data"). By using our Services, you grant us a limited license to process, store, and analyze Your Data solely for the purpose of providing the Services to you.
                </p>

                <h3 className="mb-3 mt-6">6.2 Call Recording Consent</h3>
                <p className="text-[#6B6D71]">
                  You are solely responsible for ensuring that you have obtained all necessary consents and comply with all applicable laws regarding call recording and data processing. You represent and warrant that you have the legal right to upload and process all call data through our Services.
                </p>

                <h3 className="mb-3 mt-6">6.3 Data Security</h3>
                <p className="text-[#6B6D71]">
                  We implement reasonable security measures to protect Your Data. However, you acknowledge that no system is completely secure and you use the Services at your own risk.
                </p>
              </div>

              <div>
                <h2 className="mb-4">7. Intellectual Property</h2>
                <p className="text-[#6B6D71]">
                  The Services, including all software, algorithms, designs, graphics, text, and other content (excluding Your Data), are owned by Fermi Dev and protected by intellectual property laws. Our trademarks, logos, and brand features may not be used without our prior written permission.
                </p>
              </div>

              <div>
                <h2 className="mb-4">8. AI and Analytics</h2>
                <p className="text-[#6B6D71]">
                  Our Services use artificial intelligence and machine learning to analyze call data and provide insights. While we strive for accuracy, AI-generated insights are provided "as is" and should be used as guidance rather than absolute determinations. You remain responsible for validating and acting upon any insights or recommendations generated by our Services.
                </p>
              </div>

              <div>
                <h2 className="mb-4">9. Confidentiality</h2>
                <p className="text-[#6B6D71]">
                  Each party agrees to maintain the confidentiality of the other party's confidential information and use it only for purposes related to the Services. This obligation survives termination of these Terms.
                </p>
              </div>

              <div>
                <h2 className="mb-4">10. Disclaimer of Warranties</h2>
                <p className="text-[#6B6D71]">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
                </p>
              </div>

              <div>
                <h2 className="mb-4">11. Limitation of Liability</h2>
                <p className="text-[#6B6D71]">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, FERMI DEV SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.
                </p>
              </div>

              <div>
                <h2 className="mb-4">12. Indemnification</h2>
                <p className="text-[#6B6D71]">
                  You agree to indemnify, defend, and hold harmless Fermi Dev and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorney's fees) arising out of or related to: (a) your use of the Services; (b) your violation of these Terms; (c) your violation of any rights of another party; or (d) Your Data.
                </p>
              </div>

              <div>
                <h2 className="mb-4">13. Term and Termination</h2>
                <h3 className="mb-3">13.1 Term</h3>
                <p className="text-[#6B6D71]">
                  These Terms remain in effect while you use the Services.
                </p>

                <h3 className="mb-3 mt-6">13.2 Termination by You</h3>
                <p className="text-[#6B6D71]">
                  You may cancel your subscription at any time through your account settings or by contacting us. Cancellation will take effect at the end of your current billing period.
                </p>

                <h3 className="mb-3 mt-6">13.3 Termination by Us</h3>
                <p className="text-[#6B6D71]">
                  We may suspend or terminate your access to the Services immediately if you violate these Terms or engage in conduct that we determine to be harmful to our business or other users.
                </p>

                <h3 className="mb-3 mt-6">13.4 Effect of Termination</h3>
                <p className="text-[#6B6D71]">
                  Upon termination, your right to use the Services will immediately cease. We may delete Your Data in accordance with our data retention policies. Provisions that by their nature should survive termination will remain in effect.
                </p>
              </div>

              <div>
                <h2 className="mb-4">14. Modifications to Services and Terms</h2>
                <p className="text-[#6B6D71]">
                  We reserve the right to modify, suspend, or discontinue the Services at any time without notice. We may also update these Terms from time to time. Continued use of the Services after changes constitutes acceptance of the modified Terms. Material changes will be communicated via email or through the Services.
                </p>
              </div>

              <div>
                <h2 className="mb-4">15. Governing Law and Dispute Resolution</h2>
                <p className="text-[#6B6D71]">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. Any disputes arising out of or related to these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in court.
                </p>
              </div>

              <div>
                <h2 className="mb-4">16. General Provisions</h2>
                <h3 className="mb-3">16.1 Entire Agreement</h3>
                <p className="text-[#6B6D71]">
                  These Terms constitute the entire agreement between you and Fermi Dev regarding the Services and supersede all prior agreements.
                </p>

                <h3 className="mb-3 mt-6">16.2 Severability</h3>
                <p className="text-[#6B6D71]">
                  If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
                </p>

                <h3 className="mb-3 mt-6">16.3 Waiver</h3>
                <p className="text-[#6B6D71]">
                  No waiver of any provision of these Terms shall be deemed a further or continuing waiver of such provision or any other provision.
                </p>

                <h3 className="mb-3 mt-6">16.4 Assignment</h3>
                <p className="text-[#6B6D71]">
                  You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.
                </p>
              </div>

              <div>
                <h2 className="mb-4">17. Contact Information</h2>
                <p className="text-[#6B6D71] mb-4">
                  If you have questions about these Terms, please contact us:
                </p>
                <div className="text-[#6B6D71] space-y-2">
                  <p><strong>Fermi Development, Inc.</strong></p>
                  <p>Email: legal@fermidev.com</p>
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
import React from 'react';

interface TermsConditionsProps {
  companyName?: string;
  companyEmail?: string;
}

const TermsConditions: React.FC<TermsConditionsProps> = ({
  companyName = 'Lets Code',
  companyEmail = 'letscode@lets-code.co.in'
}) => {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl min-h-screen">
      <div className="bg-white rounded-lg shadow-lg mb-8 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center">Terms and Conditions</h1>
          <p className="text-sm text-gray-500 text-center">Last Updated: {lastUpdated}</p>
        </div>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Agreement to Terms</h2>
            <p className="text-gray-700">
              Welcome to {companyName}. By accessing our platform, you agree to be bound by these Terms and Conditions. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Description of Service</h2>
            <p className="text-gray-700">
              {companyName} is a tech community platform that provides:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>Access to tech community groups and discussions</li>
              <li>Premium job updates and notifications</li>
              <li>Access to startup sheet listings</li>
              <li>Community features and networking opportunities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. User Accounts</h2>
            <p className="text-gray-700">
              When creating an account on our platform, you must provide accurate and complete information. You are responsible for:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>Maintaining the security of your account</li>
              <li>All activities that occur under your account</li>
              <li>Promptly notifying us of any unauthorized access or use</li>
              <li>Ensuring your account information is accurate and up-to-date</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Premium Services and Payments</h2>
            <p className="text-gray-700">
              Certain features of our platform require a paid subscription:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>Job updates and notifications are available through premium subscriptions</li>
              <li>Access to startup sheet listings requires a premium membership</li>
              <li>Premium features may be modified, added, or removed at our discretion</li>
              <li>All payments are non-refundable unless otherwise stated</li>
              <li>Subscription fees may be changed with prior notice to users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Community Guidelines and Prohibited Activities</h2>
            <p className="text-gray-700">
              Users of our platform must adhere to the following guidelines:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>No spamming, phishing, or distribution of malware</li>
              <li>No harassment, hate speech, or discriminatory content</li>
              <li>No posting of illegal or unauthorized content</li>
              <li>No impersonation of others or misrepresentation</li>
              <li>No automated data collection without permission</li>
              <li>No interference with platform security features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Intellectual Property Rights</h2>
            <p className="text-gray-700">
              All content on our platform, including but not limited to text, graphics, logos, and software, is the property 
              of {companyName} or its content suppliers and is protected by intellectual property laws. Users retain ownership 
              of their content but grant us a license to use, store, and share their content according to our privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Termination</h2>
            <p className="text-gray-700">
              We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, 
              for any reason, including breach of these Terms. All provisions of the Terms which by their nature should survive 
              termination shall survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
            <p className="text-gray-700">
              {companyName} and its directors, employees, partners, agents, suppliers, or affiliates shall not be liable for 
              any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to 
              use the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to 
              provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will 
              be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms, please contact us at {companyEmail}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
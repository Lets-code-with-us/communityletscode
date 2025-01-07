import React from 'react';

interface PrivacyPolicyProps {
  companyEmail?: string;
  companyPhone?: string;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({
  companyEmail = 'letscode@lets-code.co.in',
  companyPhone = '+91 9369979063'
}) => {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl min-h-screen"> {/* Added py-20 for top spacing */}
      <div className="bg-white rounded-lg shadow-lg mb-8 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center">Privacy Policy</h1>
          <p className="text-sm text-gray-500 text-center">Last Updated: {lastUpdated}</p>
        </div>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-gray-700">
              Welcome to our Privacy Policy. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
            <p className="text-gray-700">
              We collect and process the following personal information:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
            <p className="text-gray-700">
              We use your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
            <p className="text-gray-700">
              The security of your data is important to us. We implement appropriate technical and organizational measures 
              to maintain the security of your personal information. However, please be aware that no method of transmission 
              over the Internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Your Data Protection Rights</h2>
            <p className="text-gray-700">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>Access your personal data</li>
              <li>Correct your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>By email: {companyEmail}</li>
              <li>By phone: {companyPhone}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

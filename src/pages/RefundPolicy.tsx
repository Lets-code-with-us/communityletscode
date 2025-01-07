import React from 'react';

interface RefundPolicyProps {
  companyEmail?: string;
}

const RefundPolicy: React.FC<RefundPolicyProps> = ({
  companyEmail = 'letscode@lets-code.co.in'
}) => {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl min-h-screen">
      <div className="bg-white rounded-lg shadow-lg mb-8 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center">Refund Policy</h1>
          <p className="text-sm text-gray-500 text-center">Last Updated: {lastUpdated}</p>
        </div>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Overview</h2>
            <p className="text-gray-700">
              This Refund Policy outlines our guidelines for refund requests for our digital products and services,
              including our paid WhatsApp group services for job updates and startup list sheets. We appreciate your
              trust in our services and are committed to maintaining transparency in our refund process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Digital Products and Services</h2>
            <p className="text-gray-700">
              Our services include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>Paid WhatsApp group memberships for batch-wise job updates</li>
              <li>Access to startup list sheets</li>
              <li>Related digital content and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Refund Eligibility</h2>
            <p className="text-gray-700">
              Due to the digital nature of our products and services, we maintain a strict no-refund policy. However,
              refunds may be considered in extreme circumstances, subject to company discretion. Each refund request
              will be evaluated on a case-by-case basis, taking into account the specific situation and circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Refund Process</h2>
            <p className="text-gray-700">
              If you believe you qualify for a refund under extreme circumstances:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>Submit your refund request via email to {companyEmail}</li>
              <li>Include detailed information about your purchase and the reason for requesting a refund</li>
              <li>If approved, you will be asked to provide your UPI transfer details</li>
              <li>The refund process may take up to 7 working days to complete</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Non-Cancellation Policy</h2>
            <p className="text-gray-700">
              As our services are digital products with immediate access, we do not offer cancellation options for
              subscriptions or purchases. All sales are final unless qualifying for a refund under extreme circumstances
              as mentioned above.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Contact Information</h2>
            <p className="text-gray-700">
              For any questions or concerns about our refund policy, please contact us:
            </p>
            <p className="pl-6 mt-2 text-gray-700">
              Email: {companyEmail}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
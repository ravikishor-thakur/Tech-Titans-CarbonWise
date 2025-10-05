import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-white py-12">
        <div className="container mx-auto px-4 max-w-3xl prose">
          <h1>Terms of Service</h1>
          <p>
            Welcome to CarbonWise. By accessing or using this application, you agree to these
            Terms. If you do not agree, please do not use the service.
          </p>

          <h2>Use of the Service</h2>
          <p>
            This demo is provided for informational and educational purposes. You agree not to misuse
            the app, attempt unauthorized access, or interfere with its operation.
          </p>

          <h2>Account & Data</h2>
          <p>
            For the demo experience, basic profile data may be stored in your browser's local storage.
            No external data processing occurs in this demo build.
          </p>

          <h2>Content & Accuracy</h2>
          <p>
            Emissions estimates are approximations intended for guidance only and are not certifications.
            We do not guarantee accuracy, completeness, or fitness for a particular purpose.
          </p>

          <h2>Limitations of Liability</h2>
          <p>
            To the fullest extent permitted by law, CarbonWise is not liable for any indirect or
            consequential damages arising from the use of this app.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use after changes constitutes
            acceptance of the updated Terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms? Email us at
            {' '}<a href="mailto:ravikishor022@gmail.com">ravikishor022@gmail.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;



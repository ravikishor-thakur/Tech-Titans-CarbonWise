import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-white py-12">
        <div className="container mx-auto px-4 max-w-3xl prose">
          <h1>Privacy Policy</h1>
          <p>
            We value your privacy. This demo stores minimal information in your browser's local storage
            to provide a seamless experience (e.g., basic profile and session state). No personal data is
            transmitted to external servers in this demo build.
          </p>
          <h2>Information We Collect</h2>
          <ul>
            <li>Account data you enter (name, email) for sign-in demos.</li>
            <li>Preferences and app state stored locally for convenience.</li>
          </ul>
          <h2>How We Use Information</h2>
          <ul>
            <li>Provide login and dashboard features.</li>
            <li>Improve the app’s user experience.</li>
          </ul>
          <h2>Your Choices</h2>
          <ul>
            <li>You can clear your data anytime by logging out and clearing browser storage.</li>
          </ul>
          <h2>Contact</h2>
          <p>
            For any privacy questions, email us at <a href="mailto:ravikishor022@gmail.com">ravikishor022@gmail.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;



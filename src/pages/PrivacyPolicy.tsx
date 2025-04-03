
import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | Ambica Pharma</title>
        <meta name="description" content="Ambica Pharma's privacy policy outlines how we collect, use, and protect your personal information." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-12 bg-primary/10">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last Updated: April 3, 2025
          </p>
        </div>
      </section>
      
      {/* Privacy Policy Content */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none text-foreground">
            <p>
              At Ambica Pharma, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2 className="text-2xl font-display font-semibold text-primary mt-8 mb-4">Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal identifiable information such as name, postal address, email address, telephone number, or any other identifier by which you may be contacted online or offline when you provide it to us.</li>
              <li>Information about your internet connection, the equipment you use to access our website, and usage details.</li>
              <li>Business information when you register as a distributor or business partner.</li>
            </ul>
            
            <h2 className="text-2xl font-display font-semibold text-primary mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We use the information we collect about you or that you provide to us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To present our website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our website or any products or services we offer.</li>
              <li>For any other purpose with your consent.</li>
            </ul>
            
            <h2 className="text-2xl font-display font-semibold text-primary mt-8 mb-4">Disclosure of Your Information</h2>
            <p>
              We may disclose personal information that we collect or you provide as described in this privacy policy:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To our subsidiaries and affiliates.</li>
              <li>To contractors, service providers, and other third parties we use to support our business.</li>
              <li>To fulfill the purpose for which you provide it.</li>
              <li>For any other purpose disclosed by us when you provide the information.</li>
              <li>With your consent.</li>
            </ul>
            
            <h2 className="text-2xl font-display font-semibold text-primary mt-8 mb-4">Data Security</h2>
            <p>
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.
            </p>
            <p>
              However, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website. Any transmission of personal information is at your own risk.
            </p>
            
            <h2 className="text-2xl font-display font-semibold text-primary mt-8 mb-4">Cookie Policy</h2>
            <p>
              We use cookies to enhance your experience on our website. Cookies are small text files that are placed on your computer by websites that you visit. They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
            
            <h2 className="text-2xl font-display font-semibold text-primary mt-8 mb-4">Your Choices About Our Collection, Use and Disclosure</h2>
            <p>
              We strive to provide you with choices regarding the personal information you provide to us. You can:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Opt-out of our email marketing communications by following the unsubscribe instructions in any marketing email we send.</li>
              <li>Request access to your personal data that we hold.</li>
              <li>Request correction of your personal data.</li>
              <li>Request deletion of your personal data, subject to certain exceptions.</li>
            </ul>
            
            <h2 className="text-2xl font-display font-semibold text-primary mt-8 mb-4">Changes to Our Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. If we make material changes to how we treat our users' personal information, we will post the new privacy policy on this page with a notice that the privacy policy has been updated.
            </p>
            <p>
              The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our website and this privacy policy to check for any changes.
            </p>
            
            <h2 className="text-2xl font-display font-semibold text-primary mt-8 mb-4">Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy and our privacy practices, contact us at:
            </p>
            <address className="not-italic">
              <p><strong>Ambica Pharma</strong></p>
              <p>22 to 25, 2nd Floor, Chapsey Building</p>
              <p>72/78, Shamaldas Gandhi Marg, Kalbadevi</p>
              <p>Mumbai, Maharashtra-400 002</p>
              <p>Email: ambicapharma@gmail.com</p>
              <p>Phone: +91 9967006091</p>
            </address>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

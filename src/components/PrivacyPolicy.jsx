import React from "react";
import Navbar from "../components/NavbarComponent";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <div className="text-center">
      <Navbar />
      {/* <h2 className="text-5xl font-bold mb-6 mt-10 lg:text-7xl">
        JusAskin White Paper
      </h2> */}
      <div className="container mx-auto px-6 py-2 flex flex-row items-center justify-between ">
      <div className="items-center mb-10">
        <h3 className="text-2xl lg:text-4xl text-left text-gray-700">Privacy Policy</h3><br></br>
        <p class="text-left text-gray-700">Last Updated and Effective: June 12, 2023</p>
  <p class="text-left text-gray-700">At Jus Askin LLC, we are committed to protecting the privacy of our users. This privacy policy applies to all of the services offered by Jus Askin LLC, including our mobile app, website, and any other related services.</p>
  <p class="text-left text-gray-700">By using our services, you agree to the collection, use, and sharing of your personal information as described in this privacy policy.</p>
  <h2 class="text-left text-gray-700 mt-5">Information We Collect</h2>
  <p class="text-left text-gray-700 mt-5">We collect several types of information from and about our users, including:</p>
  <ul class="text-left text-gray-700">
    <li>Personal information, such as your name, email address, and phone number</li>
    <li>Demographic information, such as your age and gender</li>
    <li>Usage information, such as how you use our services and the resources you access</li>
    <li>Location information, such as your IP address and location data from your device</li>
  </ul>
  <p class="text-left text-gray-700 mt-5">We collect this information through a variety of methods, including:</p>
  <ul class="text-left text-gray-700">
    <li>Directly from you when you provide it to us, such as when you create an account or submit a question</li>
    <li>Automatically when you use our services, such as through the use of cookies and tracking technologies</li>
    <li>From third-party sources, such as social media platforms and other third-party services</li>
  </ul>
  <h2 class="text-left text-gray-700 mt-5">Use of Personal Information</h2>
  <p class="text-left text-gray-700 mt-5">We use the personal information we collect from you to provide and improve our services, including:</p>
  <ul class="text-left text-gray-700">
    <li>Creating and managing your account</li>
    <li>Responding to your questions and requests</li>
    <li>Personalizing your experience, such as by providing recommendations and customized content</li>
    <li>Analyzing and understanding how you use our services</li>
  </ul>
  <h2 class="text-left text-gray-700 mt-5">Sharing of Personal Information</h2>
  <p class="text-left text-gray-700 mt-5">We do not sell or rent your personal information to third parties for their marketing purposes without your explicit consent. We may share your personal information with third parties for the following purposes:</p>
  <ul class="text-left text-gray-700">
    <li>To comply with legal obligations, such as responding to subpoenas or legal requests</li>
    <li>To protect the rights, property, and safety of Jus Askin LLC, our users, and others</li>
    <li>To provide you with services or information that you have requested</li>
  </ul>
  <h2 class="text-left text-gray-700 mt-5">Security of Personal Information</h2>
  <p class="text-left text-gray-700 mt-5">We take reasonable measures to protect the personal information we collect from you from unauthorized access, use, or disclosure. However, no method of transmitting or storing data is completely secure, and we cannot guarantee the absolute security of your personal information.</p>
  <h2 class="text-left text-gray-700 mt-5">Changes to This Privacy Policy</h2>
  <p class="text-left text-gray-700 mt-5">We may update this privacy policy from time to time to reflect changes in our practices or to comply with legal requirements. We encourage you to review this privacy policy periodically to stay informed about how we are protecting the personal information we collect.</p>
  <h2 class="text-left text-gray-700 mt-5">Contact Us</h2>
  <p class="text-left text-gray-700 mt-5">If you have any questions or concerns about this privacy policy or our collection, use, and sharing of personal information, please contact us at <a href="mailto:mail@jusaskin.com">mail@jusaskin.com</a>.</p>
  <p class="text-left text-gray-700 mt-5">Thank you for using Jus Askin and entrusting us with your privacy.</p>
  <p class="text-left text-gray-700">Jordan Pollard<br></br>Founder, Jus Askin</p>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default PrivacyPolicy;

import Footer from "@/common/Footer/Footer";
import Header from "@/common/Header/Header";

const PrivacyPolicy = () => {
  return (
    <div className="text-gray-800">
      <Header />
      <div className="lg:mx-[200px] ">
      <div className="pt-[85px]"></div>

      <div className="p-8 space-y-6">
        <h1 className="text-xl font-bold mb-4">PRIVACY POLICY</h1>
        <p>Last updated: November 2025</p>

        <p>
          Your privacy is important to us. This policy explains how{" "}
          <span className="font-semibold">Pixelated</span> collects, uses, and
          safeguards your personal information.
        </p>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">1. DATA WE COLLECT</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Personal info (name, email, phone, address)</li>
            <li>Payment info (processed securely via payment gateways)</li>
            <li>Usage data (browser, pages visited, device type)</li>
          </ul>

          <h2 className="text-lg font-semibold">2. HOW WE USE YOUR DATA</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>To process and deliver your orders</li>
            <li>To communicate updates, offers, or support</li>
            <li>To improve site performance and prevent fraud</li>
          </ul>

          <h2 className="text-lg font-semibold">3. DATA SHARING</h2>
          <p>
            We never sell your data. We only share it with trusted service
            providers (couriers, payment gateways) or law enforcement if
            required.
          </p>

          <h2 className="text-lg font-semibold">4. COOKIES</h2>
          <p>
            We use cookies to enhance user experience and analyze traffic. You
            can disable cookies in your browser settings.
          </p>

          <h2 className="text-lg font-semibold">5. DATA SECURITY</h2>
          <p>
            We use secure servers and encryption to protect your data. However,
            no system is 100% secure.
          </p>

          <h2 className="text-lg font-semibold">6. YOUR RIGHTS</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Access or delete your personal data</li>
            <li>Opt out of marketing emails</li>
            <li>Request data removal via privacy@pixelated.com</li>
          </ul>

          <h2 className="text-lg font-semibold">7. POLICY UPDATES</h2>
          <p>
            We may revise this policy periodically. Updates will be reflected
            with a new “Last Updated” date.
          </p>

          <h2 className="text-lg font-semibold">8. CONTACT US</h2>
          <p>
            📧 privacy@pixelated.com <br />
            📍 Pixelated Pvt. Ltd., Jamshedpur, India
          </p>
        </section>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;

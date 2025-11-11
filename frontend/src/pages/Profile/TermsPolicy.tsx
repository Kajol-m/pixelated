import Footer from "@/common/Footer/Footer";
import Header from "@/common/Header/Header";

const TermsPolicy = () => {
  return (
    <div className="text-gray-800">
      <Header />
      <div className="lg:mx-[200px] ">
      <div className="pt-[85px]"></div>

      <div className="p-8 space-y-6">
        <h1 className="text-xl font-bold mb-4">TERMS & CONDITIONS</h1>
        <p>Last updated: November 2025</p>

        <p>
          Welcome to <span className="font-semibold">Pixelated</span>, your
          destination for premium clothing and fashion accessories. By using
          our website (www.pixelated.com), you agree to these Terms &
          Conditions.
        </p>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">1. GENERAL INFORMATION</h2>
          <p>
            Pixelated is owned and operated by Pixelated Pvt. Ltd. We may update
            or modify these terms at any time without prior notice. Continued
            use implies agreement with the revised terms.
          </p>

          <h2 className="text-lg font-semibold">2. ELIGIBILITY</h2>
          <p>
            Users must be at least 18 years old or access the site under the
            supervision of a guardian. You are responsible for maintaining the
            confidentiality of your account credentials.
          </p>

          <h2 className="text-lg font-semibold">3. PRODUCTS & SERVICES</h2>
          <p>
            We strive to display our products as accurately as possible. Actual
            colors may vary. Prices and availability are subject to change
            without notice. Pixelated reserves the right to refuse or cancel any
            order at its discretion.
          </p>

          <h2 className="text-lg font-semibold">4. ORDERS & PAYMENTS</h2>
          <p>
            Orders can be placed via our website using valid payment methods.
            All prices include applicable taxes unless stated otherwise.
          </p>

          <h2 className="text-lg font-semibold">5. SHIPPING & DELIVERY</h2>
          <p>
            We deliver across India through trusted partners. Standard delivery
            time is 3–7 business days. Shipping charges (if any) will appear at
            checkout.
          </p>

          <h2 className="text-lg font-semibold">6. RETURNS & REFUNDS</h2>
          <p>
            Products can be returned within 7 days of delivery if defective,
            damaged, or incorrect. Refunds will be processed within 5–7 working
            days after inspection.
          </p>

          <h2 className="text-lg font-semibold">7. INTELLECTUAL PROPERTY</h2>
          <p>
            All content (logos, text, graphics) belongs to Pixelated Pvt. Ltd.
            You may not reproduce or use it without consent.
          </p>

          <h2 className="text-lg font-semibold">8. LIMITATION AN LIABILITY</h2>
          <p>
            Pixelated will not be liable for indirect or incidental damages
            resulting from your use of the website.
          </p>

          <h2 className="text-lg font-semibold">9. GOVERNING LAW</h2>
          <p>
            These terms are governed by Indian law. Any disputes fall under the
            jurisdiction of courts in Jamshedpur, Jharkhand.
          </p>

          <h2 className="text-lg font-semibold">10. CONTACT US</h2>
          <p>
            support@pixelated.com <br />
            Pixelated Pvt. Ltd., Jamshedpur, India
          </p>
        </section>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TermsPolicy;

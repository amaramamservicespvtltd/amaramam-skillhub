import Layout from "@/components/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <section className="gradient-hero text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Privacy Policy</h1>
      </div>
    </section>
    <section className="py-16">
      <div className="container max-w-3xl prose prose-sm">
        <h2 className="font-heading">1. Information We Collect</h2>
        <p className="text-muted-foreground">We collect personal information such as name, email, phone number, and payment details when you register or enroll in courses.</p>
        <h2 className="font-heading">2. How We Use Your Information</h2>
        <p className="text-muted-foreground">Your information is used to provide and improve our services, process payments, send course updates, and communicate important announcements.</p>
        <h2 className="font-heading">3. Data Security</h2>
        <p className="text-muted-foreground">We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse.</p>
        <h2 className="font-heading">4. Third-Party Sharing</h2>
        <p className="text-muted-foreground">We do not sell your personal information. We may share data with trusted partners for payment processing and service delivery.</p>
        <h2 className="font-heading">5. Cookies</h2>
        <p className="text-muted-foreground">Our website uses cookies to enhance user experience. You can manage cookie preferences through your browser settings.</p>
        <h2 className="font-heading">6. Contact</h2>
        <p className="text-muted-foreground">For privacy-related inquiries, email us at info@amaramam.com.</p>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;

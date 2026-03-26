import Layout from "@/components/Layout";

const RefundPolicy = () => (
  <Layout>
    <section className="gradient-hero text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Refund & Cancellation Policy</h1>
      </div>
    </section>
    <section className="py-16">
      <div className="container max-w-3xl prose prose-sm">
        <h2 className="font-heading">1. Refund Eligibility</h2>
        <p className="text-muted-foreground">Refund requests must be made within 7 days of enrollment. After accessing more than 25% of course content, refunds will not be processed.</p>
        <h2 className="font-heading">2. Cancellation</h2>
        <p className="text-muted-foreground">You may cancel your enrollment at any time. Cancellation does not automatically entitle you to a refund — see eligibility above.</p>
        <h2 className="font-heading">3. Refund Process</h2>
        <p className="text-muted-foreground">Approved refunds will be processed within 7-10 business days and credited to the original payment method.</p>
        <h2 className="font-heading">4. Non-Refundable Items</h2>
        <p className="text-muted-foreground">Certification fees, assessment fees, and workshop fees are non-refundable once availed.</p>
        <h2 className="font-heading">5. Contact</h2>
        <p className="text-muted-foreground">For refund or cancellation requests, email us at info@amaramam.com or call +91 7075851158.</p>
      </div>
    </section>
  </Layout>
);

export default RefundPolicy;

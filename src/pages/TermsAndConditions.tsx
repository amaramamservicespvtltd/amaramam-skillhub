import Layout from "@/components/Layout";

const TermsAndConditions = () => (
  <Layout>
    <section className="gradient-hero text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Terms & Conditions</h1>
      </div>
    </section>
    <section className="py-16">
      <div className="container max-w-3xl prose prose-sm">
        <h2 className="font-heading">1. Introduction</h2>
        <p className="text-muted-foreground">These Terms & Conditions govern your use of the Amaramam Skill Hub website and services. By accessing our platform, you agree to be bound by these terms.</p>
        <h2 className="font-heading">2. Services</h2>
        <p className="text-muted-foreground">Amaramam Skill Hub provides online courses, training programs, and related educational services. We reserve the right to modify or discontinue any service at any time.</p>
        <h2 className="font-heading">3. User Accounts</h2>
        <p className="text-muted-foreground">You are responsible for maintaining the confidentiality of your account information. You agree to notify us immediately of any unauthorized use of your account.</p>
        <h2 className="font-heading">4. Intellectual Property</h2>
        <p className="text-muted-foreground">All content, materials, and resources provided through our platform are the intellectual property of Amaramam Skill Hub and are protected by copyright laws.</p>
        <h2 className="font-heading">5. Payment Terms</h2>
        <p className="text-muted-foreground">All course fees are quoted in Indian Rupees (INR). Payment must be made in full before accessing course content unless otherwise specified.</p>
        <h2 className="font-heading">6. Code of Conduct</h2>
        <p className="text-muted-foreground">Users must conduct themselves professionally and respectfully. Any form of harassment, plagiarism, or misuse of resources will result in account termination.</p>
        <h2 className="font-heading">7. Contact</h2>
        <p className="text-muted-foreground">For questions about these terms, contact us at info@amaramam.com or call +91 7075851158.</p>
      </div>
    </section>
  </Layout>
);

export default TermsAndConditions;

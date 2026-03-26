import Layout from "@/components/Layout";

const Disclaimer = () => (
  <Layout>
    <section className="gradient-hero text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Disclaimer</h1>
      </div>
    </section>
    <section className="py-16">
      <div className="container max-w-3xl prose prose-sm">
        <h2 className="font-heading">1. General Information</h2>
        <p className="text-muted-foreground">The information provided on the Amaramam Skill Hub website is for general informational and educational purposes only.</p>
        <h2 className="font-heading">2. No Guarantees</h2>
        <p className="text-muted-foreground">While we strive to provide accurate and up-to-date information, we make no guarantees about the completeness, accuracy, or reliability of any information on this site.</p>
        <h2 className="font-heading">3. Employment Disclaimer</h2>
        <p className="text-muted-foreground">Amaramam Skill Hub provides placement assistance but does not guarantee employment. Career outcomes depend on individual effort, market conditions, and other factors.</p>
        <h2 className="font-heading">4. External Links</h2>
        <p className="text-muted-foreground">Our website may contain links to third-party websites. We are not responsible for the content or practices of these external sites.</p>
        <h2 className="font-heading">5. Contact</h2>
        <p className="text-muted-foreground">For any concerns, contact us at info@amaramam.com.</p>
      </div>
    </section>
  </Layout>
);

export default Disclaimer;

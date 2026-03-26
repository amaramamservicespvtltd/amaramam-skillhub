import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const programs = [
  { title: "Campus Connect Program", desc: "Partner with colleges and universities for on-campus skill development workshops and training.", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=300&fit=crop" },
  { title: "Corporate Training", desc: "Customized training programs for organizations to upskill their workforce with the latest technologies.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop" },
  { title: "Internship Program", desc: "Gain real-world experience through our structured internship program with industry projects.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=300&fit=crop" },
  { title: "Placement Assistance", desc: "End-to-end placement support including resume building, mock interviews, and company referrals.", image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=300&fit=crop" },
];

const Programs = () => (
  <Layout>
    <section className="gradient-hero text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Programs</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">Comprehensive programs designed to bridge the gap between learning and career success.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((p) => (
            <Card key={p.title} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
              <img src={p.image} alt={p.title} className="w-full h-52 object-cover" loading="lazy" />
              <CardContent className="pt-6">
                <h3 className="font-heading font-bold text-xl mb-2">{p.title}</h3>
                <p className="text-muted-foreground mb-4">{p.desc}</p>
                <Link to="/contact"><Button className="gradient-primary text-primary-foreground border-0">Learn More</Button></Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Programs;

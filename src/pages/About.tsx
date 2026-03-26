import { Users, Award, BookOpen, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="gradient-hero text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Us</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">Empowering learners with industry-ready skills since day one.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">Amaramam Skill Hub was founded with a simple mission: make quality skills training accessible to every student in India, regardless of their background or location.</p>
            <p className="text-muted-foreground">We partner with 50+ colleges, train 10,000+ learners, and deliver industry-aligned courses in AI, Web Development, Design, Marketing, and emerging technologies.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop" alt="Team collaboration" className="rounded-xl shadow-lg w-full h-64 object-cover" loading="lazy" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, v: "10,000+", l: "Learners" },
            { icon: BookOpen, v: "50+", l: "Courses" },
            { icon: Award, v: "50+", l: "College Partners" },
            { icon: Target, v: "95%", l: "Success Rate" },
          ].map(s => (
            <Card key={s.l} className="text-center border-0 shadow-md">
              <CardContent className="pt-6">
                <s.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-heading font-bold">{s.v}</div>
                <div className="text-sm text-muted-foreground">{s.l}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { title: "Accessibility", desc: "Quality education should be available to everyone, everywhere." },
              { title: "Practical Learning", desc: "We focus on real-world skills that employers actually need." },
              { title: "Student Success", desc: "Your career growth is our ultimate measure of success." },
            ].map(v => (
              <Card key={v.title} className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;

import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const plans = [
  { title: "Standard", price: "₹4,000", period: "per course", features: ["Access to 1 course", "Self-paced learning", "Course completion certificate", "Community forum access", "Email support", "Downloadable resources"] },
  { title: "Premium", price: "₹14,999", period: "per year", popular: true, features: ["Unlimited course access", "Live mentor sessions", "Industry certifications", "Placement assistance", "Priority support", "Project reviews", "1-on-1 career coaching", "Exclusive workshops"] },
  { title: "Corporate", price: "Custom", period: "per team", features: ["Custom curriculum design", "Dedicated account manager", "On-campus/on-site delivery", "Team analytics dashboard", "Bulk enrollment discounts", "Faculty training included"] },
];

const Pricing = () => (
  <Layout>
    <section className="gradient-hero text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Pricing</h1>
        <p className="text-lg opacity-90">Simple, transparent pricing. No hidden fees.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p) => (
            <Card key={p.title} className={`relative border-0 shadow-md ${p.popular ? "ring-2 ring-primary shadow-xl md:scale-105" : ""}`}>
              {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 gradient-primary text-primary-foreground text-xs rounded-full font-semibold">Most Popular</div>}
              <CardContent className="pt-8 pb-6">
                <h3 className="font-heading font-bold text-xl mb-1">{p.title}</h3>
                <div className="mb-6"><span className="text-3xl font-heading font-bold">{p.price}</span><span className="text-muted-foreground text-sm">/{p.period}</span></div>
                <ul className="space-y-2 mb-6">
                  {p.features.map(f => <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />{f}</li>)}
                </ul>
                <Link to="/contact"><Button className={`w-full ${p.popular ? "gradient-primary text-primary-foreground border-0" : ""}`} variant={p.popular ? "default" : "outline"}>{p.title === "Corporate" ? "Contact Sales" : p.popular ? "Start Premium" : "Get Started"}</Button></Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Pricing;

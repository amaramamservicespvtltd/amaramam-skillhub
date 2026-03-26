import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { TESTIMONIALS } from "@/lib/constants";

const Testimonials = () => (
  <Layout>
    <section className="gradient-hero text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Testimonials</h1>
        <p className="text-lg opacity-90">Real stories from real learners who transformed their careers.</p>
      </div>
    </section>
    <section className="py-16 relative overflow-hidden">
      <div className="absolute top-10 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="container max-w-6xl relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl h-full">
                <CardContent className="pt-6 pb-6 flex flex-col h-full">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5 flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/10" loading="lazy" />
                    <div>
                      <div className="font-heading font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                      {"course" in t && <div className="text-xs text-primary font-medium mt-0.5">{(t as any).course}</div>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Testimonials;

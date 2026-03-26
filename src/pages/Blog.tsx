import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  { title: "Top 10 Skills to Learn in 2025", excerpt: "Discover the most in-demand skills that employers are looking for in 2025.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop", date: "Jan 15, 2025" },
  { title: "How AI is Changing Education", excerpt: "Explore how artificial intelligence is transforming the way we learn and teach.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop", date: "Jan 10, 2025" },
  { title: "From Learner to Professional: Success Stories", excerpt: "Read inspiring stories of our students who transformed their careers.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop", date: "Jan 5, 2025" },
];

const Blog = () => (
  <Layout>
    <section className="gradient-hero text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Blog</h1>
        <p className="text-lg opacity-90">Insights, tips, and stories from the world of skill development.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <Card key={p.title} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
              <img src={p.image} alt={p.title} className="w-full h-44 object-cover" loading="lazy" />
              <CardContent className="pt-4">
                <span className="text-xs text-muted-foreground">{p.date}</span>
                <h3 className="font-heading font-semibold mt-1 mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;

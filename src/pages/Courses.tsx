import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { COURSES } from "@/lib/constants";

const Courses = () => (
  <Layout>
    <section className="gradient-hero text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Courses</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">Explore our comprehensive range of industry-aligned courses — all priced at ₹4,000</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course) => (
            <Card key={course.title} className="overflow-hidden group hover:shadow-xl transition-shadow border-0 shadow-md">
              <div className="relative overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute top-3 left-3 flex gap-1">
                  <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full font-medium">Certification</span>
                  <span className="px-2 py-0.5 bg-accent text-accent-foreground text-xs rounded-full font-medium">{course.category}</span>
                </div>
              </div>
              <CardContent className="pt-4">
                <h3 className="font-heading font-semibold text-lg mb-1">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{course.description}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-secondary text-secondary" />{course.rating}</span>
                  <span>•</span><span>{course.duration}</span><span>•</span><span>{course.students} students</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-heading font-bold text-primary">₹{course.price.toLocaleString()}</span>
                  <Link to="/contact"><Button size="sm" className="gradient-primary text-primary-foreground border-0">Enroll Now</Button></Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Courses;

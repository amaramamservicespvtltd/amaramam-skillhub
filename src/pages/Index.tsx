import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award, Briefcase, Star, CheckCircle, GraduationCap, Heart, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MentorCarousel from "@/components/MentorCarousel";
import Layout from "@/components/Layout";
import { COURSES, TESTIMONIALS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const Index = () => {
  const featuredCourses = COURSES.slice(0, 6);

  return (
    <Layout>
      {/* Hero — two-column layout */}
      <section className="relative overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/5 to-secondary/8" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.12)_0%,transparent_50%)]" />
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container relative py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Content */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/80 backdrop-blur-sm shadow-sm text-sm font-medium text-muted-foreground mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Trusted by <strong className="text-foreground">10,000+</strong> learners across India
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-heading font-bold leading-[1.1] tracking-tight text-foreground mb-6">
                Master In-Demand Skills{" "}
                <span className="gradient-text">Learn. Build. Grow.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
                Empowering learners across India with industry-aligned programs in AI, Web Development, Design, Cloud, Data, and more — with hands-on projects and expert mentorship.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link to="/courses">
                  <Button size="lg" className="gradient-primary border-0 text-primary-foreground font-semibold text-base px-8 shadow-lg shadow-primary/25">
                    Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="font-semibold text-base px-8">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeUp} className="flex items-center gap-6 mt-10 pt-8 border-t border-border/50">
                {[
                  { icon: BookOpen, label: "50+ Courses" },
                  { icon: Users, label: "Expert Mentors" },
                  { icon: Award, label: "Certified Programs" },
                ].map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <badge.icon className="h-4 w-4 text-primary" />
                    <span>{badge.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Animated illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              {/* Central glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />
              </div>

              {/* Floating education icons grid */}
              <div className="relative w-full max-w-md aspect-square">
                {/* Orbiting icons */}
                {[
                  { emoji: "📖", top: "8%", left: "15%", delay: 0, duration: 6 },
                  { emoji: "💻", top: "5%", left: "65%", delay: 1, duration: 7 },
                  { emoji: "🎓", top: "40%", left: "5%", delay: 0.5, duration: 5.5 },
                  { emoji: "🧠", top: "35%", left: "75%", delay: 1.5, duration: 6.5 },
                  { emoji: "⚡", top: "70%", left: "20%", delay: 2, duration: 8 },
                  { emoji: "🚀", top: "75%", left: "70%", delay: 0.8, duration: 5 },
                  { emoji: "📊", top: "55%", left: "45%", delay: 2.2, duration: 7.5 },
                  { emoji: "✏️", top: "15%", left: "42%", delay: 1.2, duration: 6.8 },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-4xl md:text-5xl"
                    style={{ top: item.top, left: item.left }}
                    animate={{
                      y: [0, -16, 0],
                      rotate: [0, i % 2 === 0 ? 10 : -10, 0],
                    }}
                    transition={{
                      duration: item.duration,
                      delay: item.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-border/50">
                      {item.emoji}
                    </div>
                  </motion.div>
                ))}

                {/* Central card */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="bg-background/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-border/50 text-center">
                    <div className="text-4xl mb-2">🎯</div>
                    <div className="font-heading font-bold text-foreground text-sm">Skill Hub</div>
                    <div className="text-xs text-muted-foreground">Where Skills Begin</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "10,000+", label: "Students Empowered" },
              { icon: BookOpen, value: "50+", label: "Course Domains" },
              { icon: Award, value: "15+", label: "Expert Mentors" },
              { icon: Briefcase, value: "95%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us — clean cards */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Amaramam?</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">What Makes Us Different</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              We bridge the gap between academic learning and industry requirements with hands-on, project-based training.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", icon: BookOpen, title: "Hands-on Learning", desc: "Project-based curriculum that lets you build real applications from day one." },
              { num: "02", icon: Users, title: "Mentorship by Experts", desc: "Get personalized feedback from industry professionals with 10+ years of experience." },
              { num: "03", icon: Briefcase, title: "Widely Applicable Skills", desc: "Build a solid foundation with skills that transfer across industries and roles." },
              { num: "04", icon: Award, title: "Industry Certifications", desc: "Earn recognized certifications that open doors and validate your expertise." },
            ].map((item) => (
              <Card key={item.num} className="group hover:shadow-xl transition-all duration-300 border hover:border-primary/20">
                <CardContent className="pt-6">
                  <span className="text-xs font-bold text-primary/40 font-heading">{item.num}</span>
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center my-3">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Course Domains — marquee style */}
      <section className="py-20 bg-muted/50">
        <div className="container mb-10">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Explore Our Domains</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Industry-Ready Courses</h2>
              <p className="text-muted-foreground mt-2">With Real Tech and Projects</p>
            </div>
            <Link to="/courses" className="hidden md:block">
              <Button variant="outline">Explore All Courses</Button>
            </Link>
          </div>
        </div>
        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-marquee">
            {[...COURSES, ...COURSES].map((course, i) => (
              <div key={`${course.title}-${i}`} className="flex-shrink-0 w-64">
                <div className="relative overflow-hidden rounded-xl group">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-sm font-heading font-semibold text-background">{course.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container mt-8 text-center md:hidden">
          <Link to="/courses"><Button variant="outline">Explore All Courses</Button></Link>
        </div>
      </section>

      {/* Learn. Empathy. Certify — 3 pillar section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Learn. Empathy. Certify.</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Our three-pillar approach to transforming students into industry-ready professionals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Learn",
                subtitle: "Acquire Real-World Skills",
                desc: "Our industry-aligned curriculum goes beyond textbooks. Learn from real projects, real challenges, and real solutions.",
                items: ["50+ courses in Tech & Non-Tech domains", "Hands-on project-based learning", "Industry expert mentorship", "Live sessions with Q&A"],
                color: "primary" as const,
              },
              {
                icon: Heart,
                title: "Empathy",
                subtitle: "Understand & Connect",
                desc: "We believe in human-centric education. Our mentors understand your struggles and support your growth.",
                items: ["1-on-1 mentorship sessions", "Peer learning communities", "Mental wellness support", "Career counseling"],
                color: "accent" as const,
              },
              {
                icon: BadgeCheck,
                title: "Certify",
                subtitle: "Validate Your Expertise",
                desc: "Earn industry-recognized certifications that open doors. Our certificates are verified by employers.",
                items: ["Certified programs", "Government recognized", "Verifiable digital certificates", "LinkedIn badge integration"],
                color: "secondary" as const,
              },
            ].map((pillar) => (
              <Card key={pillar.title} className="border hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className={`w-12 h-12 rounded-xl bg-${pillar.color}/10 flex items-center justify-center mb-4`}>
                    <pillar.icon className={`h-6 w-6 text-${pillar.color}`} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-1">{pillar.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground mb-3">{pillar.subtitle}</p>
                  <p className="text-sm text-muted-foreground mb-4">{pillar.desc}</p>
                  <ul className="space-y-2">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Mentors</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Meet Our Expert Mentors</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Learn from industry professionals who bring real-world experience to every session.
            </p>
          </div>
          <MentorCarousel />
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Popular Courses</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Our Flagship Programs</h2>
              <p className="text-muted-foreground mt-2">Start learning with our most in-demand courses</p>
            </div>
            <Link to="/courses" className="hidden md:block">
              <Button variant="outline">View All Courses</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/courses"><Button variant="outline">View All Courses</Button></Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How Amaramam Helped Students Gain Real-Time Knowledge</h2>
            <p className="text-lg opacity-90">
              Our students don't just learn theory — they work on real projects, solve real problems, and build portfolios that impress employers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            {[
              { v: "10,000+", l: "Students Empowered" },
              { v: "95%", l: "Satisfaction Rate" },
              { v: "50+", l: "College Partners" },
              { v: "500+", l: "Projects Completed" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-4xl font-heading font-bold">{s.v}</div>
                <div className="text-sm opacity-80 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/testimonials">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                Read Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative background accents */}
        <div className="absolute top-10 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Student Success</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">What Our Students Say</h2>
            <p className="text-muted-foreground mt-2">Real stories from real learners who transformed their careers.</p>
          </div>

          {/* Desktop: 3-column grid, Mobile: horizontal scroll */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="snap-center shrink-0 w-[85vw] max-w-sm">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground mt-2">Choose the plan that fits your learning goals. No hidden fees.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PricingCard title="Standard" price="₹4,000" period="per course" features={["Access to 1 course", "Self-paced learning", "Course completion certificate", "Community forum access", "Email support", "Downloadable resources"]} />
            <PricingCard title="Premium" price="₹14,999" period="per year" popular features={["Unlimited course access", "Live mentor sessions", "Industry certifications", "Placement assistance", "Priority support", "Project reviews", "1-on-1 career coaching", "Exclusive workshops"]} />
            <PricingCard title="Corporate" price="Custom" period="per team" features={["Custom curriculum design", "Dedicated account manager", "On-campus/on-site delivery", "Team analytics dashboard", "Bulk enrollment discounts", "Faculty training included"]} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "What types of courses does Amaramam Skill Hub offer?", a: "We offer courses in AI, ML, Data Science, Web Development, Cybersecurity, Digital Marketing, UI/UX Design, and many more emerging technologies." },
              { q: "How long are the courses?", a: "Most courses are 8-12 weeks long, with self-paced options available." },
              { q: "Do I get a certificate after completing a course?", a: "Yes, every course comes with a recognized completion certificate." },
              { q: "Are the courses available online?", a: "Yes, all courses are available online with live sessions and recorded content." },
              { q: "Do you provide placement support?", a: "Yes, we provide dedicated placement assistance including resume building, mock interviews, and direct company referrals." },
              { q: "Can my college partner with Amaramam?", a: "Absolutely! We have 50+ college partnerships. Contact us for details." },
              { q: "What payment methods are accepted?", a: "We accept UPI, credit/debit cards, net banking, and EMI options." },
              { q: "Is there a refund policy?", a: "Yes, please check our Refund & Cancellation Policy page for details." },
            ].map((faq) => (
              <details key={faq.q} className="group border rounded-lg">
                <summary className="flex items-center justify-between p-4 cursor-pointer font-medium hover:bg-muted/50 rounded-lg transition-colors">
                  {faq.q}
                  <span className="ml-2 text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="px-4 pb-4 text-sm text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Start Your Learning Journey Today</h2>
          <p className="text-muted-foreground mb-6">Get course updates, learning tips, and exclusive offers delivered to your inbox.</p>
          <form className="flex gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2.5 rounded-lg border bg-background text-foreground" />
            <Button className="gradient-primary text-primary-foreground border-0">Subscribe</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

const TestimonialCard = ({ testimonial: t }: { testimonial: typeof TESTIMONIALS[0] }) => (
  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden h-full">
    <CardContent className="pt-6 pb-6 flex flex-col h-full">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
        ))}
      </div>
      <p className="text-muted-foreground leading-relaxed mb-5 flex-1">"{t.quote}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-border/50">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/10"
          loading="lazy"
        />
        <div>
          <div className="font-heading font-semibold text-sm text-foreground">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
          {"course" in t && <div className="text-xs text-primary font-medium mt-0.5">{(t as any).course}</div>}
        </div>
      </div>
    </CardContent>
  </Card>
);

const CourseCard = ({ course }: { course: typeof COURSES[0] }) => (
  <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border hover:border-primary/20">
    <div className="relative overflow-hidden">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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
);

const PricingCard = ({ title, price, period, features, popular }: { title: string; price: string; period: string; features: string[]; popular?: boolean }) => (
  <Card className={`relative border ${popular ? "ring-2 ring-primary shadow-xl scale-105" : "hover:shadow-lg"} transition-all duration-300`}>
    {popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 gradient-primary text-primary-foreground text-xs rounded-full font-semibold">Most Popular</div>}
    <CardContent className="pt-8 pb-6">
      <h3 className="font-heading font-bold text-xl mb-1">{title}</h3>
      <div className="mb-6"><span className="text-3xl font-heading font-bold">{price}</span><span className="text-muted-foreground text-sm">/{period}</span></div>
      <ul className="space-y-2 mb-6">
        {features.map(f => <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />{f}</li>)}
      </ul>
      <Link to="/contact"><Button className={`w-full ${popular ? "gradient-primary text-primary-foreground border-0" : ""}`} variant={popular ? "default" : "outline"}>{title === "Corporate" ? "Contact Sales" : popular ? "Start Premium" : "Get Started"}</Button></Link>
    </CardContent>
  </Card>
);

export default Index;

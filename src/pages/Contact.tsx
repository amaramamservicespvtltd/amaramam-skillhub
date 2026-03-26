import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { CONTACT } from "@/lib/constants";

const Contact = () => (
  <Layout>
    <section className="gradient-hero text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
        <p className="text-lg opacity-90">We'd love to hear from you. Get in touch today!</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-heading font-bold mb-6">Get In Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div><div className="font-semibold">Address</div><div className="text-muted-foreground">{CONTACT.address}</div></div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div><div className="font-semibold">Phone</div><a href={CONTACT.phoneLink} className="text-muted-foreground hover:text-primary">{CONTACT.phone}</a></div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div><div className="font-semibold">Email</div><a href={CONTACT.emailLink} className="text-muted-foreground hover:text-primary">{CONTACT.email}</a></div>
              </div>
            </div>
          </div>
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <h3 className="font-heading font-bold text-xl mb-4">Send us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2.5 rounded-lg border bg-background" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2.5 rounded-lg border bg-background" />
                <input type="tel" placeholder="Your Phone" className="w-full px-4 py-2.5 rounded-lg border bg-background" />
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2.5 rounded-lg border bg-background resize-none" />
                <Button className="w-full gradient-primary text-primary-foreground border-0 font-semibold">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;

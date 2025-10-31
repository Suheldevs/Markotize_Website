import { Target, Brain, MessageSquare, Users, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Target,
    title: "DigiFuse 🎯",
    tagline: "Complete marketing integration (SEO, ads, analytics)",
    link: "/services/digifuse",
  },
  {
    icon: Brain,
    title: "BrandElevate 🧠",
    tagline: "Branding & identity (logo, design system)",
    link: "/services/brandelevate",
  },
  {
    icon: MessageSquare,
    title: "LeadMatrix 💬",
    tagline: "Lead generation & performance marketing",
    link: "/contact",
  },
  {
    icon: Users,
    title: "SocialAura 🌍",
    tagline: "Social media growth & community building",
    link: "/contact",
  },
  {
    icon: Code,
    title: "WebCore 💻",
    tagline: "Web development & digital experience",
    link: "/contact",
  },
];

export function D2CServices() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            D2C Services — Powering Digital Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end digital solutions to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={index} to={service.link}>
                <Card
                  className="group relative overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-card/50 backdrop-blur-sm animate-fade-in-up h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.tagline}</p>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

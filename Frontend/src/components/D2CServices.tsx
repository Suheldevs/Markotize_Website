import { Rocket, Share2, BarChart3, Globe, Monitor, Layers, Store } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const d2cSolutions = [
  {
    icon: Rocket,
    title: "Digital Marketing",
    tagline: "Expand your digital reach with effective campaigns",
    link: "/solutions/digital-marketing",
  },
  {
    icon: Share2,
    title: "Brand Promotion",
    tagline: "Build a strong online brand identity",
    link: "/solutions/brand-promotion",
  },
  {
    icon: BarChart3,
    title: "Lead Generation",
    tagline: "Drive targeted customer leads efficiently",
    link: "/solutions/lead-generation",
  },
  {
    icon: Globe,
    title: "Social Media Marketing",
    tagline: "Engage audiences across all social channels",
    link: "/solutions/social-media-marketing",
  },
  {
    icon: Monitor,
    title: "Web Development",
    tagline: "Build responsive and high-performing websites",
    link: "/solutions/web-development",
  },
  {
    icon: Layers,
    title: "App Development",
    tagline: "Create scalable Android & iOS apps",
    link: "/solutions/app-development",
  },
  // {
  //   icon: Store,
  //   title: "E-commerce Development",
  //   tagline: "Launch your own online selling platform",
  //   link: "/solutions/ecommerce-development",
  // },
];

export function D2CServices() {
  return (
    <section className="py-24  bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
       <div className="text-center space-y-4 mb-16 animate-fade-in-up"> <h2 className="text-4xl md:text-5xl font-bold"> D2C Services — Powering Digital Transformation </h2> <p className="text-xl text-muted-foreground max-w-2xl mx-auto"> End-to-end digital solutions to transform your business </p> </div>
        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {d2cSolutions.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={index} to={service.link} className="group h-full">
                <Card
                  className="relative overflow-hidden border border-border/60 hover:border-primary/70 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/60 backdrop-blur-md group-hover:-translate-y-1 h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="flex flex-col items-start space-y-3">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold tracking-tight">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.tagline}
                    </p>
                  </CardContent>

                  {/* Bottom Animated Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { marketplaceNavItems } from "@/data/Marketplace.data.js";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Store, Globe, Share2 } from "lucide-react";

export default function Marketplace() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-background">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 z-0" />

      {/* Hero Section */}
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="px-4 py-1.5 text-sm">
            Marketplace Solutions
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground/70 pb-4">
            Scale Your Business Across India's Top Marketplaces
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Unlock seamless integration and professional management service for Amazon, Flipkart, Myntra, IndiaMart, Justdial and more. Our team accelerates your growth where your customers already shop.
          </p>
          <div className="flex justify-center mt-8 gap-4">
            <Button size="lg" className="px-7">Get Started</Button>
            <Button size="lg" variant="outline">Talk to Expert</Button>
          </div>
        </div>
      </div>

      {/* Marketplace Listing Grid */}
      <div className="container mx-auto px-6 relative z-10 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Our <span className="text-primary">Marketplace Services</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mt-2">
            Choose from tailored solutions for every major Indian marketplace—maximize reach, conversions, and operational efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketplaceNavItems.map((item, idx) => {
            const IconComponent = item.icon === "Store" ? Store : (
              item.icon === "Globe" ? Globe : Share2
            );
            return (
              <Card 
                key={item.path}
                className="bg-card/80 border hover:shadow-2xl group transition-all overflow-hidden"
              >
                <CardContent className="p-6 flex flex-col h-full justify-between">
                  <div className="flex items-center mb-4">
                    <div className="rounded-xl bg-primary/15 p-3 mr-2">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <span className="font-medium text-primary text-lg">
                      {item.title}
                    </span>
                  </div>
                  {/* Replace with real optimized images if available */}
                  <div className="mb-4">
                    <img src={`/images/marketplace/${item.title.toLowerCase().split(" ")[0]}-service.jpg`}
                      alt={item.title}
                      className="rounded-xl w-full h-36 object-cover bg-muted/10 group-hover:scale-[1.05] transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">{item.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <a 
                      href={item.path}
                      className="text-primary font-semibold hover:underline transition"
                    >
                      View Details
                    </a>
                    <Badge variant="outline">Active</Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Advantages Section */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h3 className="text-2xl font-bold">Why Choose Our Marketplace Team?</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-muted-foreground text-lg">
            <li className="flex gap-3 items-start pt-2">
              <Store className="w-6 h-6 text-primary" /> 1-on-1 account management & onboarding
            </li>
            <li className="flex gap-3 items-start pt-2">
              <Globe className="w-6 h-6 text-primary" /> India’s top marketplace coverage
            </li>
            <li className="flex gap-3 items-start pt-2">
              <Share2 className="w-6 h-6 text-primary" /> End-to-end operations & support
            </li>
            <li className="flex gap-3 items-start pt-2">
              <Store className="w-6 h-6 text-primary" /> Data-driven growth for your store
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      {/* Final CTA */}
      <div className="container mx-auto px-6 pb-24 pt-10 relative z-10 flex flex-col items-center">
        <h3 className="text-3xl font-bold mb-2 text-center">Ready to grow your marketplace?</h3>
        <p className="text-muted-foreground mb-6 text-center">Get in touch or request a free demo. No upfront fee – instant expert help for scaling your business.</p>
        <Button size="lg" className="px-8">Request a Demo</Button>
      </div>
    </section>
  );
}

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Rocket, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function B2CLaunchPad() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6 animate-fade-in">
              <Rocket className="h-12 w-12 text-primary" />
              <h1 className="text-5xl font-bold">LaunchPad</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up">
              Perfect for businesses starting their digital journey. Get everything you need to launch your online presence.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold">What's Included</h2>
                <ul className="space-y-4">
                  {[
                    "Professional website design",
                    "Mobile-responsive layout",
                    "Basic SEO optimization",
                    "Contact form integration",
                    "Social media setup",
                    "Google Analytics integration",
                    "1 month of support",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/50 rounded-xl p-8 animate-fade-in-up">
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-2">Starting at</div>
                  <div className="text-4xl font-bold">$2,999</div>
                  <div className="text-sm text-muted-foreground">one-time fee</div>
                </div>
                <Link to="/contact">
                  <Button size="lg" className="w-full group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="border-t border-border pt-12">
              <h2 className="text-3xl font-bold mb-8">Perfect For</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-2">Startups</h3>
                  <p className="text-sm text-muted-foreground">
                    Launch your MVP quickly and professionally
                  </p>
                </div>
                <div className="p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-2">Small Businesses</h3>
                  <p className="text-sm text-muted-foreground">
                    Establish your online presence
                  </p>
                </div>
                <div className="p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-2">Entrepreneurs</h3>
                  <p className="text-sm text-muted-foreground">
                    Start your digital journey right
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

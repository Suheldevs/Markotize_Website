import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Brain, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function D2CBrandElevate() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6 animate-fade-in">
              <Brain className="h-12 w-12 text-primary" />
              <h1 className="text-5xl font-bold">BrandElevate</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up">
              Professional branding and identity services including logo design, brand guidelines, and complete design systems.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold">What's Included</h2>
                <ul className="space-y-4">
                  {[
                    "Brand strategy & positioning",
                    "Logo design (3 concepts)",
                    "Color palette & typography",
                    "Brand guidelines document",
                    "Business card & stationery",
                    "Social media templates",
                    "Brand asset library",
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
                  <div className="text-4xl font-bold">$3,999</div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

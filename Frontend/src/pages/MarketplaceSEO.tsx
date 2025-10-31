import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function MarketplaceSEO() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6 animate-fade-in">
              <Search className="h-12 w-12 text-primary" />
              <h1 className="text-5xl font-bold">SEO Optimization Package</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up">
              Ready-to-deploy SEO solution to improve your search rankings and organic traffic.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold">What's Included</h2>
                <ul className="space-y-4">
                  {[
                    "SEO audit & strategy",
                    "Keyword research",
                    "On-page optimization",
                    "Technical SEO fixes",
                    "Content optimization",
                    "Link building strategy",
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
                  <div className="text-sm text-muted-foreground mb-2">Price</div>
                  <div className="text-4xl font-bold">$1,999</div>
                  <div className="text-sm text-muted-foreground">one-time</div>
                </div>
                <Link to="/contact">
                  <Button size="lg" className="w-full group">
                    Purchase Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

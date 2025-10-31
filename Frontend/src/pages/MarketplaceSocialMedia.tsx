import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Share2, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function MarketplaceSocialMedia() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6 animate-fade-in">
              <Share2 className="h-12 w-12 text-primary" />
              <h1 className="text-5xl font-bold">Social Media Management</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up">
              Complete social media management package for growing your online presence.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold">What's Included</h2>
                <ul className="space-y-4">
                  {[
                    "3 platforms management",
                    "20 posts per month",
                    "Content creation",
                    "Community management",
                    "Monthly analytics report",
                    "Strategy consultation",
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
                  <div className="text-4xl font-bold">$1,499</div>
                  <div className="text-sm text-muted-foreground">per month</div>
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

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function B2CScaleX() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6 animate-fade-in">
              <TrendingUp className="h-12 w-12 text-primary" />
              <h1 className="text-5xl font-bold">ScaleX</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up">
              Achieve complete digital dominance and ROI with enterprise-grade solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold">What's Included</h2>
                <ul className="space-y-4">
                  {[
                    "Full-funnel marketing automation",
                    "Enterprise SEO & content hub",
                    "Multi-channel advertising strategy",
                    "Custom CRM integration",
                    "Advanced analytics & BI dashboards",
                    "Marketing team augmentation",
                    "Dedicated account manager",
                    "12 months premium support",
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
                  <div className="text-4xl font-bold">$15,999</div>
                  <div className="text-sm text-muted-foreground">per month</div>
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
                  <h3 className="font-bold mb-2">Enterprises</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete digital transformation
                  </p>
                </div>
                <div className="p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-2">Market Leaders</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintain competitive advantage
                  </p>
                </div>
                <div className="p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-2">High-Growth</h3>
                  <p className="text-sm text-muted-foreground">
                    Scale rapidly with confidence
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

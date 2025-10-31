import { Button } from "@/components/ui/button";
import { Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Marketplace() {
  return (
    <section id="marketplace" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border-2 border-border bg-card/50 backdrop-blur-sm p-12 md:p-16 animate-fade-in">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Package className="h-8 w-8 text-primary" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold">Marketplace</h2>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Browse pre-built digital packages and tools to grow your business
                instantly.
              </p>

              <div className="pt-4">
                <Link to="/marketplace/seo">
                  <Button size="lg" className="group">
                    Explore Marketplace
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-muted-foreground">
                Ready-to-use solutions for every business need
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

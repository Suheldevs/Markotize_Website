import { useParams, Link } from "react-router-dom";
import { getB2CServiceBySlug } from "@/data/B2CSolutions.data.js";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { RequestDemoModal } from "@/components/RequestDemoModal";
import { 
  CheckCircle2, ArrowRight, Sparkles, TrendingUp, 
  Shield, Clock, Star, ChevronRight, Play, Zap, Check
} from "lucide-react";
import * as LucideIcons from "lucide-react";

export default function B2CSolutionDetail() {
  const { slug } = useParams();
  const data = getB2CServiceBySlug(slug);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState("monthly");

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-3">
          <Sparkles className="w-12 h-12 text-muted-foreground mx-auto" />
          <h2 className="text-xl font-bold">Package Not Found</h2>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    );
  }

  const IconComponent = LucideIcons[data.icon] || LucideIcons.Rocket;

  const getPricePerMonth = (cycle) => {
    const prices = {
      monthly: parseInt(data.pricing.monthly.replace(/[^0-9]/g, '')),
      quarterly: parseInt(data.pricing.quarterly.replace(/[^0-9]/g, '')) / 3,
      halfYearly: parseInt(data.pricing.halfYearly.replace(/[^0-9]/g, '')) / 6,
      annually: parseInt(data.pricing.annually.replace(/[^0-9]/g, '')) / 12,
    };
    return Math.round(prices[cycle]);
  };

  return (
    <div className="relative min-h-screen bg-background">
      
      {/* Minimal Background */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[size:32px_32px]" />
      </div>

      {/* Hero Section - Compact */}
      <section className="relative pt-20 pb-10">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Breadcrumb */}
          {/* <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6 max-w-7xl mx-auto">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/solutions" className="hover:text-primary">B2C</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">{data.title}</span>
          </div> */}

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Left: Content */}
            <div className="space-y-5">
              
              {/* Badge */}
              <Badge variant="secondary" className="px-3 py-1 text-xs font-semibold">
                <Zap className="w-3 h-3 mr-1.5 inline" />
                {data.subtitle}
              </Badge>

              {/* Title */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                  {data.title}
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {data.description}
                </p>
              </div>

              {/* Ideal For */}
              <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                <Shield className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-muted-foreground mb-0.5">PERFECT FOR</div>
                  <div className="text-sm font-bold">{data.idealFor}</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button 
                  size="default" 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="gap-2 shadow-lg"
                >
                  <Play className="w-4 h-4" />
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button 
                  size="default" 
                  variant="outline"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Pricing
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="font-medium">No Setup Fee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span className="font-medium">48hr Setup</span>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg">
                <img 
                  src={data.image} 
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                    <IconComponent className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Compact */}
      <section className="py-10 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <Badge variant="outline" className="px-3 py-1 text-xs">
                <Sparkles className="w-3 h-3 mr-1.5 inline" />
                What's Included
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-black">
                Key <span className="text-primary">Features</span>
              </h2>
              <p className="text-sm text-muted-foreground">
                Everything you need to grow your business
              </p>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.features.map((feature, index) => {
                const FeatureIcon = LucideIcons[feature.icon] || LucideIcons.Sparkles;
                
                return (
                  <Card 
                    key={index}
                    className="group hover:shadow-lg hover:border-primary/30 transition-all"
                  >
                    <CardContent className="p-5 space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <FeatureIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-base font-bold group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Minimal */}
      <section id="pricing" className="py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Header */}
            <div className="text-center space-y-3">
              <Badge variant="outline" className="px-3 py-1 text-xs">
                <Star className="w-3 h-3 mr-1.5 inline" />
                Flexible Pricing
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black">
                Choose Your <span className="text-primary">Plan</span>
              </h2>
              <p className="text-sm text-muted-foreground">
                Save more with longer commitments
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center">
              <div className="inline-flex gap-1 p-1 rounded-xl bg-muted border">
                {[
                  { key: "monthly", label: "Monthly" },
                  { key: "quarterly", label: "Quarterly", badge: data.pricing.savings.quarterly },
                  { key: "halfYearly", label: "Half Yearly", badge: data.pricing.savings.halfYearly },
                  { key: "annually", label: "Yearly", badge: data.pricing.savings.annually, popular: true }
                ].map((option) => (
                  <button
                    key={option.key}
                    onClick={() => setBillingCycle(option.key)}
                    className={`relative px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      billingCycle === option.key
                        ? "bg-primary text-primary-foreground shadow"
                        : "hover:bg-background"
                    }`}
                  >
                    {option.label}
                    {option.badge && billingCycle !== option.key && (
                      <span className="absolute -top-1 -right-1 text-[9px] font-black bg-green-500 text-white px-1.5 py-0.5 rounded-full">
                        -{option.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  
                  {/* Price */}
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-black">
                          ₹{getPricePerMonth(billingCycle).toLocaleString('en-IN')}
                        </span>
                        <div className="text-muted-foreground">
                          <div className="text-lg font-bold">/mo</div>
                          {billingCycle !== "monthly" && (
                            <div className="text-xs">
                              Billed {billingCycle === "quarterly" ? "quarterly" : billingCycle === "halfYearly" ? "half-yearly" : "yearly"}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {billingCycle !== "monthly" && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                          <Sparkles className="w-3 h-3 text-green-600" />
                          <span className="text-green-600 font-semibold text-xs">
                            Save {data.pricing.savings[billingCycle]}
                          </span>
                        </div>
                      )}

                      {billingCycle !== "monthly" && (
                        <div className="text-sm text-muted-foreground">
                          Total: <span className="font-bold text-foreground">{data.pricing[billingCycle]}</span>
                        </div>
                      )}
                    </div>

                    <Button 
                      size="lg" 
                      onClick={() => setIsDemoModalOpen(true)}
                      className="w-full gap-2 shadow-lg"
                    >
                      <TrendingUp className="w-4 h-4" />
                      Start {data.title}
                      <ArrowRight className="w-4 h-4" />
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      No credit card • 48hr setup • Cancel anytime
                    </p>
                  </div>

                  {/* Included */}
                  <div className="space-y-4">
                    <h3 className="text-base font-bold">What's Included:</h3>
                    <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                      {data.included.map((item, index) => (
                        <div 
                          key={index}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guarantee */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/5 border border-green-500/20">
                <Shield className="w-5 h-5 text-green-600" />
                <div className="text-left">
                  <div className="font-bold text-sm">30-Day Money-Back Guarantee</div>
                  <div className="text-xs text-muted-foreground">Full refund, no questions asked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Minimal */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-black">
                Ready to <span className="text-primary">Grow</span>?
              </h2>
              <p className="text-sm text-muted-foreground">
                Join 1000+ businesses growing with us
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button 
                size="lg" 
                onClick={() => setIsDemoModalOpen(true)}
                className="gap-2 shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
              >
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <RequestDemoModal
        open={isDemoModalOpen}
        onOpenChange={setIsDemoModalOpen}
      />
    </div>
  );
}

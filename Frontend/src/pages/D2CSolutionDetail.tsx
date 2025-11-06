import { useParams, Link } from "react-router-dom";
import { getD2CServiceBySlug } from "@/data/D2CSolutions.data.js";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { RequestDemoModal } from "@/components/RequestDemoModal";
import { 
  CheckCircle2, ArrowRight, Sparkles, TrendingUp, 
  Shield, Clock, Star, ChevronRight, Play, Zap
} from "lucide-react";
import * as LucideIcons from "lucide-react";

export default function D2CSolutionDetail() {
  const { slug } = useParams();
  const data = getD2CServiceBySlug(slug);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <Sparkles className="w-12 h-12 text-muted-foreground mx-auto" />
          <h2 className="text-2xl font-bold">Service Not Found</h2>
          <Button onClick={() => window.history.back()}>
            <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = LucideIcons[data.icon] || LucideIcons.Rocket;

  return (
    <div className="relative min-h-screen bg-background">
      
      {/* Subtle Background */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[size:32px_32px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Breadcrumb */}
          {/* <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6 max-w-6xl mx-auto">
            <Link to="/solutions" className="hover:text-primary">Solutions</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">{data.title}</span>
          </div> */}

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Left: Content */}
            <div className="space-y-5">
              
              {/* Icon + Badge */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                  <IconComponent className="w-7 h-7 text-primary-foreground" />
                </div>
                <Badge variant="secondary" className="px-3 py-1 text-xs font-semibold">
                  <Zap className="w-3 h-3 mr-1.5 inline" />
                  D2C Solution
                </Badge>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                  {data.title}
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {data.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button 
                  size="default" 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="gap-2 shadow-lg"
                >
                  <Play className="w-4 h-4" />
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button 
                  size="default" 
                  variant="outline"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Features
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4 text-xs pt-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="font-medium">500+ Brands</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">100% Satisfaction</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span className="font-medium">24/7 Support</span>
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <Badge variant="outline" className="px-3 py-1 text-xs">
                <Sparkles className="w-3 h-3 mr-1.5 inline" />
                Core Capabilities
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-black">
                Powerful <span className="text-primary">Features</span>
              </h2>
              <p className="text-sm text-muted-foreground">
                Everything you need to dominate your market
              </p>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.features.map((feature, index) => {
                const FeatureIcon = LucideIcons[feature.icon] || LucideIcons.Sparkles;
                
                return (
                  <Card 
                    key={index}
                    className="group hover:shadow-lg hover:border-primary/30 transition-all"
                  >
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <FeatureIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-1.5">
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

      <Separator />

      {/* Process Section */}
      <section id="process" className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <Badge variant="outline" className="px-3 py-1 text-xs">
                Our Methodology
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-black">
                How We <span className="text-primary">Deliver</span>
              </h2>
              <p className="text-sm text-muted-foreground">
                Our proven 4-step process ensures results
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {data.processSteps.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Step Number */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-xl font-black text-primary-foreground">
                        {step.step}
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold">{step.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            Step {step.step}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Benefits Section */}
      <section id="benefits" className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <Badge variant="outline" className="px-3 py-1 text-xs">
                Why Choose Us
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-black">
                Key <span className="text-primary">Benefits</span>
              </h2>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.benefits.map((benefit, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all">
                        <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <p className="text-sm font-medium leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-10 border-t">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <h3 className="text-lg font-bold">Technologies We Use</h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {data.technologies.map((tech, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Pricing Section */}
      <section id="pricing" className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <Badge variant="outline" className="px-3 py-1 text-xs">
                Flexible Plans
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-black">
                Choose Your <span className="text-primary">Package</span>
              </h2>
              <p className="text-sm text-muted-foreground">
                Transparent pricing that scales with your business
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-5">
              {Object.entries(data.pricing).map(([tier, price], index) => {
                const isPopular = tier === "growth";
                
                return (
                  <Card 
                    key={tier}
                    className={`relative hover:shadow-lg transition-all ${
                      isPopular ? "border-primary border-2 shadow-md scale-105" : ""
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="px-3 py-1 shadow-lg">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardContent className="p-6 text-center space-y-4">
                      <div>
                        <h3 className="text-lg font-bold capitalize mb-1">{tier}</h3>
                        <div className="text-2xl font-black text-primary">
                          {/* {price} */}
                           2000
                        </div>
                      </div>
                      
                      <Button 
                        size="default" 
                        onClick={() => setIsDemoModalOpen(true)}
                        variant={isPopular ? "default" : "outline"}
                        className="w-full"
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-black">
                Ready to <span className="text-primary">Transform</span> Your Business?
              </h2>
              <p className="text-sm text-muted-foreground">
                Join 500+ successful brands who chose our expertise
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button 
                size="lg" 
                onClick={() => setIsDemoModalOpen(true)}
                className="gap-2 shadow-lg"
              >
                <TrendingUp className="w-4 h-4" />
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              ✨ Free consultation • No credit card • Setup in 48 hours
            </p>
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

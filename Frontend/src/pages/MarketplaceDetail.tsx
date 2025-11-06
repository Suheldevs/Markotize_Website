import { useParams } from "react-router-dom";
import { marketplaceServices, getServiceBySlug } from "@/data/Marketplace.data.js";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { RequestDemoModal } from "@/components/RequestDemoModal";
import { 
  CheckCircle2, ArrowRight, Sparkles, TrendingUp, 
  Shield, Clock, Users as UsersIcon, Star 
} from "lucide-react";
import * as LucideIcons from "lucide-react";

export default function MarketplaceDetail() {
  const { slug } = useParams();
  const data = getServiceBySlug(slug);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-muted-foreground">Service Not Found</h2>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    );
  }

  const IconComponent = LucideIcons[data.icon] || LucideIcons.Store;

  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20">
              <IconComponent className="w-10 h-10 text-primary" />
            </div>

            {/* Title & Description */}
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium">
                <Sparkles className="w-3 h-3 mr-1.5 inline" />
                Professional Management Services
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">
                {data.title}
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => setIsDemoModalOpen(true)}
                className="gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                Get Started Now
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Features
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Verified Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-500" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <Badge variant="outline" className="px-3 py-1">
                Core Services
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Everything You Need to <span className="text-primary">Succeed</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive features designed to maximize your marketplace performance and drive measurable growth
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.features.map((feature, index) => {
                const FeatureIcon = LucideIcons[feature.icon] || LucideIcons.Package;
                return (
                  <Card 
                    key={index} 
                    className="group hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <FeatureIcon className="w-6 h-6" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          #{index + 1}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
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

      {/* Process Steps Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <Badge variant="outline" className="px-3 py-1">
                Our Methodology
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                How We <span className="text-primary">Deliver Results</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our proven step-by-step process ensures smooth onboarding and sustained growth
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-8">
              {data.processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-lg">
                          {step.step}
                        </div>
                        {index < data.processSteps.length - 1 && (
                          <div className="hidden md:block absolute top-20 left-1/2 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-transparent -translate-x-1/2" />
                        )}
                      </div>
                    </div>

                    {/* Step Content */}
                    <Card className="flex-1 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-semibold">
                              {step.title}
                            </h3>
                            <Badge variant="secondary">
                              Step {step.step}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <Badge variant="outline" className="px-3 py-1">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Key <span className="text-primary">Benefits</span>
              </h2>
            </div>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {data.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background border hover:border-primary/50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Social Proof Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-8 sm:p-12">
                <div className="grid sm:grid-cols-3 gap-8 text-center">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">50+</div>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">98%</div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">24/7</div>
                    <p className="text-sm text-muted-foreground">Support Available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section (Optional) */}
      {/* <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
              <CardContent className="p-8 sm:p-12 relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg sm:text-xl italic text-muted-foreground mb-6">
                  "Their marketplace management service transformed our online presence. Sales increased by 60% in just 3 months, and the support team is exceptional!"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <UsersIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Verified Seller</div>
                    <div className="text-sm text-muted-foreground">E-commerce Business Owner</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Final CTA Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Ready to <span className="text-primary">Scale Your Business?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Join hundreds of successful sellers who trust us with their marketplace growth
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button 
                size="lg" 
                onClick={() => setIsDemoModalOpen(true)}
                className="gap-2 shadow-xl hover:shadow-2xl transition-all text-lg px-8"
              >
                <TrendingUp className="w-5 h-5" />
                Request Free Demo
              </Button>
              {/* <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
              >
                Talk to Expert
              </Button> */}
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              No credit card required • Free consultation • Setup in 48 hours
            </p>
          </div>
        </div>
      </section>

      {/* Request Demo Modal */}
      <RequestDemoModal
        open={isDemoModalOpen}
        onOpenChange={setIsDemoModalOpen}
      />
    </div>
  );
}

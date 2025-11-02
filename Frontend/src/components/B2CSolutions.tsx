import { Rocket, TrendingUp, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: Rocket,
    title: "LaunchPad 🚀",
    description: "Perfect for businesses starting their digital journey.",
    link: "/solutions/launchpad",
  },
  {
    icon: TrendingUp,
    title: "GrowthEdge 🌟",
    description: "Accelerate brand visibility and performance.",
    link: "/solutions/growthedge",
  },
  {
    icon: BarChart3,
    title: "ScaleX 📈",
    description: "Achieve complete digital dominance and ROI.",
    link: "/solutions/scalex",
  },
];

export function B2CSolutions() {
  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            B2C Solutions — Designed for Every Stage of Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the right solution for your business journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Link key={index} to={solution.link}>
                <Card
                  className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-card/50 backdrop-blur-sm animate-fade-in-up h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-2">
                    <div className="w-12 h-12  rounded-lg bg-primary/10 flex items-center justify-center  group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 dark:text-white text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{solution.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{solution.description}</p>
                    <div className="mt-4 text-primary font-medium flex items-center group">
                      Learn More
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ChevronDown } from "lucide-react";
import { RequestDemoModal } from "./RequestDemoModal";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-foreground">
              Morkotize
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
                  <span>Solutions</span>
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">B2C Solutions</div>
                  <DropdownMenuItem onClick={() => navigate("/solutions/launchpad")}>
                    LaunchPad
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/solutions/growthedge")}>
                    GrowthEdge
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/solutions/scalex")}>
                    ScaleX
                  </DropdownMenuItem>
                  <div className="my-1 h-px bg-border" />
                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">D2C Services</div>
                  <DropdownMenuItem onClick={() => navigate("/services/digifuse")}>
                    DigiFuse
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/services/brandelevate")}>
                    BrandElevate
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
                  <span>Marketplace</span>
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem onClick={() => navigate("/marketplace/seo")}>
                    SEO Optimization
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/marketplace/social-media")}>
                    Social Media Management
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button onClick={() => setIsDemoModalOpen(true)} size="sm">
              Request a Demo
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border animate-fade-in-up">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Home
            </Link>
            <div className="px-4 py-2">
              <div className="text-xs font-semibold text-muted-foreground mb-2">Solutions</div>
              <div className="space-y-1 pl-2">
                <Link
                  to="/solutions/launchpad"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  LaunchPad
                </Link>
                <Link
                  to="/solutions/growthedge"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  GrowthEdge
                </Link>
                <Link
                  to="/solutions/scalex"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  ScaleX
                </Link>
              </div>
            </div>
            <div className="px-4 py-2">
              <div className="text-xs font-semibold text-muted-foreground mb-2">Marketplace</div>
              <div className="space-y-1 pl-2">
                <Link
                  to="/marketplace/seo"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  SEO Optimization
                </Link>
                <Link
                  to="/marketplace/social-media"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  Social Media
                </Link>
              </div>
            </div>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Contact
            </Link>
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsDemoModalOpen(true);
              }}
              size="sm"
              className="w-full mt-2"
            >
              Request a Demo
            </Button>
          </div>
        )}
      </div>
      <RequestDemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </nav>
  );
}

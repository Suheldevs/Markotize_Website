import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import {
  Menu,
  X,
  ChevronDown,
  Rocket,
  Store,
  Globe,
  Layers,
  Monitor,
  Users,
  Palette,
  BarChart3,
  Share2,
} from "lucide-react";
import { RequestDemoModal } from "./RequestDemoModal";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null); 
  const [hoverDropdown, setHoverDropdown] = useState(null); 

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

const menuItems = {
  solutions: {
    leftHeadline: "D2C Solutions",
    left: [
      {
        icon: Rocket,
        title: "Digital Marketing",
        desc: "Expand your digital reach with effective campaigns",
        path: "/solutions/digital-marketing",
      },
      {
        icon: Share2,
        title: "Brand Promotion",
        desc: "Build a strong online brand identity",
        path: "/solutions/brand-promotion",
      },
      {
        icon: BarChart3,
        title: "Lead Generation",
        desc: "Drive targeted customer leads efficiently",
        path: "/solutions/lead-generation",
      },
      {
        icon: Globe,
        title: "Social Media Marketing",
        desc: "Engage audiences across all social channels",
        path: "/solutions/social-media-marketing",
      },
      {
        icon: Monitor,
        title: "Web Development",
        desc: "Build responsive and high-performing websites",
        path: "/solutions/web-development",
      },
      {
        icon: Layers,
        title: "App Development",
        desc: "Create scalable Android & iOS apps",
        path: "/solutions/app-development",
      },
      {
        icon: Store,
        title: "E-commerce Development",
        desc: "Launch your own online selling platform",
        path: "/solutions/ecommerce-development",
      },
    ],
    rightHeadline: "B2C Solutions",
    right: [
      {
        icon: Rocket,
        title: "LaunchPad (Basic Services)",
        desc: "Ideal for startups to begin their digital journey",
        path: "/solutions/b2c/launchpad",
      },
      {
        icon: BarChart3,
        title: "GrowthEdge (Advanced Services)",
        desc: "Grow your online business strategically",
        path: "/solutions/b2c/growthedge",
      },
      {
        icon: Layers,
        title: "ScaleX (Premium Services)",
        desc: "Accelerate your brand with complete automation",
        path: "/solutions/b2c/scalex",
      },
    ],
  },

  marketplace: {
    leftHeadline: "Marketplace Solutions",
    left: [
      {
        icon: Store,
        title: "Myntra Seller Management",
        desc: "Optimize your sales on Myntra marketplace",
        path: "/marketplace/myntra-seller-management",
      },
      {
        icon: Store,
        title: "Flipkart Seller Management",
        desc: "Enhance visibility and operations on Flipkart",
        path: "/marketplace/flipkart-seller-management",
      },
      {
        icon: Store,
        title: "Amazon Seller Management",
        desc: "Boost your Amazon store performance",
        path: "/marketplace/amazon-seller-management",
      },
      {
        icon: Globe,
        title: "IndiaMart Seller Management",
        desc: "Manage and grow your IndiaMart presence",
        path: "/marketplace/indiamart-seller-management",
      },
      {
        icon: Share2,
        title: "Justdial Seller Management",
        desc: "Handle and track your Justdial business listings",
        path: "/marketplace/justdial-seller-management",
      },
    ],
  },
};


  const MegaMenu = ({ id, title, data }) => (
    <div
      className="relative hidden md:block"
      onMouseEnter={() => setHoverDropdown(id)}
      onMouseLeave={() => setHoverDropdown(null)}
    >
      <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <span>{title}</span>
        <ChevronDown className="h-3 w-3" />
      </button>

      {hoverDropdown === id && (
        <div className={`absolute top-full left-0 ${data?.right ? "w-[600px] grid grid-cols-2":"w-[300px]"} bg-background border border-border rounded-xl shadow-lg  p-4 animate-fade-in-up`}>
          {/* Left Column */}
          <div>
            <div className="text-xs font-semibold text-muted-foreground mb-2 px-2">
             {data?.leftHeadline}
            </div>
            {data?.left.map(({ icon: Icon, title, desc, path }) => (
              <button
                key={title}
                onClick={() => navigate(path)}
                className="flex items-start space-x-3 group rounded-md p-2  w-full text-left transition"
              >
                <Icon className="h-9 w-11 border dark:group-hover:bg-white group-hover:bg-black px-1 py-2 rounded dark:text-white text-primary group-hover:text-white dark:group-hover:text-black" />
                <div>
                  <div className="text-sm font-medium">{title}</div>
                  <div className="text-xs dark:group-hover:text-white text-muted-foreground">{desc}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column */}
          {data?.right && (
            
          
          <div>
            <div className="text-xs font-semibold text-muted-foreground mb-2 px-2">
              {data?.rightHeadline}
            </div>
            {data?.right.map(({ icon: Icon, title, desc, path }) => (
              <button
                key={title}
                onClick={() => navigate(path)}
                className="flex items-start space-x-3 group rounded-md p-2 h w-full text-left transition"
              >
                <Icon className="h-9 w-11 border dark:group-hover:bg-white group-hover:bg-black px-1 py-2 rounded dark:text-white text-primary group-hover:text-white dark:group-hover:text-black" />
                <div>
                  <div className="text-sm font-medium">{title}</div>
                  <div className="text-xs group-hover:text-white text-muted-foreground">{desc}</div>
                </div>
              </button>
            ))}
          </div>
          )}
        </div>
      )}
    </div>
  );

  const MobileDropdown = ({ id, title, data }) => (
    <div className="md:hidden">
      <button
        onClick={() => toggleMobileDropdown(id)}
        className="flex justify-between w-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            openDropdown === id ? "rotate-180" : ""
          }`}
        />
      </button>

      {openDropdown === id && (
        <div className="pl-6 py-2 space-y-2">
          {[...data?.left, ...(data?.right || [])].map(({ icon: Icon, title, path }) => (
            <Link
              key={title}
              to={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-2 py-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <Icon className="h-4 w-4 text-primary" />
              <span>{title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border"
          : "md:bg-transparent bg-background/90"
      }`}
    >
      <div className="container mx-auto lg:px-8 px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-xl flex justify-center items-center font-bold text-foreground"
            >
              <img src={logo} className="h-10 md:h-12 dark:bg-none rounded-lg bg-blue-800 mr-2" alt="Logo" /> Morkotize
            </Link>

            {/* Desktop Menus */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>

              <MegaMenu id="solutions" title="Solutions" data={menuItems?.solutions} />
              <MegaMenu
                id="marketplace"
                title="Marketplace"
                data={menuItems?.marketplace}
              />

              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button onClick={() => setIsDemoModalOpen(true)} size="sm">
              Request a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border animate-fade-in-up">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition"
            >
              Home
            </Link>

            {/* Dropdowns */}
            <MobileDropdown
              id="solutions"
              title="Solutions"
              data={menuItems.solutions}
            />
            <MobileDropdown
              id="marketplace"
              title="Marketplace"
              data={menuItems.marketplace}
            />

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition"
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

      <RequestDemoModal
        open={isDemoModalOpen}
        onOpenChange={setIsDemoModalOpen}
      />
    </nav>
  );
}

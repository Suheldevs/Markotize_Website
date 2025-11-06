import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-gradient-to-b from-background/70 to-muted/40 backdrop-blur-sm relative overflow-hidden">
      <div className="container mx-auto px-4 pt-12 pb-4 lg:px-10 ">
        {/* === Top Section === */}
        <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-10 mb-6">
          {/* Brand Info */}
          <div className="space-y-4 col-span-2">
          <Link
              to="/"
              className="text-xl flex  items-center font-bold text-foreground"
            >
              <img src={logo} className="h-12 dark:bg-none rounded-lg bg-blue-800 mr-2" alt="Logo" /> Morkotize
            </Link> <p className="text-muted-foreground max-w-md"> Empowering digital journeys with innovative B2C and D2C solutions. </p>
          <div className="flex items-center space-x-3">
            {[
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Mail, href: "mailto:hello@morkotize.com", label: "Email" },
            ].map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-white-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          </div>

          {/* D2C Solutions */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-foreground">D2C Solutions</h4>
            <ul className="space-y-2">
              {[
                { title: "Digital Marketing", path: "/solutions/digital-marketing" },
                { title: "Brand Promotion", path: "/solutions/brand-promotion" },
                { title: "Lead Generation", path: "/solutions/lead-generation" },
                { title: "Social Media Marketing", path: "/solutions/social-media-marketing" },
                { title: "Web Development", path: "/solutions/web-development" },
                { title: "App Development", path: "/solutions/app-development" },
                { title: "E-commerce Development", path: "/solutions/ecommerce-development" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* B2C Solutions */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-foreground">B2C Solutions</h4>
            <ul className="space-y-2">
              {[
                { title: "LaunchPad (Basic Service)", path: "/solutions/b2c/launchpad" },
                { title: "GrowthEdge (Advanced Service)", path: "/solutions/b2c/growthedge" },
                { title: "ScaleX (Premium Service)", path: "/solutions/b2c/scalex" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketplace */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-foreground">Marketplace</h4>
            <ul className="space-y-2">
              {[
                { title: "Myntra Seller Management", path: "/marketplace/myntra-seller-management" },
                { title: "Flipkart Seller Management", path: "/marketplace/flipkart-seller-management" },
                { title: "Amazon Seller Management", path: "/marketplace/amazon-seller-management" },
                { title: "IndiaMart Seller Management", path: "/marketplace/indiamart-seller-management" },
                { title: "Justdial Seller Management", path: "/marketplace/justdial-seller-management" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* === Bottom Section === */}
        <div className="text-center items-center border-t border-border pt-4">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {year} <span className="font-semibold text-foreground">Morkotize</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

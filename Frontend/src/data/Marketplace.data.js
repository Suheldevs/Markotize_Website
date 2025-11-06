import { 
  Store, Globe, Share2, Settings, TrendingUp, BarChart, 
  Package, DollarSign, Users, UserCheck, Image, Megaphone, 
  CreditCard, Layers, MessageSquare, Award, ShoppingBag, 
  Target, Truck, Star, Briefcase, Building, FileText, 
  Mail, Search, BarChart2, HeadphonesIcon, MapPin, Phone, 
  Camera, Zap, PieChart 
} from 'lucide-react';


export const marketplaceServices = {
  "amazon-seller-management": {
    slug: "amazon-seller-management",
    title: "Amazon Seller Management",
    shortDesc: "Boost your Amazon store performance with data-driven optimization",
    description: "Maximize your Amazon potential with our comprehensive seller account management services. We provide end-to-end solutions including listing optimization, advertising campaigns, inventory management, and performance tracking to scale your business on the world's largest e-commerce platform.",
    icon: "Store", 
    image: "/images/marketplace/amazon-service.jpg",
    bgImage: "/images/marketplace/amazon-bg.jpg",
    path: "/marketplace/amazon-seller-management",
    
    features: [
      {
        icon: "Settings",
        title: "Account Management",
        desc: "Complete Amazon Seller Central management including account setup, product listings optimization, inventory tracking, and order fulfillment handling with real-time performance monitoring."
      },
      {
        icon: "TrendingUp",
        title: "Advertising & SEO",
        desc: "Strategic PPC campaigns, sponsored product ads, keyword research, and product listing SEO to enhance discoverability, improve rankings, and maximize ROI on advertising spend."
      },
      {
        icon: "BarChart",
        title: "Performance Tracking",
        desc: "Monitor critical KPIs including sales metrics, conversion rates, customer feedback, account health scores, and Buy Box performance with detailed analytics and actionable insights."
      },
      {
        icon: "Package",
        title: "FBA Management",
        desc: "End-to-end Fulfillment by Amazon (FBA) setup and optimization, including inventory planning, shipping coordination, storage management, and handling customer returns efficiently."
      },
      {
        icon: "DollarSign",
        title: "Pricing Strategy",
        desc: "Dynamic pricing optimization using competitor analysis, market trends, and demand forecasting to maintain competitive advantage while maximizing profit margins."
      },
      {
        icon: "Users",
        title: "Customer Service",
        desc: "Professional handling of customer inquiries, feedback management, review monitoring, negative review resolution, and maintaining high seller ratings for brand reputation."
      }
    ],

    processSteps: [
      {
        step: 1,
        title: "Onboarding & Analysis",
        desc: "Understand your business goals, analyze current performance, audit existing listings, and identify growth opportunities with comprehensive market research."
      },
      {
        step: 2,
        title: "Strategy Development",
        desc: "Create customized action plan including product listing strategy, pricing models, advertising roadmap, and inventory management protocols tailored to your category."
      },
      {
        step: 3,
        title: "Optimization & Launch",
        desc: "Optimize product listings with SEO-rich content, high-quality images, enhanced brand content (A+ content), launch targeted PPC campaigns, and implement marketing strategies."
      },
      {
        step: 4,
        title: "Monitor & Scale",
        desc: "Continuously track performance metrics, A/B test listings, refine advertising campaigns, manage inventory levels, and scale successful strategies for sustained growth."
      }
    ],

    benefits: [
      "Increase sales revenue by 40-60% within first quarter",
      "Improve product visibility and organic rankings",
      "Reduce advertising cost per acquisition (ACoS)",
      "Maintain 100% account health score",
      "Get dedicated account manager from Amazon experts",
      "Access to exclusive data-driven insights and reports"
    ]
  },

  "flipkart-seller-management": {
    slug: "flipkart-seller-management",
    title: "Flipkart Seller Management",
    shortDesc: "Enhance visibility and operations on Flipkart marketplace",
    description: "Grow your business on India's leading e-commerce platform with our expert Flipkart account management services. From seller registration to advertising campaigns, we handle end-to-end operations including cataloging, payment reconciliation, and customer service to boost your sales.",
    icon: "Store",
    image: "/images/marketplace/flipkart-service.jpg",
    bgImage: "/images/marketplace/flipkart-bg.jpg",
    path: "/marketplace/flipkart-seller-management",
    
    features: [
      {
        icon: "UserCheck",
        title: "Account Setup & Management",
        desc: "Complete seller registration, GST verification, catalog onboarding, and ongoing account management with dedicated support to ensure smooth operations and compliance."
      },
      {
        icon: "Image",
        title: "Cataloging & Imaging",
        desc: "Professional product cataloging with high-quality images, detailed descriptions, accurate specifications, and category mapping to enhance product appeal and conversion rates."
      },
      {
        icon: "Megaphone",
        title: "Advertising Solutions",
        desc: "Flipkart Ads management including sponsored products, display ads, category sponsorships, and performance marketing campaigns to increase product visibility and sales."
      },
      {
        icon: "CreditCard",
        title: "Payment Reconciliation",
        desc: "Accurate payment tracking, settlement reconciliation, commission calculations, returns processing, and financial reporting to maintain transparent cash flow management."
      },
      {
        icon: "Layers",
        title: "Inventory & Fulfillment",
        desc: "Strategic inventory planning, stock level monitoring, Flipkart Assured coordination, shipping management, and quality control to ensure timely order fulfillment."
      },
      {
        icon: "MessageSquare",
        title: "Customer Support",
        desc: "Handle customer queries, manage returns and replacements, monitor seller ratings, resolve disputes, and maintain excellent customer satisfaction scores."
      }
    ],

    processSteps: [
      {
        step: 1,
        title: "Registration & Setup",
        desc: "Complete seller registration with document verification, GST setup, bank account linking, and initial catalog upload following Flipkart guidelines."
      },
      {
        step: 2,
        title: "Catalog Optimization",
        desc: "Optimize product listings with keyword-rich titles, detailed descriptions, high-resolution images, competitive pricing, and proper categorization for maximum visibility."
      },
      {
        step: 3,
        title: "Marketing & Promotion",
        desc: "Launch targeted advertising campaigns, participate in Flipkart sales events (Big Billion Days), create deals and offers, and implement promotional strategies."
      },
      {
        step: 4,
        title: "Performance Management",
        desc: "Monitor sales analytics, track advertising ROI, manage inventory turnover, handle customer feedback, and continuously optimize for growth and profitability."
      }
    ],

    benefits: [
      "Access to 500+ million registered Flipkart customers",
      "Participate in exclusive Flipkart sale events",
      "Get Flipkart Assured badge for premium visibility",
      "Dedicated account manager for seller support",
      "Integrated logistics and fulfillment solutions",
      "Real-time analytics and performance dashboards"
    ]
  },

  "myntra-seller-management": {
    slug: "myntra-seller-management",
    title: "Myntra Seller Management",
    shortDesc: "Optimize your fashion & lifestyle sales on Myntra",
    description: "Dominate the fashion marketplace with our specialized Myntra seller services. We help fashion and lifestyle brands register, optimize listings, manage inventory, and grow sales on India's #1 fashion e-commerce platform with expert guidance and comprehensive account management.",
    icon: "Store",
    image: "/images/marketplace/myntra-service.jpg",
    bgImage: "/images/marketplace/myntra-bg.jpg",
    path: "/marketplace/myntra-seller-management",
    
    features: [
      {
        icon: "Award",
        title: "Seller Registration",
        desc: "Complete seller onboarding with brand verification, GST and PAN registration, Aadhaar authentication, catalog approval, and compliance with Myntra's quality standards."
      },
      {
        icon: "ShoppingBag",
        title: "Catalog Management",
        desc: "Professional product listing with fashion-focused photography, detailed size charts, style descriptions, fabric information, and seasonal trend alignment for better conversions."
      },
      {
        icon: "Target",
        title: "Brand Promotion",
        desc: "Strategic brand positioning through paid campaigns, banner ads, influencer collaborations, seasonal promotions, and participation in Myntra fashion events and sales."
      },
      {
        icon: "Truck",
        title: "Warehouse & Logistics",
        desc: "Inventory planning for fashion cycles, demand forecasting, warehouse coordination, quality checks, packaging standards, and efficient order processing and shipping."
      },
      {
        icon: "Star",
        title: "Quality Control",
        desc: "Maintain Myntra's quality standards with product authenticity verification, regular quality audits, returns management, and customer satisfaction monitoring."
      },
      {
        icon: "Briefcase",
        title: "Account Management",
        desc: "Dedicated account support for performance optimization, policy compliance, dispute resolution, payment tracking, and strategic growth planning for fashion brands."
      }
    ],

    processSteps: [
      {
        step: 1,
        title: "Brand Verification",
        desc: "Submit brand documents, complete registration with PAN and GST, choose seller model (Channel Partner or Aggregate), and get brand approval from Myntra team."
      },
      {
        step: 2,
        title: "Product Listing",
        desc: "Upload fashion catalog with professional images, create compelling product descriptions, set pricing strategy, add size variants, and complete quality check process."
      },
      {
        step: 3,
        title: "Marketing Launch",
        desc: "Launch brand store, create promotional campaigns, participate in EORS (End of Reason Sale), leverage Myntra Insider program, and build brand visibility."
      },
      {
        step: 4,
        title: "Growth & Scaling",
        desc: "Analyze fashion trends, optimize inventory for seasons, manage customer reviews, track sales performance, and scale winning products with data-driven insights."
      }
    ],

    benefits: [
      "Reach 50+ million fashion-conscious shoppers",
      "Zero setup cost for seller registration",
      "Fashion design and trend support from Myntra",
      "Minimum return rate assurance for quality products",
      "Complete marketing handled by Myntra team",
      "Payment within 15 days after order completion"
    ]
  },

  "indiamart-seller-management": {
    slug: "indiamart-seller-management",
    title: "IndiaMart Seller Management",
    shortDesc: "Manage and grow your B2B presence on IndiaMart",
    description: "Expand your B2B business with India's largest online B2B marketplace. Our IndiaMart management services help manufacturers, suppliers, and traders optimize their listings, generate quality leads, manage buyer inquiries, and convert opportunities into long-term business relationships.",
    icon: "Globe",
    image: "/images/marketplace/indiamart-service.jpg",
    bgImage: "/images/marketplace/indiamart-bg.jpg",
    path: "/marketplace/indiamart-seller-management",
    
    features: [
      {
        icon: "Building",
        title: "Company Profile Setup",
        desc: "Create compelling company profiles with business verification, GST integration, product catalog setup, certifications upload, and professional presentation to attract B2B buyers."
      },
      {
        icon: "FileText",
        title: "Product Listing Optimization",
        desc: "Optimize product listings with industrial specifications, bulk pricing, MOQ details, technical data sheets, and keyword-rich descriptions for better search visibility."
      },
      {
        icon: "Mail",
        title: "Lead Management",
        desc: "Efficient handling of buyer inquiries, lead verification, quotation management, follow-up coordination, and CRM integration for maximum lead conversion rates."
      },
      {
        icon: "Search",
        title: "SEO & Visibility",
        desc: "Strategic keyword optimization, category selection, product tagging, competitive analysis, and featured listing management to rank higher in B2B searches."
      },
      {
        icon: "BarChart2",
        title: "Performance Analytics",
        desc: "Track buyer views, inquiry statistics, catalog performance, product popularity, lead quality metrics, and ROI measurement with comprehensive reporting dashboards."
      },
      {
        icon: "HeadphonesIcon",
        title: "Buyer Communication",
        desc: "Professional handling of buyer queries, technical discussions, pricing negotiations, sample requests, and relationship building for repeat business opportunities."
      }
    ],

    processSteps: [
      {
        step: 1,
        title: "Business Onboarding",
        desc: "Register as seller with GST and business documents, choose membership plan (Free/Paid), verify company credentials, and set up complete business profile."
      },
      {
        step: 2,
        title: "Catalog Development",
        desc: "Create comprehensive product catalog with industrial images, technical specifications, pricing structures, packaging details, and delivery terms for B2B buyers."
      },
      {
        step: 3,
        title: "Lead Generation",
        desc: "Optimize listings for lead generation, activate paid promotions, participate in IndiaMart events, leverage TrustSEAL certification, and boost profile visibility."
      },
      {
        step: 4,
        title: "Conversion & Growth",
        desc: "Manage incoming leads efficiently, respond promptly to inquiries, track conversion metrics, build buyer relationships, and scale business with data insights."
      }
    ],

    benefits: [
      "Access to 140+ million registered B2B buyers",
      "Generate 1000+ quality business inquiries monthly",
      "TrustSEAL certification for credibility boost",
      "Mobile app for instant lead notifications",
      "Industry-specific trade shows and exhibitions",
      "Dedicated relationship manager for support"
    ]
  },

  "justdial-seller-management": {
    slug: "justdial-seller-management",
    title: "Justdial Seller Management",
    shortDesc: "Handle and track your Justdial business listings",
    description: "Enhance your local business visibility with India's leading local search platform. Our Justdial management services help businesses optimize their listings, handle customer reviews, manage inquiries, and leverage Justdial's massive user base to drive foot traffic and online conversions.",
    icon: "Share2",
    image: "/images/marketplace/justdial-service.jpg",
    bgImage: "/images/marketplace/justdial-bg.jpg",
    path: "/marketplace/justdial-seller-management",
    
    features: [
      {
        icon: "MapPin",
        title: "Business Listing Setup",
        desc: "Complete business registration with accurate NAP (Name, Address, Phone), category selection, service area mapping, operating hours, and verified business information."
      },
      {
        icon: "Star",
        title: "Review Management",
        desc: "Monitor customer reviews and ratings, respond to feedback professionally, handle negative reviews strategically, encourage positive reviews, and maintain high reputation scores."
      },
      {
        icon: "Phone",
        title: "Call & Inquiry Tracking",
        desc: "Track incoming calls and inquiries from Justdial, measure lead quality, analyze customer behavior, optimize response times, and improve conversion rates."
      },
      {
        icon: "Camera",
        title: "Media Optimization",
        desc: "Upload high-quality business photos, showcase products/services, create virtual tours, add promotional videos, and update gallery regularly for better engagement."
      },
      {
        icon: "Zap",
        title: "Premium Placement",
        desc: "Leverage Justdial's paid advertising options including JD Mart, JD Prime, featured listings, banner ads, and priority placement for maximum local visibility."
      },
      {
        icon: "PieChart",
        title: "Analytics & Insights",
        desc: "Access detailed analytics on profile views, call volumes, inquiry patterns, customer demographics, peak engagement times, and competitor benchmarking data."
      }
    ],

    processSteps: [
      {
        step: 1,
        title: "Profile Creation",
        desc: "Register business on Justdial with complete details, verify contact information, add business category, upload logo and images, and complete profile optimization."
      },
      {
        step: 2,
        title: "Content Enhancement",
        desc: "Optimize business description with keywords, add service details, upload portfolio images, create compelling offers, and ensure all information is accurate and updated."
      },
      {
        step: 3,
        title: "Visibility Boost",
        desc: "Activate paid promotions for higher rankings, participate in Justdial offers, encourage customer reviews, maintain listing freshness, and leverage local SEO strategies."
      },
      {
        step: 4,
        title: "Lead Conversion",
        desc: "Monitor incoming inquiries, track call metrics, respond promptly to customer queries, measure ROI from Justdial leads, and optimize listing based on performance."
      }
    ],

    benefits: [
      "Reach 160+ million active Justdial users monthly",
      "Get instant notification for customer inquiries",
      "Verified business badge for trust building",
      "Local SEO advantage for nearby customers",
      "Multi-location listing management support",
      "Direct integration with call tracking systems"
    ]
  }
};

// Helper function to get service by slug
export const getServiceBySlug = (slug) => {
  return marketplaceServices[slug] || null;
};

// Get all services as array
export const getAllServices = () => {
  return Object.values(marketplaceServices);
};

// Navigation menu data
export const marketplaceNavItems = [
  { 
    icon: "Store",
    title: "Myntra Seller Management",
    desc: "Optimize your sales on Myntra marketplace",
    path: "/marketplace/myntra-seller-management",
  },
  {
    icon: "Store",
    title: "Flipkart Seller Management",
    desc: "Enhance visibility and operations on Flipkart",
    path: "/marketplace/flipkart-seller-management",
  },
  {
    icon: "Store",
    title: "Amazon Seller Management",
    desc: "Boost your Amazon store performance",
    path: "/marketplace/amazon-seller-management",
  },
  {
    icon: "Globe",
    title: "IndiaMart Seller Management",
    desc: "Manage and grow your IndiaMart presence",
    path: "/marketplace/indiamart-seller-management",
  },
  {
    icon: "Share2",
    title: "Justdial Seller Management",
    desc: "Handle and track your Justdial business listings",
    path: "/marketplace/justdial-seller-management",
  },
];

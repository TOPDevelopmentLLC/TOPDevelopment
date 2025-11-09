export interface WebsiteBuild {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface AddOn {
  name: string;
  price: string;
}

export interface MaintenancePlan {
  name: string;
  price: string;
  annualPrice: string;
  features: string[];
  popular?: boolean;
}

export const websiteBuilds: WebsiteBuild[] = [
  {
    name: "Simple Landing Page",
    price: "$1,000 - $1,500",
    description: "Perfect for startups and small projects",
    features: [
      "1-3 pages (Home, About, Contact)",
      "Responsive Design",
      "Contact Form with Email Notifications",
      "Optimized Images",
      "< 3 second load times",
      "SEO Basics",
      "Hosting Setup",
      "Domain Setup",
      "Design Revisions (3 rounds)",
    ],
  },
  {
    name: "Small Business Site",
    price: "$3,000 - $4,000",
    description: "Comprehensive solution for small businesses",
    features: [
      "Everything from Simple Landing Page",
      "5-10 pages",
      "Dynamic Drawer Menu",
      "Contact Us Forms",
      "Service Inquiry Forms",
      "Newsletter Signup Forms",
      "CMS Plugin",
      "Custom CMS",
      "Google Maps Integration",
      "Design Revisions (5 rounds)",
    ],
    popular: true,
  },
  {
    name: "Advanced/Custom Site",
    price: "$5,000 - $15,000",
    description: "Feature-rich applications",
    features: [
      "Everything from Small Business Website",
      "10-25 pages with complex architecture",
      "User Authentication",
      "User Dashboards/Profiles",
      "Advanced Search/Filtering",
      "API Integrations",
      "Document Management System",
      "Unlimited Custom forms",
      "CRM Integration (HubSpot, Salesforce, etc)",
      "Payment Processing (Stripe/PayPal)",
      "Social Media API Integrations",
    ],
  },
  {
    name: "Enterprise Site",
    price: "$15,000 - $75,000",
    description: "Large-scale enterprise solutions",
    features: [
      "Multi-Site architecture or site network",
      "Complex database architecture",
      "Advanced API development",
      "Real-time features (notifications/live updates)",
      "Data visualization and custom reporting",
      "Document generation (invoices, contracts, reports)",
      "ERP systems (SAP, Oracle, NetSuite)",
      "CRM (Salesforce, Microsoft Dynamics)",
      "Custom legacy system integrations",
      "HR systems integration",
      "Microservices architecture",
      "Auto-scaling infrastructure",
      "Load balancing",
      "Staging/prod environments",
      "Monthly strategy calls",
    ],
  },
  {
    name: "E-Commerce Site",
    price: "$7,500 - $40,000",
    description: "Full-featured online store",
    features: [
      "Up to 500 SKUs (+$500 for every 100 SKUs after 500)",
      "Product Category/Details Pages",
      "Cart/Checkout Pages",
      "Shipping/Returns Policy Pages",
      "Blog Pages",
      "Real-time inventory tracking",
      "Low stock alerts",
      "Order processing and status updates",
      "Order history",
      "Wishlist",
      "Email notifications",
      "Customer reviews and ratings",
      "Newsletter signup",
      "Gift card functionality",
      "Stripe/PayPal Integration",
      "Tax Calculation (TaxJar Integration)",
      "Shipping Calculator",
      "International Shipping Support",
      "Guest Checkout",
      "Design Revisions (5 rounds)",
    ],
  },
];

export const addOns: AddOn[] = [
  { name: "Additional Support Hours", price: "$100/hour" },
  { name: "Live-chat Integration", price: "$500" },
  { name: "Advanced Animations", price: "$1,000" },
  { name: "Appointment Booking", price: "$1,000" },
  { name: "Member Portal", price: "$2,000" },
  { name: "Custom Admin Panel", price: "$2,000" },
  { name: "Loyalty/Rewards", price: "$2,000" },
  { name: "Mobile Application", price: "$2,000+" },
  { name: "Multi-Currency Support", price: "$2,500" },
  { name: "Subscriptions/Recurring Payments", price: "$2,500" },
  { name: "Third-Party API Development", price: "$4,000" },
  { name: "Multi-Vendor Marketplace", price: "$7,500" },
];

export const maintenancePlans: MaintenancePlan[] = [
  {
    name: "Essentials Only",
    price: "$50/month",
    annualPrice: "$510/annually",
    features: [
      "AWS Hosting",
      "Security Monitoring",
      "Monthly Uptime Reports",
      "2 Hours of Minor Updates/Support per month",
      "SSL Certificate Management",
    ],
  },
  {
    name: "Basic",
    price: "$100/month",
    annualPrice: "$1,080/annually",
    features: [
      "Everything in Essentials Only",
      "5 Hours of Minor Updates/Support per month",
      "Plugin/Dependency Updates",
      "Monthly Security Scans",
      "Monthly Performance Optimization",
      "Google Analytics",
    ],
    popular: true,
  },
  {
    name: "Professional",
    price: "$300/month",
    annualPrice: "$3,240/annually",
    features: [
      "Everything in Basic",
      "10 Hours of Minor Updates/Support per month",
      "Priority Email Support",
      "Quarterly Strategy Consulting",
      "Bi-Weekly Security Scans",
      "Bi-Weekly Performance Optimization",
    ],
  },
  {
    name: "Enterprise",
    price: "$600 - $2,500/month",
    annualPrice: "$6,120 - $25,500/annually",
    features: [
      "Everything in Professional",
      "24/7 Security Monitoring",
      "25+ Hours of Development Support per month",
      "A/B Testing Implementation",
      "Scalability Planning",
      "Infrastructure Optimization",
      "Disaster Recovery Planning",
      "Monthly Strategy Consulting",
    ],
  },
];

import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";
import { CircuitBackground } from "../CircuitBackground";

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const websiteBuilds = [
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

  const addOns = [
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

  const maintenancePlans = [
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

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <CircuitBackground />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <Badge className="mb-4 bg-[#ea2320]/10 border-[#ea2320]/30 text-[#ea2320]">
            Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl text-white mb-4">
            Transparent, Flexible Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the package that fits your needs. All pricing is transparent with no hidden fees.
          </p>
        </div>
      </section>

      {/* Website Builds */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-4">Website Development</h2>
            <p className="text-gray-400">Complete website solutions from landing pages to enterprise platforms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteBuilds.map((tier, index) => (
              <Card
                key={index}
                className={`bg-white/5 border-white/10 p-6 flex flex-col ${
                  tier.popular ? "border-[#ea2320] relative" : ""
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ea2320] text-white">
                    Most Popular
                  </Badge>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                  <div className="text-3xl text-[#ea2320]">{tier.price}</div>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#ea2320] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => onNavigate("contact")}
                  className={`w-full ${
                    tier.popular
                      ? "bg-[#ea2320] hover:bg-[#c91e1b] text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-4">Simple Add-ons</h2>
            <p className="text-gray-400">Enhance your website with additional features</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {addOns.map((addon, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:border-[#ea2320]/50 transition-all p-4"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white">{addon.name}</span>
                  <span className="text-[#ea2320]">{addon.price}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Support */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-4">Maintenance & Support</h2>
            <p className="text-gray-400">Keep your website secure, updated, and performing at its best</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenancePlans.map((plan, index) => (
              <Card
                key={index}
                className={`bg-white/5 border-white/10 p-6 flex flex-col ${
                  plan.popular ? "border-[#ea2320] relative" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ea2320] text-white">
                    Most Popular
                  </Badge>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl text-white mb-2">{plan.name}</h3>
                  <div className="text-2xl text-[#ea2320] mb-1">{plan.price}</div>
                  <div className="text-sm text-gray-400">{plan.annualPrice}</div>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#ea2320] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => onNavigate("contact")}
                  className={`w-full ${
                    plan.popular
                      ? "bg-[#ea2320] hover:bg-[#c91e1b] text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  Choose Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#ea2320]/20 to-transparent border border-[#ea2320]/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              Need a Custom Quote?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Every project is unique. Contact us for a personalized quote tailored to your specific requirements.
            </p>
            <Button
              onClick={() => onNavigate("contact")}
              className="bg-[#ea2320] hover:bg-[#c91e1b] text-white px-8 py-6"
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

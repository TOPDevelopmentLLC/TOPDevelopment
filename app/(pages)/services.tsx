import {
  CheckCircle2,
  Cloud,
  Code,
  Database,
  MessageSquare,
  Search,
  Shield,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { CircuitBackground } from "../../components/layout/CircuitBackground";
import { Badge } from "../../components/data/badge";
import { Button } from "../../components/buttons/button";
import { Card } from "../../components/layout/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/navigation/tabs";
import { router } from "expo-router";

const Services = () => {
  const [activeTab, setActiveTab] = useState("web");

  const serviceCategories = [
    { value: "web", label: "Web Development", icon: Code },
    { value: "mobile", label: "Mobile Apps", icon: Smartphone },
    { value: "backend", label: "Backend", icon: Database },
    { value: "seo", label: "SEO", icon: Search },
    { value: "infrastructure", label: "Infrastructure", icon: Cloud },
    { value: "consultation", label: "Consultation", icon: MessageSquare },
  ];

  const serviceDetails = {
    web: {
      title: "Web Development",
      subtitle: "Build powerful, responsive web applications",
      features: [
        "Custom React & React Native Applications",
        "Mobile-friendly Web Pages",
        "E-commerce Solutions",
        "Content Management Systems",
        "API Integration",
        "Responsive Design",
      ],
      useCases: [
        {
          title: "E-Commerce Platforms",
          description: "Full-featured online stores with payment processing, inventory management, and customer portals",
        },
        {
          title: "SaaS Applications",
          description: "Scalable software-as-a-service platforms with user management and subscription billing",
        },
        {
          title: "Corporate Websites",
          description: "Professional business websites with CMS integration and SEO optimization",
        },
      ],
    },
    mobile: {
      title: "Mobile Development",
      subtitle: "Native and cross-platform mobile experiences",
      features: [
        "iOS & Android Development",
        "React Native Applications",
        "Cross-Platform Solutions",
        "App Store Deployment",
        "Push Notifications",
        "Offline Functionality",
      ],
      useCases: [
        {
          title: "Consumer Apps",
          description: "Feature-rich mobile applications for iOS and Android with seamless user experiences",
        },
        {
          title: "Enterprise Mobility",
          description: "Internal business apps for field operations, inventory, and workforce management",
        },
        {
          title: "Companion Apps",
          description: "Mobile extensions of your web platform for on-the-go access",
        },
      ],
    },
    backend: {
      title: "Backend Development",
      subtitle: "Robust and scalable server-side solutions",
      features: [
        "RESTful API Development",
        "Spring Boot Framework",
        "Database Design & Optimization",
        "Microservices Architecture",
        "Real-time Data Processing",
        "Authentication & Authorization",
      ],
      useCases: [
        {
          title: "API Development",
          description: "Secure, scalable APIs for mobile apps, web platforms, and third-party integrations",
        },
        {
          title: "Data Processing",
          description: "Complex data pipelines and real-time processing systems",
        },
        {
          title: "Integration Services",
          description: "Connect multiple systems and services with custom middleware solutions",
        },
      ],
    },
    seo: {
      title: "SEO Services",
      subtitle: "Increase visibility and drive organic traffic",
      features: [
        "Technical SEO Audit",
        "Keyword Research & Strategy",
        "On-Page Optimization",
        "Performance Optimization",
        "Schema Markup Implementation",
        "Analytics & Reporting",
      ],
      useCases: [
        {
          title: "Local SEO",
          description: "Optimize your presence for local search results and Google Maps",
        },
        {
          title: "E-commerce SEO",
          description: "Product page optimization and structured data for better product visibility",
        },
        {
          title: "Technical SEO",
          description: "Core Web Vitals optimization, site speed, and crawlability improvements",
        },
      ],
    },
    infrastructure: {
      title: "Infrastructure Modernization",
      subtitle: "Upgrade and optimize your technology stack",
      features: [
        "AWS Supported Infrastructure",
        "DevOps & CI/CD Pipeline",
        "Auto-scaling Infrastructure",
        "Load Balancing & CDN",
        "Security & Compliance",
        "Disaster Recovery Planning",
      ],
      useCases: [
        {
          title: "Cloud Migration",
          description: "Move legacy applications to modern cloud infrastructure with minimal downtime",
        },
        {
          title: "Performance Optimization",
          description: "Improve application speed and reliability with infrastructure upgrades",
        },
        {
          title: "Cost Optimization",
          description: "Reduce infrastructure costs while maintaining or improving performance",
        },
      ],
    },
    consultation: {
      title: "Consultation Services",
      subtitle: "Expert guidance for your technology decisions",
      features: [
        "Technology Stack Selection",
        "Architecture Design Review",
        "Code Quality Assessment",
        "Scalability Planning",
        "Security Audit",
        "Strategic Roadmap Planning",
      ],
      useCases: [
        {
          title: "Project Planning",
          description: "Define scope, timeline, and technology choices for your next project",
        },
        {
          title: "Code Review",
          description: "Expert analysis of your codebase with actionable recommendations",
        },
        {
          title: "Strategy Sessions",
          description: "Monthly consulting to guide your technology decisions and roadmap",
        },
      ],
    },
  };

  const currentService = serviceDetails[activeTab as keyof typeof serviceDetails];

  const handleNavigate = (page: string) => {
    const pageMap: { [key: string]: string } = {
      'contact': '/contact_us',
      'services': '/services',
      'about': '/about_us',
      'pricing': '/pricing',
      'faq': '/faq',
    };

    const route = pageMap[page];
    if (route) {
      router.push(route as any);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <CircuitBackground />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <Badge className="mb-4 bg-[#ea2320]/10 border-[#ea2320]/30 text-[#ea2320]">
            Services
          </Badge>
          <h1 className="text-4xl md:text-6xl text-white mb-4">
            Comprehensive Development Solutions
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end software development services
          </p>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent h-auto mb-12">
              {serviceCategories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="data-[state=active]:bg-[#ea2320] data-[state=active]:text-white bg-white/5 border border-white/10 py-3"
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(serviceDetails).map(([key, service]) => (
              <TabsContent key={key} value={key} className="space-y-12">
                {/* Service Header */}
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl text-white mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-400">{service.subtitle}</p>
                </div>

                {/* Features Grid */}
                <div>
                  <h3 className="text-2xl text-white mb-6 text-center">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.features.map((feature, index) => (
                      <Card
                        key={index}
                        className="bg-white/5 border-white/10 p-4 flex items-center gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-[#ea2320] flex-shrink-0" />
                        <span className="text-white">{feature}</span>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h3 className="text-2xl text-white mb-6 text-center">Use Cases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.useCases.map((useCase, index) => (
                      <Card
                        key={index}
                        className="bg-gradient-to-br from-white/5 to-white/0 border-white/10 hover:border-[#ea2320]/50 transition-all p-6"
                      >
                        <h4 className="text-xl text-white mb-3">{useCase.title}</h4>
                        <p className="text-gray-400">{useCase.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-white mb-12 text-center">Why Choose TOP Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/5 border-white/10 p-8 text-center">
              <Zap className="h-12 w-12 text-[#ea2320] mx-auto mb-4" />
              <h3 className="text-xl text-white mb-3">AI-Powered Speed</h3>
              <p className="text-gray-400">
                Leverage cutting-edge AI tools to build and deploy faster than traditional methods
              </p>
            </Card>
            <Card className="bg-white/5 border-white/10 p-8 text-center">
              <Shield className="h-12 w-12 text-[#ea2320] mx-auto mb-4" />
              <h3 className="text-xl text-white mb-3">Quality Assurance</h3>
              <p className="text-gray-400">
                Rigorous testing and quality control ensure reliable, production-ready solutions
              </p>
            </Card>
            <Card className="bg-white/5 border-white/10 p-8 text-center">
              <TrendingUp className="h-12 w-12 text-[#ea2320] mx-auto mb-4" />
              <h3 className="text-xl text-white mb-3">Scalable Solutions</h3>
              <p className="text-gray-400">
                Built to grow with your business, from startup to enterprise scale
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#ea2320]/20 to-transparent border border-[#ea2320]/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get in touch to discuss your requirements and receive a detailed proposal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleNavigate("contact")}
                className="bg-[#ea2320] hover:bg-[#c91e1b] text-white px-8 py-6"
              >
                Contact Us
              </Button>
              <Button
                onClick={() => handleNavigate("pricing")}
                variant="outline"
                className="border-white/20 hover:bg-white/5 text-white px-8 py-6"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

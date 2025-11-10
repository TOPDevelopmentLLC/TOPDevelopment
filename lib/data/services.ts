export interface ServiceCategory {
  value: string;
  label: string;
  icon: string;
}

export interface UseCase {
  title: string;
  description: string;
}

export interface ServiceDetail {
  title: string;
  subtitle: string;
  features: string[];
  useCases: UseCase[];
}

export interface ServiceDetailsMap {
  web: ServiceDetail;
  mobile: ServiceDetail;
  backend: ServiceDetail;
  seo: ServiceDetail;
  infrastructure: ServiceDetail;
  consultation: ServiceDetail;
}

export const serviceCategories: ServiceCategory[] = [
  { value: 'web', label: 'Web Development', icon: 'code' },
  { value: 'mobile', label: 'Mobile Apps', icon: 'smartphone' },
  { value: 'backend', label: 'Backend', icon: 'storage' },
  { value: 'seo', label: 'SEO', icon: 'search' },
  { value: 'infrastructure', label: 'Infrastructure', icon: 'cloud' },
  { value: 'consultation', label: 'Consultation', icon: 'chat' },
];

export const serviceDetails: ServiceDetailsMap = {
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

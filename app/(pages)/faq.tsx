import { CircuitBackground } from "../../components/layout/CircuitBackground";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/layout/accordion";
import { Badge } from "../../components/data/badge";
import { Button } from "../../components/buttons/button";
import { router } from "expo-router";

const FAQs = () => {
  const faqs = [
    {
      question: "What types of projects does TOP Development LLC specialize in?",
      answer: "We specialize in custom web applications, mobile apps (iOS and Android), backend development, e-commerce platforms, SaaS solutions, infrastructure modernization, and SEO services. Our expertise spans the full stack of modern development.",
    },
    {
      question: "How long does it typically take to build a website?",
      answer: "Project timelines vary based on complexity. A simple landing page takes 2-3 weeks, a small business site takes 4-6 weeks, advanced custom sites take 8-12 weeks, and enterprise solutions can take 3-6 months or more. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes! We offer four maintenance tiers ranging from $50/month to $2,500/month, including hosting, security monitoring, updates, performance optimization, and development support hours. Annual plans are available at discounted rates.",
    },
    {
      question: "Can you work with my existing website or do I need to start from scratch?",
      answer: "We can work with existing websites! We offer infrastructure modernization services to upgrade, optimize, or rebuild your current site. We'll assess your existing platform and recommend the best path forward.",
    },
    {
      question: "What is your development process?",
      answer: "Our process includes: 1) Discovery & Planning - understanding your needs, 2) Design & Architecture - creating wireframes and technical specs, 3) Development - building with modern frameworks and AI tools, 4) Testing & QA - ensuring quality and reliability, 5) Deployment - launching to production, 6) Support - ongoing maintenance and updates.",
    },
    {
      question: "Do you use AI in your development process?",
      answer: "Yes! We leverage cutting-edge AI tools to accelerate development, improve code quality, and deliver projects faster than traditional methods. However, all code is reviewed, tested, and optimized by experienced developers to ensure production-ready quality.",
    },
    {
      question: "What technologies and frameworks do you use?",
      answer: "We work with modern technologies including React, Next.js, Node.js, React Native, AWS, and various databases. We select the best tech stack for each project based on your specific requirements, scalability needs, and long-term goals.",
    },
    {
      question: "Can you help with mobile app development?",
      answer: "Absolutely! We develop native iOS and Android apps as well as cross-platform solutions using React Native. Mobile app development starts at $2,000 and varies based on complexity and features.",
    },
    {
      question: "Do you provide hosting services?",
      answer: "Yes, our maintenance plans include AWS hosting, SSL certificate management, and server monitoring. We handle all technical aspects so you can focus on your business.",
    },
    {
      question: "What if I need changes after my website is launched?",
      answer: "All our maintenance plans include monthly support hours for minor updates. For larger changes or new features, we offer additional development hours at $100/hour or can provide a custom quote for bigger projects.",
    },
    {
      question: "How much does a typical project cost?",
      answer: "Pricing varies widely based on scope: Simple landing pages start at $1,000, small business sites at $3,000, advanced custom sites at $5,000-$15,000, e-commerce at $7,500-$40,000, and enterprise solutions at $15,000-$75,000. Contact us for a detailed quote.",
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment structures. Typically, we require 30-50% upfront, with the remainder split into milestones throughout the project. We can discuss payment options that work for your budget.",
    },
    {
      question: "Can you integrate with third-party services and APIs?",
      answer: "Yes! We regularly integrate with CRMs (Salesforce, HubSpot), payment processors (Stripe, PayPal), ERPs, marketing tools, and custom APIs. Third-party API development is available as an add-on starting at $4,000.",
    },
    {
      question: "Do you provide SEO services?",
      answer: "Yes, we offer comprehensive SEO services including technical SEO audits, keyword research, on-page optimization, performance optimization, schema markup, and analytics setup. SEO is included in our website packages or available as a standalone service.",
    },
    {
      question: "What happens if I'm not satisfied with the design?",
      answer: "All our packages include design revisions (3-5 rounds depending on the tier). We work closely with you throughout the design process to ensure the final product meets your expectations. Your satisfaction is our priority.",
    },
    {
      question: "Can you help migrate my website to a new platform?",
      answer: "Yes! We specialize in infrastructure modernization and can migrate your website to modern hosting, update legacy code, or completely rebuild on a new platform while preserving your content and SEO rankings.",
    },
    {
      question: "Do you sign NDAs and protect confidential information?",
      answer: "Absolutely. We're happy to sign NDAs and take data security seriously. All client information and project details are kept strictly confidential.",
    },
    {
      question: "What if I already built something with AI tools but need help finishing it?",
      answer: "This is one of our specialties! Many entrepreneurs use AI tools to start projects but need professional help to make them production-ready. We can review your code, optimize it, add missing features, and deploy it properly.",
    },
    {
      question: "Do you work with startups and small businesses?",
      answer: "Yes! We work with businesses of all sizes, from startups and solopreneurs to established enterprises. Our flexible pricing and packages are designed to meet various budgets and needs.",
    },
    {
      question: "How do I get started?",
      answer: "Simply contact us through our Contact page or call us directly. We'll schedule a free consultation to discuss your project, understand your needs, and provide a detailed proposal with timeline and pricing. No obligation to proceed.",
    },
  ];

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
            FAQs
          </Badge>
          <h1 className="text-4xl md:text-6xl text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about working with TOP Development LLC
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/5 border border-white/10 rounded-lg px-6 data-[state=open]:border-[#ea2320]/50"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#ea2320] hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#ea2320]/20 to-transparent border border-[#ea2320]/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Get in touch with our team and we'll be happy to help.
            </p>
            <Button
              onClick={() => handleNavigate("contact")}
              className="bg-[#ea2320] hover:bg-[#c91e1b] text-white px-8 py-6"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;

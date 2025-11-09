import { Cpu, Globe, Smartphone, Server, Search, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { CircuitBackground } from "../CircuitBackground";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and AI-powered development",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Scalable backend solutions with robust APIs and database architecture",
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Optimize your digital presence and increase visibility in search results",
    },
    {
      icon: Cpu,
      title: "Infrastructure Modernization",
      description: "Upgrade and optimize your existing infrastructure for better performance",
    },
    {
      icon: Users,
      title: "Consultation Services",
      description: "Expert guidance to help you navigate your technology decisions",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <CircuitBackground />
        <div className="container mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-block px-4 py-2 bg-[#ea2320]/10 border border-[#ea2320]/30 rounded-full mb-4">
              <span className="text-[#ea2320]">Founded in 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl text-white">
              Redefining Software Development
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Utilizing AI to create websites and mobile apps faster than our competitors, 
              with seamless UI interfaces and comprehensive infrastructure support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                onClick={() => onNavigate("contact")}
                className="bg-[#ea2320] hover:bg-[#c91e1b] text-white px-8 py-6 text-lg"
              >
                Get Started
              </Button>
              <Button
                onClick={() => onNavigate("services")}
                variant="outline"
                className="border-white/20 hover:bg-white/5 text-white px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <CircuitBackground />
        <div className="container mx-auto px-4 z-10 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive software development solutions to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:border-[#ea2320]/50 transition-all duration-300 p-6 group cursor-pointer"
                onClick={() => onNavigate("services")}
              >
                <service.icon className="h-12 w-12 text-[#ea2320] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#ea2320]/20 to-transparent border border-[#ea2320]/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you build solutions that make things easier
            </p>
            <Button
              onClick={() => onNavigate("contact")}
              className="bg-[#ea2320] hover:bg-[#c91e1b] text-white px-8 py-6 text-lg"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

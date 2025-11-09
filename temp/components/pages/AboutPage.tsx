import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { CircuitBackground } from "../CircuitBackground";
import { Target, Lightbulb, Users, Award } from "lucide-react";
import { Button } from "../ui/button";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Target,
      title: "Problem-Focused",
      description: "We prioritize solving real problems with practical, lasting solutions",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging AI and modern frameworks to deliver faster without compromising quality",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build solutions tailored to your unique needs",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to delivering high-quality, scalable, and maintainable code",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <CircuitBackground />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <Badge className="mb-4 bg-[#ea2320]/10 border-[#ea2320]/30 text-[#ea2320]">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-6xl text-white mb-4">
            Building Solutions That Matter
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Founded in 2025, driven by passion, powered by innovation
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-white mb-4">Our Story</h2>
            </div>
            
            <Card className="bg-white/5 border-white/10 p-8 md:p-12">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                TOP Development LLC was founded in September 2025 out of a passion for software 
                development and a drive to solve meaningful problems. What began as an unexpected 
                journey—starting in Pre-Law before realizing that path wasn't the right fit—turned 
                into a pursuit of creating solutions that truly matter.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                That realization led to a move to Florida, where I attended Full Sail University and 
                earned an Associate's Degree in Mobile Development. Over time, my skills expanded 
                beyond mobile into web, backend, and DevOps, allowing me to build across the full 
                stack of modern development.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, TOP Development LLC is built on that same foundation of curiosity, adaptability, 
                and commitment to delivering impactful software.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 relative">
        <CircuitBackground />
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-white mb-4">Our Mission</h2>
            </div>
            
            <Card className="bg-gradient-to-br from-[#ea2320]/10 to-transparent border-[#ea2320]/30 p-8 md:p-12">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At TOP Development LLC, our mission is simple: solve real problems with practical 
                and lasting solutions. We take the time to analyze your unique needs, then design 
                strategies that fit—not just for today, but for the future.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                By modernizing infrastructure and leveraging modern frameworks, we create solutions 
                that are efficient, scalable, and built to grow with you. Our goal is to deliver 
                technology that empowers, streamlines, and makes a meaningful difference.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-4">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide every project and partnership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:border-[#ea2320]/50 transition-all p-6 text-center"
              >
                <value.icon className="h-12 w-12 text-[#ea2320] mx-auto mb-4" />
                <h3 className="text-xl text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-[#ea2320] mb-2">2025</div>
              <div className="text-gray-400">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-[#ea2320] mb-2">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-[#ea2320] mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-[#ea2320] mb-2">∞</div>
              <div className="text-gray-400">Possibilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#ea2320]/20 to-transparent border border-[#ea2320]/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              Let's Build Something Great Together
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Ready to start your project? Get in touch and let's discuss how we can help you achieve your goals.
            </p>
            <Button
              onClick={() => onNavigate("contact")}
              className="bg-[#ea2320] hover:bg-[#c91e1b] text-white px-8 py-6"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

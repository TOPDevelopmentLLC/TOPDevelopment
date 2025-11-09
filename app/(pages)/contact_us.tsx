import axios from 'axios';
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { CircuitBackground } from "../../components/layout/CircuitBackground";
import { Badge } from "../../components/data/badge";
import { Button } from "../../components/buttons/button";
import { Card } from "../../components/layout/card";
import { Input } from "../../components/forms/input";
import { Label } from "../../components/forms/label";
import { Textarea } from "../../components/forms/textarea";
import { router } from "expo-router";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      router.push(route);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (formData.name.length === 0) {
      toast.error('Insert Valid Name');
      return;
    }
    if (formData.email.length === 0) {
      toast.error('Insert Valid Email');
      return;
    }
    if (formData.message.length === 0) {
      toast.error('Insert a Message to Send');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        'https://api.thatoneprogrammer.dev/api/v1/email/send',
        {
          to: formData.email,
          textBody: formData.message,
          customerName: formData.name,
          customerPhone: formData.phone,
          customerCompany: formData.company
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': 'ThatOneProgrammerDevelopment.AppAPIKey'
          },
          timeout: 10000 // 10 second timeout
        }
      );

      if (response.status === 200 || response.status === 202) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours.",
        });

        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      }
    } catch (error: any) {
      let errorMessage = 'Failed to send message';

      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request Timeout - Please Try Again';
      } else if (error.response) {
        errorMessage = `Failed to Send Email: ${error.response.status}`;
        console.error('Error response:', error.response.data);
      } else if (error.request) {
        errorMessage = 'No Response from Server';
        console.error('No response received:', error.request);
      } else {
        errorMessage = `Error: ${error.message || 'Cannot Connect'}`;
      }

      toast.error(errorMessage);
      console.error('Request error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <CircuitBackground />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <Badge className="mb-4 bg-[#ea2320]/10 border-[#ea2320]/30 text-[#ea2320]">
            Contact Us
          </Badge>
          <h1 className="text-4xl md:text-6xl text-white mb-4">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your project to life? Get in touch and let's discuss how we can help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-white/5 border-white/10 p-6">
                <Mail className="h-8 w-8 text-[#ea2320] mb-4" />
                <h3 className="text-xl text-white mb-2">Email</h3>
                <a
                  href="mailto:contact@topdevelopment.com"
                  className="text-gray-400 hover:text-[#ea2320] transition-colors"
                >
                  contact@topdevelopment.com
                </a>
              </Card>

              <Card className="bg-white/5 border-white/10 p-6">
                <Phone className="h-8 w-8 text-[#ea2320] mb-4" />
                <h3 className="text-xl text-white mb-2">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-[#ea2320] transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </Card>

              <Card className="bg-white/5 border-white/10 p-6">
                <MapPin className="h-8 w-8 text-[#ea2320] mb-4" />
                <h3 className="text-xl text-white mb-2">Location</h3>
                <p className="text-gray-400">
                  Florida, United States
                </p>
              </Card>

              <Card className="bg-gradient-to-br from-[#ea2320]/10 to-transparent border-[#ea2320]/30 p-6">
                <h3 className="text-xl text-white mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-[#ea2320] flex-shrink-0 mt-0.5" />
                    Response within 24 hours
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-[#ea2320] flex-shrink-0 mt-0.5" />
                    Free consultation call
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-[#ea2320] flex-shrink-0 mt-0.5" />
                    Detailed proposal & timeline
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-[#ea2320] flex-shrink-0 mt-0.5" />
                    No obligation to proceed
                  </li>
                </ul>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/5 border-white/10 p-8">
                <h2 className="text-2xl text-white mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="text-sm text-gray-400">
                    By submitting this form, you agree to our{" "}
                    <button
                      type="button"
                      onClick={() => handleNavigate("contact")}
                      className="text-[#ea2320] hover:underline"
                    >
                      Privacy Policy
                    </button>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ea2320] hover:bg-[#c91e1b] text-white py-6"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              Prefer to explore first?
            </h2>
            <p className="text-gray-400 mb-8">
              Check out our services and pricing to learn more about what we offer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleNavigate("services")}
                variant="outline"
                className="border-white/20 hover:bg-white/5 text-white px-8 py-6"
              >
                View Services
              </Button>
              <Button
                onClick={() => handleNavigate("pricing")}
                variant="outline"
                className="border-white/20 hover:bg-white/5 text-white px-8 py-6"
              >
                See Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

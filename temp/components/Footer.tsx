import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="text-gray-400 hover:text-[#ea2320] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-gray-400 hover:text-[#ea2320] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="text-gray-400 hover:text-[#ea2320] transition-colors"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="text-gray-400 hover:text-[#ea2320] transition-colors"
                >
                  Mobile Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="text-gray-400 hover:text-[#ea2320] transition-colors"
                >
                  Infrastructure
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="text-gray-400 hover:text-[#ea2320] transition-colors"
                >
                  SEO Services
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("pricing")}
                  className="text-gray-400 hover:text-[#ea2320] transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("faqs")}
                  className="text-gray-400 hover:text-[#ea2320] transition-colors"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-gray-400 hover:text-[#ea2320] transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#ea2320] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ea2320] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ea2320] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ea2320] transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Logo & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-4">
          <div className="w-[100px] h-[35px] flex items-center opacity-50">
            <svg viewBox="0 0 100 35" className="w-full h-full">
              <text x="2" y="24" fill="#6b7280" className="text-lg font-bold">
                TOP
              </text>
              <text x="42" y="24" fill="#6b7280" className="text-sm">
                Dev
              </text>
            </svg>
          </div>
          <p className="text-gray-500 text-sm text-center">
            © 2025 TOP Development LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

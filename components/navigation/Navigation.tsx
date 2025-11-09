import topLogo from "figma:asset/f0e34730e26462a89a6bc1107dcbf7294fb6d637.png";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "../temp/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../temp/components/ui/sheet";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", value: "home" },
    { label: "Services", value: "services" },
    { label: "Pricing", value: "pricing" },
    { label: "About Us", value: "about" },
    { label: "FAQs", value: "faqs" },
    { label: "Contact", value: "contact" },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavigation("home")}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img 
            src={topLogo} 
            alt="TOP Development Logo" 
            className="h-12 w-12 md:h-14 md:w-14 object-contain"
          />
          <div className="flex flex-col items-start">
            <span className="text-[#ea2320] font-bold" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "20px", lineHeight: "1.2" }}>
              TOP
            </span>
            <span className="text-white" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "14px", lineHeight: "1.2" }}>
              Development
            </span>
          </div>
        </button>

        {/* Hamburger Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:text-[#ea2320] hover:bg-white/5">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-black border-white/10 px-8">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Navigate to different sections of TOP Development LLC website
            </SheetDescription>
            <div className="flex flex-col gap-6 mt-12">
              {menuItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNavigation(item.value)}
                  className={`text-left text-xl transition-colors py-2 px-4 rounded-lg ${
                    currentPage === item.value
                      ? "text-[#ea2320] bg-[#ea2320]/10"
                      : "text-white hover:text-[#ea2320] hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { AboutPage } from "./components/pages/AboutPage";
import { ContactPage } from "./components/pages/ContactPage";
import { FAQsPage } from "./components/pages/FAQsPage";
import { HomePage } from "./components/pages/HomePage";
import { PricingPage } from "./components/pages/PricingPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "services":
        return <ServicesPage onNavigate={setCurrentPage} />;
      case "pricing":
        return <PricingPage onNavigate={setCurrentPage} />;
      case "about":
        return <AboutPage onNavigate={setCurrentPage} />;
      case "faqs":
        return <FAQsPage onNavigate={setCurrentPage} />;
      case "contact":
        return <ContactPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}

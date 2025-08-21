import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Cloud, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <img 
                src="/header-logo.png" 
                alt="CloudResolve Logo" 
                className="h-12 w-auto object-contain"
                style={{ 
                  backgroundColor: 'transparent'
                }}
              />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 px-3 py-2 text-sm font-medium transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(207, 90%, 49%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-700 px-3 py-2 text-sm font-medium transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(207, 90%, 49%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-red-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <Link
                href="/insights"
                className="text-gray-700 px-3 py-2 text-sm font-medium transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(207, 90%, 49%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Insights
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-red-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
              <a
                href="tel:0208251251"
                className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ backgroundColor: 'hsl(207, 90%, 49%)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 44%)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 49%)'}
              >
                Call: 0208 251 251
              </a>
            </div>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-primary w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-primary w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-primary w-full text-left"
              >
                Services
              </button>
              <Link
                href="/insights"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-primary w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                Insights
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-primary w-full text-left"
              >
                Contact
              </button>
              <a
                href="tel:0208251251"
                className="block text-white px-3 py-2 rounded-lg text-base font-medium transition-colors text-center mx-3"
                style={{ backgroundColor: 'hsl(207, 90%, 49%)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 44%)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 49%)'}
              >
                Call: 0208 251 251
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

import { Cloud, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-deep-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center">
              <img 
                src="/footer-logo.png" 
                alt="CloudResolve Logo" 
                className="h-8 w-auto mr-3 object-contain"
                style={{ 
                  backgroundColor: 'transparent',
                  filter: 'brightness(0) saturate(100%) invert(100%)'
                }}
              />
              CloudResolve
            </div>
            <p className="text-gray-300 mb-4">
              Leading independent IT support provider for small businesses across the UK.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white text-xl transition-colors">
                <Linkedin />
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-xl transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-xl transition-colors">
                <Facebook />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  Microsoft 365
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  Server Management
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  Security Monitoring
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  IT Support
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>14 Garner Road</p>
              <p>Walthamstow, London E17 4HQ</p>
              <p>
                <a href="tel:0208251251" className="hover:text-white transition-colors">
                  Phone: 0208 251 251
                </a>
              </p>
              <p>
                <a href="mailto:info@cloudresolve.co.uk" className="hover:text-white transition-colors">
                  Email: info@cloudresolve.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 CloudResolve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

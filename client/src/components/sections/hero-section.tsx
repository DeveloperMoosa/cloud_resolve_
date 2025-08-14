import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
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
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Local Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src="/background-video.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Main hero content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-white max-w-3xl">
            <motion.p
              className="text-lg md:text-xl mb-4 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              CloudResolve is a leading independent UK IT support provider supplying cost-effective services and bespoke solutions to SMB, mid-market and corporate businesses.
            </motion.p>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Leading independent UK <span style={{ color: 'hsl(207, 90%, 49%)' }}>IT support</span> provider
            </motion.h1>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-azure-600 hover:bg-azure-700 text-white px-8 py-4 text-lg font-semibold rounded-sm transition-all"
                style={{ backgroundColor: 'hsl(207, 90%, 49%)', borderColor: 'hsl(207, 90%, 49%)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 44%)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 49%)'}
                size="lg"
              >
                QUICK QUOTE
              </Button>
              <Button
                onClick={() => scrollToSection("about")}
                className="bg-azure-600 hover:bg-azure-700 text-white px-8 py-4 text-lg font-semibold rounded-sm transition-all"
                style={{ backgroundColor: 'hsl(207, 90%, 49%)', borderColor: 'hsl(207, 90%, 49%)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 44%)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 49%)'}
                size="lg"
              >
                ABOUT US
              </Button>
            </motion.div>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

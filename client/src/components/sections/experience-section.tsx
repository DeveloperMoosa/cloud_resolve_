import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gray-50">
      {/* Abstract Wave Background */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(207, 90%, 49%)', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(207, 90%, 49%)', stopOpacity: 0.1 }} />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(207, 90%, 49%)', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(207, 90%, 49%)', stopOpacity: 0.05 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,160 C320,300,420,240,560,160 C700,80,780,120,840,160 C900,200,960,240,1080,200 C1200,160,1280,120,1360,160 L1440,200 L1440,320 L0,320 Z"
            className="wave-animation"
          />
          <path
            fill="url(#waveGradient2)"
            d="M0,200 C160,160,320,240,480,200 C640,160,800,100,960,140 C1120,180,1280,220,1440,180 L1440,320 L0,320 Z"
            className="wave-animation-delayed"
          />
          <path
            fill="url(#waveGradient)"
            d="M0,100 C240,180,480,60,720,100 C960,140,1200,180,1440,120 L1440,320 L0,320 Z"
            className="wave-animation"
            style={{ opacity: 0.5 }}
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Experience The Difference: Trusted, Knowledgeable and Reliable IT Support
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
            CloudResolve is a leading independent IT support provider working with companies across the UK. We deliver cost-effective services and bespoke solutions to SMB, mid-market and corporate businesses.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
            Ideal for anyone seeking first-class IT support, our team always listens closely to your unique business requirements, so we can recommend the best solutions from our extensive and fully customisable portfolio.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold text-center">
            Benefit from impartial and unbiased advice.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            Our IT support involves providing a comprehensive evaluation of your current technologies, after which we can recommend the best solutions for your future needs. Our goal is always to provide tailored solutions that align with your business goals, while ensuring you enjoy the best value for your business.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            CloudResolve ensures your business receives the finest quality support at all times. No matter the size of your business, we have packages to suit various needs.
          </p>
          
          <Button
            className="text-white px-8 py-4 text-lg font-semibold rounded-sm transition-all"
            style={{ backgroundColor: 'hsl(207, 90%, 49%)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 44%)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 49%)'}
            size="lg"
          >
            REQUEST A BROCHURE
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          requirements: ""
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Located in the heart of London, CloudResolve will never outsource our IT support. Instead, we have our own team of IT experts and specialists ready to fulfil your software, hardware and infrastructure requirements. If it's technology-related, our team has you covered!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Tel:</h4>
                  <p className="text-gray-700">
                    <a href="tel:0208251251" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(207, 90%, 49%)'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>0208 251 251</a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email:</h4>
                  <p className="text-gray-700">
                    <a href="mailto:info@cloudresolve.co.uk" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(207, 90%, 49%)'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>info@cloudresolve.co.uk</a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Address:</h4>
                  <p className="text-gray-700">14 Garner Road</p>
                  <p className="text-gray-700">Walthamstow, London E17 4HQ</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Social:</h4>
                  <p className="text-gray-700">@CloudResolve</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <div>
                <Textarea
                  name="requirements"
                  placeholder="Please provide us with a brief description of your requirements*"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold rounded-sm transition-all"
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
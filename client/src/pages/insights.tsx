import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  content: string;
  imageAlt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "azure-basics",
    title: "Azure Basics Explained with Real-Life Examples",
    description: "Understanding Microsoft Azure cloud services through practical, everyday comparisons that make complex concepts simple.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    imageAlt: "Cloud computing servers",
    content: `
      <h2>What is Microsoft Azure?</h2>
      <p>Think of Microsoft Azure as a giant digital warehouse where instead of storing physical items, you store and run your digital operations. Just like renting storage space or office facilities, Azure lets you rent computing power, storage, and various digital services.</p>
      
      <h3>Real-Life Example: The Restaurant Chain</h3>
      <p>Imagine you own a restaurant chain. Instead of building your own data center (like building your own warehouse), you use Azure's services:</p>
      <ul>
        <li><strong>Virtual Machines:</strong> Like renting kitchen equipment that you can scale up during busy seasons</li>
        <li><strong>Storage:</strong> Like having unlimited freezer space that grows as your menu expands</li>
        <li><strong>Databases:</strong> Like having a perfectly organized recipe book that all your chefs can access instantly</li>
      </ul>
      
      <h3>Key Azure Services Explained Simply</h3>
      <p><strong>Azure App Service:</strong> This is like having a ready-made restaurant space where you just bring your recipes (code) and start serving customers (users) immediately.</p>
      <p><strong>Azure Functions:</strong> Imagine having kitchen staff who only show up when orders come in - you only pay when they're actually cooking.</p>
      <p><strong>Azure AI Services:</strong> Like having a smart assistant who can predict what customers will order based on weather, events, and past preferences.</p>
      
      <h3>Why Businesses Choose Azure</h3>
      <p>Azure provides enterprise-grade infrastructure without the massive upfront investment. It's like leasing a fleet of luxury cars instead of buying them - you get all the benefits without the maintenance headaches.</p>
    `
  },
  {
    id: "cloud-benefits",
    title: "Top 5 Benefits of Cloud Computing for Businesses",
    description: "Discover how cloud computing transforms business operations, reduces costs, and drives innovation in today's digital landscape.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop",
    imageAlt: "Business team collaborating with cloud technology",
    content: `
      <h2>Transforming Business with Cloud Computing</h2>
      <p>Cloud computing has revolutionized how businesses operate, offering unprecedented flexibility and efficiency. Here are the top five benefits that make cloud adoption essential for modern businesses.</p>
      
      <h3>1. Cost Efficiency</h3>
      <p>Traditional IT infrastructure requires significant capital investment in hardware, software, and maintenance. Cloud computing transforms these capital expenses into operational expenses.</p>
      <ul>
        <li>No upfront hardware costs</li>
        <li>Pay only for what you use</li>
        <li>Reduced IT maintenance expenses</li>
        <li>Lower energy costs</li>
      </ul>
      
      <h3>2. Scalability and Flexibility</h3>
      <p>Cloud services grow with your business. During peak seasons, scale up instantly. During quiet periods, scale down to save costs. It's like having an elastic workforce that expands and contracts based on demand.</p>
      
      <h3>3. Enhanced Collaboration</h3>
      <p>Teams can access files and applications from anywhere, at any time. This enables:</p>
      <ul>
        <li>Remote work capabilities</li>
        <li>Real-time document collaboration</li>
        <li>Seamless communication across locations</li>
        <li>Improved productivity and efficiency</li>
      </ul>
      
      <h3>4. Automatic Updates and Maintenance</h3>
      <p>Cloud providers handle all system updates, security patches, and maintenance. Your IT team can focus on strategic initiatives rather than routine maintenance tasks.</p>
      
      <h3>5. Disaster Recovery and Business Continuity</h3>
      <p>Cloud services provide built-in backup and disaster recovery capabilities. Your data is automatically backed up across multiple locations, ensuring business continuity even in worst-case scenarios.</p>
      
      <h3>The Bottom Line</h3>
      <p>Cloud computing isn't just about technology—it's about transforming how businesses operate, compete, and grow in the digital age. The benefits extend far beyond cost savings, enabling innovation and agility that wasn't possible with traditional IT infrastructure.</p>
    `
  },
  {
    id: "iaas-paas-saas",
    title: "IaaS vs PaaS vs SaaS: Simple Guide",
    description: "Understanding the three main cloud service models through simple analogies and practical examples for better decision-making.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop",
    imageAlt: "Cloud service models illustration",
    content: `
      <h2>Understanding Cloud Service Models</h2>
      <p>Cloud computing offers three main service models: IaaS, PaaS, and SaaS. Let's break them down using a simple analogy: think of them as different ways to have dinner.</p>
      
      <h3>IaaS (Infrastructure as a Service) - The Grocery Store</h3>
      <p>IaaS is like buying ingredients from a grocery store. You get the raw materials (servers, storage, networking) but you do the cooking (install OS, middleware, applications).</p>
      <p><strong>Examples:</strong> Amazon EC2, Microsoft Azure VMs, Google Compute Engine</p>
      <p><strong>You manage:</strong> Applications, data, runtime, middleware, OS</p>
      <p><strong>Provider manages:</strong> Virtualization, servers, storage, networking</p>
      <p><strong>Best for:</strong> Companies wanting full control over their infrastructure</p>
      
      <h3>PaaS (Platform as a Service) - The Meal Kit Delivery</h3>
      <p>PaaS is like getting a meal kit delivered. You receive pre-measured ingredients and recipes (development platform) but still do the actual cooking (develop and deploy applications).</p>
      <p><strong>Examples:</strong> Heroku, Google App Engine, Microsoft Azure App Service</p>
      <p><strong>You manage:</strong> Applications and data</p>
      <p><strong>Provider manages:</strong> Runtime, middleware, OS, virtualization, servers, storage, networking</p>
      <p><strong>Best for:</strong> Developers who want to focus on coding without worrying about infrastructure</p>
      
      <h3>SaaS (Software as a Service) - The Restaurant</h3>
      <p>SaaS is like dining at a restaurant. Everything is prepared and served to you - you just enjoy the meal (use the software).</p>
      <p><strong>Examples:</strong> Gmail, Salesforce, Microsoft 365, Dropbox</p>
      <p><strong>You manage:</strong> Your data and user access</p>
      <p><strong>Provider manages:</strong> Everything else</p>
      <p><strong>Best for:</strong> Businesses wanting ready-to-use applications without any technical overhead</p>
      
      <h3>Quick Decision Guide</h3>
      <ul>
        <li><strong>Choose IaaS if:</strong> You need complete control and customization</li>
        <li><strong>Choose PaaS if:</strong> You want to focus on application development</li>
        <li><strong>Choose SaaS if:</strong> You need a ready-to-use solution immediately</li>
      </ul>
      
      <h3>The Hybrid Approach</h3>
      <p>Most businesses use a combination of all three models. You might use Microsoft 365 (SaaS) for productivity, Azure App Service (PaaS) for web applications, and Azure VMs (IaaS) for specialized workloads. The key is choosing the right model for each specific need.</p>
    `
  }
];

export default function Insights() {
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const scrollToArticle = (postId: string) => {
    setExpandedPost(postId);
    setTimeout(() => {
      const element = document.getElementById(`article-${postId}`);
      if (element) {
        const offset = 100;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              CloudResolve Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Articles, guides, and updates on cloud and technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <Button
                    onClick={() => scrollToArticle(post.id)}
                    className="group"
                    style={{ backgroundColor: 'hsl(207, 90%, 49%)' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 44%)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 49%)'}
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Articles */}
      {blogPosts.map((post) => (
        <motion.section
          key={`article-${post.id}`}
          id={`article-${post.id}`}
          className={`py-16 ${expandedPost === post.id ? 'block' : 'hidden'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: expandedPost === post.id ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {post.title}
                </h1>
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{
                    '--tw-prose-headings': 'hsl(207, 90%, 49%)',
                    '--tw-prose-links': 'hsl(207, 90%, 49%)',
                  } as React.CSSProperties}
                />
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Button
                    onClick={() => {
                      setExpandedPost(null);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    variant="outline"
                    className="border-2"
                    style={{ borderColor: 'hsl(207, 90%, 49%)', color: 'hsl(207, 90%, 49%)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 49%)';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'hsl(207, 90%, 49%)';
                    }}
                  >
                    Back to All Articles
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </motion.section>
      ))}

      <Footer />
    </div>
  );
}
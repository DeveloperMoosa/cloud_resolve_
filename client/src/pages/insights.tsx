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
    id: "teams-vs-zoom",
    title: "Microsoft Teams vs Zoom: Which One Is Best for Your Business?",
    description: "A comprehensive comparison to help you choose the right video conferencing platform for your organization's unique needs.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=400&fit=crop",
    imageAlt: "Video conferencing comparison",
    content: `
      <h2>Making the Right Choice for Your Business Communication</h2>
      <p>In today's hybrid work environment, choosing the right video conferencing platform is crucial for business success. Let's break down Microsoft Teams and Zoom in simple terms to help you make the best decision for your organization.</p>
      
      <h3>Microsoft Teams: The All-in-One Office Hub</h3>
      <p>Think of Microsoft Teams as your digital office building. It's not just a video calling app - it's where your entire workplace lives digitally.</p>
      <ul>
        <li><strong>Best for:</strong> Companies already using Microsoft 365 (Office)</li>
        <li><strong>Meeting capacity:</strong> Up to 1,000 participants (10,000 in view-only mode)</li>
        <li><strong>Key strength:</strong> Seamless integration with Word, Excel, PowerPoint, and Outlook</li>
        <li><strong>File sharing:</strong> Built-in with OneDrive and SharePoint</li>
        <li><strong>Chat:</strong> Persistent chat rooms that keep conversation history</li>
      </ul>
      
      <h3>Zoom: The Video Specialist</h3>
      <p>Zoom is like having a professional TV studio - it focuses on making video calls as smooth and high-quality as possible.</p>
      <ul>
        <li><strong>Best for:</strong> Companies prioritizing video quality and simplicity</li>
        <li><strong>Meeting capacity:</strong> Up to 1,000 participants (10,000 with add-on)</li>
        <li><strong>Key strength:</strong> Superior video/audio quality and reliability</li>
        <li><strong>Ease of use:</strong> Join meetings with just a link, no account needed</li>
        <li><strong>Virtual backgrounds:</strong> More advanced and reliable than Teams</li>
      </ul>
      
      <h3>Cost Comparison (Per User/Month)</h3>
      <p><strong>Microsoft Teams:</strong></p>
      <ul>
        <li>Free: Basic features for up to 100 participants</li>
        <li>Business Basic: £4.90 (includes Office web apps)</li>
        <li>Business Standard: £10.30 (includes desktop Office apps)</li>
      </ul>
      <p><strong>Zoom:</strong></p>
      <ul>
        <li>Basic: Free for 40-minute meetings</li>
        <li>Pro: £11.99 per user</li>
        <li>Business: £15.99 per user</li>
      </ul>
      
      <h3>Which Should You Choose?</h3>
      <p><strong>Choose Microsoft Teams if:</strong></p>
      <ul>
        <li>You already use Microsoft 365</li>
        <li>You want an all-in-one collaboration platform</li>
        <li>You need deep integration with Office apps</li>
        <li>You prefer keeping everything in one ecosystem</li>
      </ul>
      <p><strong>Choose Zoom if:</strong></p>
      <ul>
        <li>Video quality is your top priority</li>
        <li>You need a simple, dedicated video solution</li>
        <li>You frequently have external participants</li>
        <li>You want the most reliable connection across different devices</li>
      </ul>
      
      <h3>The Bottom Line</h3>
      <p>Both platforms are excellent choices. Teams wins for businesses wanting a complete digital workplace, while Zoom excels for those needing the best pure video conferencing experience. Many successful companies actually use both - Teams for internal collaboration and Zoom for client meetings.</p>
    `
  },
  {
    id: "hybrid-office",
    title: "The Future of Work: Hybrid Office with Microsoft 365",
    description: "Discover how Microsoft 365 enables seamless hybrid working, balancing office and remote work for maximum productivity and flexibility.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop",
    imageAlt: "Hybrid office workspace",
    content: `
      <h2>Building Your Hybrid Workplace with Microsoft 365</h2>
      <p>The hybrid office isn't just a trend - it's the new reality. Let's explore how Microsoft 365 makes it possible to work seamlessly whether you're at home, in the office, or anywhere in between.</p>
      
      <h3>What Is a Hybrid Office?</h3>
      <p>Imagine your work isn't tied to a specific desk anymore. Some days you're in the office collaborating face-to-face, other days you're working from home or a coffee shop. That's hybrid working - and Microsoft 365 is designed to make it effortless.</p>
      
      <h3>The Essential Tools for Hybrid Success</h3>
      <p><strong>1. Microsoft Teams: Your Virtual Office</strong></p>
      <p>Teams becomes your office when you're not in the office. It's where you:</p>
      <ul>
        <li>Have morning stand-ups via video</li>
        <li>Collaborate on documents in real-time</li>
        <li>Chat with colleagues as if they're at the next desk</li>
        <li>Share screens to solve problems together</li>
      </ul>
      
      <p><strong>2. OneDrive and SharePoint: Your Files, Everywhere</strong></p>
      <p>Never again will you hear "I left that file on my office computer." With OneDrive:</p>
      <ul>
        <li>Access any file from any device</li>
        <li>Work offline and sync when connected</li>
        <li>Share files securely with specific people</li>
        <li>Recover deleted files up to 30 days later</li>
      </ul>
      
      <p><strong>3. Outlook Calendar: Smart Scheduling</strong></p>
      <p>The new hybrid-aware features include:</p>
      <ul>
        <li>Set your work location for each day</li>
        <li>See who's in the office when scheduling meetings</li>
        <li>Book desk spaces and meeting rooms</li>
        <li>Automatic time zone adjustments for global teams</li>
      </ul>
      
      <h3>Real-World Hybrid Scenarios</h3>
      <p><strong>Monday Morning Team Meeting:</strong> Half the team is in the conference room, half joining from home. Teams' smart cameras focus on whoever's speaking, making remote attendees feel equally involved.</p>
      
      <p><strong>Collaborative Project Work:</strong> Three people editing the same PowerPoint simultaneously - one from the office, one from home, one from a train. Changes appear in real-time for everyone.</p>
      
      <p><strong>Client Presentation:</strong> Present from your home office while your colleague adds supporting details from the office. The client sees a seamless, professional presentation.</p>
      
      <h3>Making Hybrid Work Actually Work</h3>
      <p><strong>Set Clear Boundaries:</strong> Use Teams' status and Outlook's focus time to signal when you're available or deep in work.</p>
      
      <p><strong>Document Everything:</strong> In hybrid work, if it's not written down in Teams or OneNote, it didn't happen. This ensures nobody misses important decisions.</p>
      
      <p><strong>Embrace Asynchronous Work:</strong> Not everyone needs to be online at the same time. Use Teams channels for discussions that people can contribute to when it suits them.</p>
      
      <h3>The Benefits You'll See</h3>
      <ul>
        <li><strong>Increased productivity:</strong> Studies show hybrid workers are 13% more productive</li>
        <li><strong>Better work-life balance:</strong> Save commute time and have more flexibility</li>
        <li><strong>Wider talent pool:</strong> Hire the best people regardless of location</li>
        <li><strong>Reduced costs:</strong> Smaller office space requirements</li>
        <li><strong>Employee satisfaction:</strong> 73% of workers want flexible work options to continue</li>
      </ul>
      
      <h3>Getting Started with Hybrid</h3>
      <p>Start small. Pick one team to pilot hybrid working for a month. Use their feedback to refine your approach before rolling out company-wide. Remember, the goal isn't to replicate the office experience at home - it's to create something better that takes advantage of both environments.</p>
    `
  },
  {
    id: "migration-case-study",
    title: "Cloud Migration Success: A Manufacturing Company Case Study",
    description: "Follow the journey of a traditional manufacturing company's successful transformation to the cloud, with practical lessons learned.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=400&fit=crop",
    imageAlt: "Manufacturing facility with technology",
    content: `
      <h2>From Factory Floor to Cloud: A Real Success Story</h2>
      <p>Let's follow the journey of "Precision Parts Ltd," a 50-year-old manufacturing company with 200 employees, as they moved from on-premises servers to the cloud. Their story offers valuable lessons for any business considering cloud migration.</p>
      
      <h3>The Starting Point: Challenges They Faced</h3>
      <p>Before the cloud migration, Precision Parts struggled with:</p>
      <ul>
        <li><strong>Aging servers:</strong> 10-year-old hardware failing regularly</li>
        <li><strong>Limited remote access:</strong> Engineers couldn't access design files from client sites</li>
        <li><strong>Backup nightmares:</strong> Manual tape backups taking entire weekends</li>
        <li><strong>Scaling issues:</strong> 3-month wait to add server capacity for new projects</li>
        <li><strong>IT costs:</strong> £50,000 annual maintenance plus emergency repair costs</li>
      </ul>
      
      <h3>The Migration Journey: 6-Month Timeline</h3>
      <p><strong>Month 1: Assessment and Planning</strong></p>
      <p>The company started by cataloging what they had:</p>
      <ul>
        <li>5 physical servers running various applications</li>
        <li>2TB of design files and documents</li>
        <li>Legacy manufacturing software from 2008</li>
        <li>Email system serving 200 users</li>
      </ul>
      
      <p><strong>Month 2-3: Choosing the Right Cloud Strategy</strong></p>
      <p>They adopted a hybrid approach:</p>
      <ul>
        <li><strong>Move to cloud:</strong> Email (Office 365), file storage (SharePoint), and backup</li>
        <li><strong>Keep on-premises:</strong> Specialized manufacturing software (temporarily)</li>
        <li><strong>Platform chosen:</strong> Microsoft Azure for flexibility and integration</li>
      </ul>
      
      <p><strong>Month 4-5: Migration Execution</strong></p>
      <p>The actual migration happened in phases to minimize disruption:</p>
      <ul>
        <li><strong>Week 1:</strong> Email migration over a weekend (zero downtime)</li>
        <li><strong>Week 2-3:</strong> File migration in departments (10% at a time)</li>
        <li><strong>Week 4:</strong> Backup systems moved to Azure</li>
        <li><strong>Week 5-8:</strong> Training sessions for all staff</li>
      </ul>
      
      <p><strong>Month 6: Optimization and Refinement</strong></p>
      <p>After migration, they fine-tuned their setup based on actual usage patterns and user feedback.</p>
      
      <h3>The Smart Decisions That Made It Work</h3>
      <p><strong>1. They didn't rush:</strong> Taking 6 months meant fewer mistakes and less stress for employees.</p>
      
      <p><strong>2. Employee champions:</strong> They identified tech-savvy employees in each department to help their colleagues adapt.</p>
      
      <p><strong>3. Kept it simple:</strong> Instead of migrating everything at once, they started with email - something everyone understood.</p>
      
      <p><strong>4. Invested in training:</strong> Every employee received 4 hours of hands-on training, not just IT staff.</p>
      
      <h3>The Results After One Year</h3>
      <p><strong>Cost Savings:</strong></p>
      <ul>
        <li>40% reduction in IT costs (from £50,000 to £30,000 annually)</li>
        <li>Eliminated emergency hardware repair costs</li>
        <li>Reduced IT support staff needs by 1 full-time position</li>
      </ul>
      
      <p><strong>Productivity Gains:</strong></p>
      <ul>
        <li>Engineers can access files from client sites instantly</li>
        <li>Design collaboration time reduced by 30%</li>
        <li>System downtime reduced from 20 hours/year to 2 hours/year</li>
        <li>New project setup time reduced from 3 months to 1 day</li>
      </ul>
      
      <p><strong>Business Growth:</strong></p>
      <ul>
        <li>Took on 25% more projects due to improved efficiency</li>
        <li>Expanded to serve international clients (24/7 access capability)</li>
        <li>Improved client satisfaction scores by 35%</li>
      </ul>
      
      <h3>Lessons Learned: What They'd Do Differently</h3>
      <p><strong>1. Start training earlier:</strong> "We should have begun user training during the planning phase, not after migration."</p>
      
      <p><strong>2. Communicate more:</strong> "Weekly update emails would have reduced anxiety about the changes."</p>
      
      <p><strong>3. Run longer parallel systems:</strong> "We decommissioned old systems too quickly. A month of overlap would have been safer."</p>
      
      <h3>Key Takeaways for Your Business</h3>
      <ul>
        <li><strong>Start small:</strong> Pick one system or department for a pilot program</li>
        <li><strong>Measure everything:</strong> Document current costs and performance to prove ROI</li>
        <li><strong>Involve employees early:</strong> Change is easier when people understand 'why'</li>
        <li><strong>Budget for training:</strong> The technology is only as good as the people using it</li>
        <li><strong>Plan for the unexpected:</strong> Keep 20% of your timeline as buffer</li>
      </ul>
      
      <h3>The Bottom Line</h3>
      <p>Precision Parts' CEO summarizes: "Moving to the cloud wasn't just about updating technology - it transformed how we work. Our employees are happier with flexible working options, our clients love the faster service, and we're more competitive than ever. The migration paid for itself in 8 months."</p>
      
      <p>Their success shows that with proper planning, clear communication, and a phased approach, any company can successfully migrate to the cloud and reap significant benefits.</p>
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
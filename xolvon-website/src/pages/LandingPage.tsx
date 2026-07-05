import React from 'react';
import NavigationBar from '../components/layout/NavigationBar';
import MetricsDisplay from '../components/features/MetricsDisplay';
import MarketplaceGrid from '../components/features/MarketplaceGrid';
import Footer from '../components/layout/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-200">
      <NavigationBar />
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-gray-900 leading-tight">
          Human-AI End-to-End <br />
          <span className="text-purple-700">Attention Systems</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-500 font-medium mb-6">
          67 Alpha-stage Digital Production Lab
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          Build systems that actually solve problems. Browse our Human-AI Solutions designed to solve society conundrums through data-driven and collaborative systems.
        </p>
        <button 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          Explore Projects
        </button>
      </section>

      {/* Metrics Section */}
      <MetricsDisplay />

      {/* Marketplace Grid */}
      <MarketplaceGrid />

      {/* Core Pillars Section */}
      <section id="pillars" className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Pillars</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              The foundation of our approach to solving complex problems through technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center mb-6 text-2xl">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Impact-Driven Automation</h3>
              <p className="text-gray-500 leading-relaxed">
                We automate repetitive tasks to free human capacity for strategic thinking. Our 120+ reusable playbooks and 1.4k+ automation hours per month demonstrate how intelligent automation drives measurable business impact, reducing response times and scaling operations efficiently.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center mb-6 text-2xl">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Human-AI Collaboration</h3>
              <p className="text-gray-500 leading-relaxed">
                Our Human-AI Field Systems combine the contextual understanding of humans with the processing power of AI. This synergy enables us to analyze 2.7M+ monthly signals while maintaining human oversight, ensuring that technology amplifies rather than replaces human judgment and creativity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center mb-6 text-2xl">📈</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Scalable B2B Solutions</h3>
              <p className="text-gray-500 leading-relaxed">
                Built for enterprise needs, our 18 alpha-stage products provide scalable solutions across content automation, business intelligence, and cyber defense. With 420+ data assets and field-tested playbooks, we deliver B2B-ready systems that grow with your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We leverage cutting-edge technology and human expertise to build comprehensive systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Attention Alert", desc: "Real-time monitoring and alerting system that identifies critical attention patterns and signals across digital channels, enabling rapid response to emerging trends." },
              { title: "Real-Time Sentiment Analysis", desc: "Advanced AI-powered sentiment analysis that processes millions of signals monthly to understand audience emotions and reactions in real-time." },
              { title: "Cyber Defense", desc: "Comprehensive security framework protecting digital assets and data integrity through proactive threat detection and automated defense mechanisms." },
              { title: "Xolvon Market", desc: "Integrated marketplace platform connecting businesses with AI-powered solutions, featuring 18 alpha-stage products and automated distribution systems." },
              { title: "Human-AI Attention-Data Insight", desc: "Synergistic fusion of human expertise and AI analytics delivering actionable insights from attention data, processing 2.7M+ signals monthly." },
              { title: "Attention Boost", desc: "Strategic amplification tools that optimize content visibility and engagement through data-driven attention management and audience targeting." }
            ].map((cap, i) => (
              <div key={i} className="p-6 border border-gray-100 rounded-2xl hover:shadow-md transition-shadow bg-gray-50 hover:bg-white group">
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-purple-700 transition-colors">{cap.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-purple-900 text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Project Xolvon</h2>
          <p className="text-purple-200 text-lg md:text-xl leading-relaxed mb-6">
            We build Human-AI Field Systems—intelligent ecosystems designed to collaborate with human ingenuity rather than replace it. By focusing on attention, data insights, and automation, we empower individuals and businesses.
          </p>
          <p className="text-purple-200 text-lg md:text-xl leading-relaxed mb-6">
            Whether it's helping creators scale their content with XFarming, or providing real-time sentiment analysis through our Defense Narrative System, we address society's conundrums systematically.
          </p>
          <p className="text-white font-medium text-xl">
            Our Alpha-stage marketplace is just the beginning. We continuously experiment, validate, and launch solutions that deliver measurable impact.
          </p>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Tailored solutions designed to meet the unique challenges of modern digital ecosystems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "For Brands",
                desc: "Navigate consumer sentiment and optimize your market positioning with our Defense Narrative System and Cyber Reputation Defense. Understand exactly what your audience needs before they even ask.",
                features: ["Real-time Sentiment Analysis", "Tone Mapping", "Consumer Signal Lab"]
              },
              {
                title: "For Creators",
                desc: "Scale your content production effortlessly. Stop wasting hours on manual editing and let XFarming and Vixual Nano automate the heavy lifting, increasing your watch time and engagement.",
                features: ["Auto-Cut Dead Air", "Bulk Carousel Generation", "AI Content Curation"]
              },
              {
                title: "For Agencies",
                desc: "Protect client margins and capture lost opportunities. CafeMargin and LiveMargin provide actionable intelligence, transforming raw data into distribution pipelines that generate real ROI.",
                features: ["Interactive Intelligence Dashboard", "Margin Optimization", "B2B Scalable Solutions"]
              }
            ].map((serve, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">{serve.title}</h3>
                <p className="text-gray-500 mb-8 flex-grow leading-relaxed">{serve.desc}</p>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {serve.features.map((feature, j) => (
                      <li key={j} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              The minds behind Project Xolvon's Human-AI ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "M. Farsya Hasibuan", role: "Founder & Project Lead", uni: "UPNVJ • Data Science", initials: "FH" },
              { name: "Zaidan Daffa Abdillah", role: "Head of Tech & Experience", uni: "Tel-U • Informatics Engineering", initials: "ZA" },
              { name: "Varisha Aira Dalimunthe", role: "Head of Community Ops", uni: "UPNVJ • Information System", initials: "VD" },
              { name: "Mahathir Abitah Batubara", role: "Head of Business Dev", uni: "UNESA • Digital Business", initials: "MB" },
              { name: "I Gusti Ayu Laksmi Dewi", role: "Head of Attention Strategist", uni: "UMN • Marketing Communication", initials: "LD" },
              { name: "Khalifa Ghizzan Moreno", role: "Head of Brand Strategist", uni: "Tel-U • Communication Science", initials: "KM" }
            ].map((member, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">{member.name}</h3>
                  <p className="text-purple-700 text-sm font-medium mb-1">{member.role}</p>
                  <p className="text-gray-500 text-xs">{member.uni}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;

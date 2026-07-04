import React from 'react';
import Section from '../common/Section';
import Heading from '../common/Heading';
import Card from '../common/Card';

const audiences = [
  {
    title: "For Brands",
    description: "Navigate consumer sentiment and optimize your market positioning with our Defense Narrative System and Cyber Reputation Defense. Understand exactly what your audience needs before they even ask.",
    features: ["Real-time Sentiment Analysis", "Tone Mapping", "Consumer Signal Lab"]
  },
  {
    title: "For Creators",
    description: "Scale your content production effortlessly. Stop wasting hours on manual editing and let XFarming and Vixual Nano automate the heavy lifting, increasing your watch time and engagement.",
    features: ["Auto-Cut Dead Air", "Bulk Carousel Generation", "AI Content Curation"]
  },
  {
    title: "For Agencies",
    description: "Protect client margins and capture lost opportunities. CafeMargin and LiveMargin provide actionable intelligence, transforming raw data into distribution pipelines that generate real ROI.",
    features: ["Interactive Intelligence Dashboard", "Margin Optimization", "B2B Scalable Solutions"]
  }
];

const TargetAudiencesSection: React.FC = () => {
  return (
    <Section id="audiences" className="bg-[var(--gray-50)]">
      <div className="text-center mb-16">
        <Heading level={2} className="mb-4">
          Who We Serve
        </Heading>
        <p className="text-[var(--gray-500)] max-w-2xl mx-auto font-poppins text-lg">
          Tailored solutions designed to meet the unique challenges of modern digital ecosystems.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {audiences.map((audience, index) => (
          <Card 
            key={index}
            hoverable
            className="flex flex-col h-full border-t-4 border-t-[var(--blue-primary)] transition-all duration-300 hover:bg-blue-50/30"
          >
            <Heading level={3} className="text-xl mb-4 text-[var(--black)]">
              {audience.title}
            </Heading>
            <p className="text-[var(--gray-500)] font-poppins mb-6 flex-grow">
              {audience.description}
            </p>
            <div>
              <h4 className="font-semibold text-sm text-[var(--black)] mb-3 uppercase tracking-wider">Key Features</h4>
              <ul className="space-y-2">
                {audience.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-sm text-[var(--gray-500)]">
                    <span className="text-[var(--purple-primary)] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default TargetAudiencesSection;

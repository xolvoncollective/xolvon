import React from 'react';
import { teamMembers } from '../../data/team';
import TeamMemberCard from './TeamMemberCard';
import Section from '../common/Section';
import Heading from '../common/Heading';

const TeamSection: React.FC = () => {
  return (
    <Section id="team" className="bg-white">
      <div className="text-center mb-16">
        <Heading level={2} className="mb-4">
          Meet the Team
        </Heading>
        <p className="text-[var(--gray-500)] max-w-2xl mx-auto font-poppins text-lg">
          The minds behind Project Xolvon's Human-AI ecosystem.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id}>
            <TeamMemberCard member={member} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TeamSection;

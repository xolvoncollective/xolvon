import React from 'react';
import type { TeamMember } from '../../types/team';
import Card from '../common/Card';
import Image from '../common/Image';
import Heading from '../common/Heading';
const Instagram = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <Card hoverable className="flex flex-col h-full">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
          <Image 
            src={member.profileImageUrl} 
            alt={member.name}
            className="w-full h-full object-cover"
            fallbackSrc={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=6B21A8&color=fff`}
          />
        </div>
        <div>
          <Heading level={3} className="text-lg">
            {member.name}
          </Heading>
          <p className="text-[var(--purple-primary)] font-medium text-sm">
            {member.role}
          </p>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg flex-grow mb-4">
        <p className="text-[var(--gray-500)] font-poppins text-sm italic">
          "{member.bio || 'Bio not available'}"
        </p>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
        <div className="text-xs text-gray-400 font-medium">
          {member.university} • {member.major}
        </div>
        {member.instagramHandle && (
          <a 
            href={`https://instagram.com/${member.instagramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[var(--purple-primary)] transition-colors"
            aria-label={`${member.name}'s Instagram`}
          >
            <Instagram size={18} />
          </a>
        )}
      </div>
    </Card>
  );
};

export default TeamMemberCard;

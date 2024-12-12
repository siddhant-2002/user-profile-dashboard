import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Profile } from '../../types/Profile';

interface ProfileCardContentProps {
  profile: Profile;
}

export const ProfileCardContent: React.FC<ProfileCardContentProps> = ({ profile }) => {
  return (
    <div className="p-6">
      <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
        {profile.description}
      </p>
      
      {profile.contact && (
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
            <Mail className="w-4 h-4 mr-2" />
            <a href={`mailto:${profile.contact.email}`} className="text-sm hover:underline">
              {profile.contact.email}
            </a>
          </div>
          <div className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            <a href={`tel:${profile.contact.phone}`} className="text-sm hover:underline">
              {profile.contact.phone}
            </a>
          </div>
        </div>
      )}

      {profile.interests && (
        <div className="flex flex-wrap gap-2 mb-4">
          {profile.interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors cursor-default"
            >
              {interest}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
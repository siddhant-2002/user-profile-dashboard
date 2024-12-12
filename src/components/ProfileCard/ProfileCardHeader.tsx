import React from 'react';
import { MapPin } from 'lucide-react';
import { Profile } from '../../types/Profile';

interface ProfileCardHeaderProps {
  profile: Profile;
}

export const ProfileCardHeader: React.FC<ProfileCardHeaderProps> = ({ profile }) => {
  return (
    <div className="relative">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={profile.photo} 
          alt={profile.name} 
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
          {profile.name}
        </h3>
        <div className="flex items-center text-white/90">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm truncate drop-shadow-lg">{profile.address}</span>
        </div>
      </div>
    </div>
  );
};
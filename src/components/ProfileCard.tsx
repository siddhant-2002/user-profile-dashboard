import React from 'react';
import { MapPin, Mail, Phone, Info, MapIcon } from 'lucide-react';
import { Profile } from '../types/Profile';

interface ProfileCardProps {
  profile: Profile;
  onShowMap: (profile: Profile) => void;
  onShowDetails: (profile: Profile) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onShowMap, onShowDetails }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={profile.photo} 
          alt={profile.name} 
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-1">{profile.name}</h3>
          <div className="flex items-center text-white/90">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm truncate">{profile.address}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">{profile.description}</p>
        
        {profile.contact && (
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-500">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">{profile.contact.email}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">{profile.contact.phone}</span>
            </div>
          </div>
        )}

        {profile.interests && (
          <div className="flex flex-wrap gap-2 mb-4">
            {profile.interests.map((interest, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
              >
                {interest}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={() => onShowMap(profile)}
            className="flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
          >
            <MapIcon className="w-4 h-4" />
            View Map
          </button>
          <button
            onClick={() => onShowDetails(profile)}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 font-medium"
          >
            <Info className="w-4 h-4" />
            Details
          </button>
        </div>
      </div>
    </div>
  );
};
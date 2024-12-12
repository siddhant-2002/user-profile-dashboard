import React from 'react';
import { MapIcon, Info } from 'lucide-react';
import { Profile } from '../../types/Profile';

interface ProfileCardActionsProps {
  profile: Profile;
  onShowMap: (profile: Profile) => void;
  onShowDetails: (profile: Profile) => void;
}

export const ProfileCardActions: React.FC<ProfileCardActionsProps> = ({ 
  profile, 
  onShowMap, 
  onShowDetails 
}) => {
  return (
    <div className="px-6 pb-6 flex gap-3">
      <button
        onClick={() => onShowMap(profile)}
        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-sm hover:shadow group"
      >
        <MapIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
        View Map
      </button>
      <button
        onClick={() => onShowDetails(profile)}
        className="flex-1 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 font-medium group"
      >
        <Info className="w-4 h-4 group-hover:scale-110 transition-transform" />
        Details
      </button>
    </div>
  );
};
import React from 'react';
import { Profile } from '../../types/Profile';
import { ProfileCardHeader } from './ProfileCardHeader';
import { ProfileCardContent } from './ProfileCardContent';
import { ProfileCardActions } from './ProfileCardActions';

interface ProfileCardProps {
  profile: Profile;
  onShowMap: (profile: Profile) => void;
  onShowDetails: (profile: Profile) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onShowMap, onShowDetails }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
      <ProfileCardHeader profile={profile} />
      <ProfileCardContent profile={profile} />
      <ProfileCardActions 
        profile={profile}
        onShowMap={onShowMap}
        onShowDetails={onShowDetails}
      />
    </div>
  );
};
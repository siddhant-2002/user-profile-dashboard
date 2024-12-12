import React from 'react';
import PropTypes from 'prop-types';
import { MapPin, Info } from 'lucide-react';

const ProfileCard = ({ profile, onShowMap, onShowDetails }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 w-full max-w-sm mx-auto">
      <img 
        src={profile.photo} 
        alt={profile.name} 
        className="w-full h-80 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{profile.name}</h3>
        <p className="text-gray-600 mb-4">{profile.description}</p>
        
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="w-5 h-5 mr-2" />
          <span className="text-sm">{profile.address}</span>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => onShowMap(profile)}
            className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            Show Map
          </button>
          <button
            onClick={() => onShowDetails(profile)}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <Info className="w-5 h-5" />
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string,
  }).isRequired,
  onShowMap: PropTypes.func.isRequired,
  onShowDetails: PropTypes.func.isRequired,
};

export default ProfileCard;
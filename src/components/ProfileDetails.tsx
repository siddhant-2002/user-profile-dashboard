import React from 'react';
import { Mail, Phone, Tag, MapPin, X, Globe, Briefcase } from 'lucide-react';
import { Profile } from '../types/Profile';

interface ProfileDetailsProps {
  profile: Profile;
  onClose: () => void;
}

export const ProfileDetails: React.FC<ProfileDetailsProps> = ({ profile, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-6">
            <h2 className="text-3xl font-bold text-white mb-2">{profile.name}</h2>
            <div className="flex items-center text-white/90">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{profile.address}</span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
              About
            </h3>
            <p className="text-gray-600 leading-relaxed">{profile.description}</p>
          </div>

          {profile.contact && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-blue-600" />
                Contact Information
              </h3>
              <div className="space-y-3 ml-7">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-gray-400" />
                  <span className="text-gray-600">{profile.contact.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-gray-400" />
                  <span className="text-gray-600">{profile.contact.phone}</span>
                </div>
              </div>
            </div>
          )}

          {profile.interests && profile.interests.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Tag className="w-5 h-5 mr-2 text-blue-600" />
                Interests
              </h3>
              <div className="flex flex-wrap gap-2 ml-7">
                {profile.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
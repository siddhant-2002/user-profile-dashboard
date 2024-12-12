import React from "react";
import PropTypes from "prop-types";
import { Mail, Phone, Tag } from "lucide-react";


const ProfileDetails = ({ profile, onClose }) => {
  const { name, photo, description, contact, interests } = profile;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-2xl font-bold">{name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <img
            src={photo}
            alt={name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <div className="space-y-4">
            <p className="text-gray-600">{description}</p>

            {contact && (
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <div className="space-y-2">
                  {contact.email && (
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-500" />
                      <span>{contact.email}</span>
                    </div>
                  )}
                  {contact.phone && (
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-500" />
                      <span>{contact.phone}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {interests && (
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileDetails.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    contact: PropTypes.shape({
      email: PropTypes.string,
      phone: PropTypes.string,
    }),
    interests: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProfileDetails;
import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import { Pencil, Trash2, Plus } from 'lucide-react';

const AdminPanel = ({ profiles, addProfile, updateProfile, deleteProfile }) => {
  const [editingProfile, setEditingProfile] = useState(null);
  const [isAddingProfile, setIsAddingProfile] = useState(false);

  const handleAddProfile = (data) => {
    addProfile({
      ...data,
      coordinates: {
        lat: parseFloat(data.coordinates.lat),
        lng: parseFloat(data.coordinates.lng),
      },
    });
    setIsAddingProfile(false);
  };

  const handleUpdateProfile = (data) => {
    if (editingProfile) {
      updateProfile(editingProfile.id, {
        ...data,
        coordinates: {
          lat: parseFloat(data.coordinates.lat),
          lng: parseFloat(data.coordinates.lng),
        },
      });
      setEditingProfile(null);
    }
  };

  const handleDeleteProfile = (id) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      deleteProfile(id);
    }
  };

  if (isAddingProfile) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <ProfileForm
          onSubmit={handleAddProfile}
          onCancel={() => setIsAddingProfile(false)}
        />
      </div>
    );
  }

  if (editingProfile) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <ProfileForm
          initialData={editingProfile}
          onSubmit={handleUpdateProfile}
          onCancel={() => setEditingProfile(null)}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Manage Profiles</h2>
        <button
          onClick={() => setIsAddingProfile(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Profile
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Profile
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {profiles.map((profile) => (
              <tr key={profile.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={profile.photo}
                        alt={profile.name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {profile.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {profile.description.substring(0, 50)}...
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{profile.address}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{profile.contact?.email}</div>
                  <div className="text-sm text-gray-500">{profile.contact?.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => setEditingProfile(profile)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteProfile(profile.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;

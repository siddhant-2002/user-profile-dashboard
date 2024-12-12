import React, { useState } from 'react';
import { Search, Users, UserCircle } from 'lucide-react';
import { ProfileCard } from './components/ProfileCard';
import { Map } from './components/Map';
import { ProfileDetails } from './components/ProfileDetails';
import { AdminPanel } from './components/admin/AdminPanel';
import { ProfileProvider } from './context/ProfileContext';
import { Profile } from './types/Profile';
import { useProfiles } from './context/ProfileContext';

function AppContent() {
  const { profiles } = useProfiles();
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [showDetails, setShowDetails] = useState<Profile | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdminMode, setIsAdminMode] = useState(false);

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Profile Explorer
            </h1>
            <button
              onClick={() => setIsAdminMode(!isAdminMode)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              {isAdminMode ? (
                <>
                  <UserCircle className="w-4 h-4 mr-2" />
                  View Profiles
                </>
              ) : (
                <>
                  <Users className="w-4 h-4 mr-2" />
                  Admin Panel
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {isAdminMode ? (
          <AdminPanel />
        ) : (
          <>
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search profiles by name, description, or location..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm bg-white/80 backdrop-blur-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfiles.map(profile => (
                <ProfileCard
                  key={profile.id}
                  profile={profile}
                  onShowMap={setSelectedProfile}
                  onShowDetails={setShowDetails}
                />
              ))}
            </div>

            {selectedProfile && (
              <Map 
                profile={selectedProfile} 
                onClose={() => setSelectedProfile(null)}
              />
            )}

            {showDetails && (
              <ProfileDetails
                profile={showDetails}
                onClose={() => setShowDetails(null)}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}

function App() {
  return (
    <ProfileProvider>
      <AppContent />
    </ProfileProvider>
  );
}

export default App;
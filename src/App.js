import React, { useState } from "react";
import { Search } from "lucide-react";
import ProfileCard from "./components/ProfileCard";
import Map from "./components/Map";
import ProfileDetails from "./components/ProfileDetails";
import { profiles } from "./data/profiles";

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showDetails, setShowDetails] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Profile Explorer
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search profiles..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex md:flex-row gap-6">
          {/* Profiles List */}
          <div className="flex flex-wrap gap-6">
            {filteredProfiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onShowMap={() => {
                  setSelectedProfile(profile);
                  setShowMap(true);
                }}
                onShowDetails={setShowDetails}
              />
            ))}
          </div>
        </div>

        {/* Map Modal */}
        {showMap && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowMap(false)}
              className="text-gray-500 hover:text-gray-700 absolute top-1 right-2"
            >
              ✕
            </button>
            <div className="p-6">
              <Map profile={selectedProfile} />
            </div>
          </div>
        </div>
        )}

        {/* Profile Details Modal */}
        {showDetails && (
          <ProfileDetails
            profile={showDetails}
            onClose={() => setShowDetails(null)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
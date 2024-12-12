import React, { createContext, useContext, useState, useCallback } from 'react';
import { Profile } from '../types/Profile';
import { profiles as initialProfiles } from '../data/profiles';

interface ProfileContextType {
  profiles: Profile[];
  addProfile: (profile: Omit<Profile, 'id'>) => void;
  updateProfile: (id: number, profile: Omit<Profile, 'id'>) => void;
  deleteProfile: (id: number) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profiles, setProfiles] = useState<Profile[]>(initialProfiles);

  const addProfile = useCallback((profile: Omit<Profile, 'id'>) => {
    setProfiles(current => {
      const newId = Math.max(...current.map(p => p.id), 0) + 1;
      return [...current, { ...profile, id: newId }];
    });
  }, []);

  const updateProfile = useCallback((id: number, profile: Omit<Profile, 'id'>) => {
    setProfiles(current =>
      current.map(p => (p.id === id ? { ...profile, id } : p))
    );
  }, []);

  const deleteProfile = useCallback((id: number) => {
    setProfiles(current => current.filter(p => p.id !== id));
  }, []);

  return (
    <ProfileContext.Provider value={{ profiles, addProfile, updateProfile, deleteProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfiles = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfiles must be used within a ProfileProvider');
  }
  return context;
};
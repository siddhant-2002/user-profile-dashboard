import React, { createContext, useContext, useState, useCallback } from 'react';
import { profiles as initialProfiles } from '../data/profiles';

const ProfileContext = createContext(undefined);

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(initialProfiles);

  const addProfile = useCallback((profile) => {
    setProfiles((current) => {
      const newId = Math.max(...current.map((p) => p.id), 0) + 1;
      return [...current, { ...profile, id: newId }];
    });
  }, []);

  const updateProfile = useCallback((id, profile) => {
    setProfiles((current) =>
      current.map((p) => (p.id === id ? { ...profile, id } : p))
    );
  }, []);

  const deleteProfile = useCallback((id) => {
    setProfiles((current) => current.filter((p) => p.id !== id));
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

export interface Profile {
  id: number;
  name: string;
  photo: string;
  description: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  contact?: {
    email: string;
    phone: string;
  };
  interests?: string[];
}

export interface ProfileFormData extends Omit<Profile, 'id' | 'coordinates'> {
  coordinates: {
    lat: string;
    lng: string;
  };
}
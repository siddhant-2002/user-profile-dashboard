import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const Map = ({ profile }) => {
  if (!profile || !profile.coordinates) return null;

  const center = {
    lat: profile.coordinates.lat,
    lng: profile.coordinates.lng,
  };

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-md">
      <LoadScript googleMapsApiKey="https://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
        >
          <Marker position={center}>
            <InfoWindow position={center}>
              <div>
                <h3 className="font-semibold">{profile.name}</h3>
                <p>{profile.address}</p>
              </div>
            </InfoWindow>
          </Marker>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

Map.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string,
    coordinates: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  }),
};

export default Map;
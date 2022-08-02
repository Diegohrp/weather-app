import React from 'react';
import styled from 'styled-components';
import {
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';

export const MapSection = styled.section`
  margin: 50px 0;
  width: 80%;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-align: center;
  }
  @media (min-width: 700px) {
    grid-column: 1 / 3;
  }
`;
const API_KEY = process.env.REACT_APP_MAPS_API_KEY;
function Map({ location }) {
  const mapStyles = {
    height: '40vh',
    width: '100%',
  };

  const defaulCenter = {
    lat: location.lat,
    lng: location.lon,
  };

  return (
    <MapSection>
      <h2>Map</h2>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaulCenter}>
          <Marker position={defaulCenter} />
        </GoogleMap>
      </LoadScript>
    </MapSection>
  );
}
export { Map };

import React from 'react';

function useGetLocation() {
  const [location, setLocation] = React.useState({});

  function success(position) {
    setLocation({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
  }

  function error() {
    console.error('Unable to retrieve your location');
  }

  if (!navigator.geolocation) {
    console.log('Geolocation is not supported by your browser');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  return location;
}

export { useGetLocation };

import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import ErrorPage from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isLoading, setIsLoading] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState(null);
  
  // useEffect only executes once when the component is executed 
  // for the first time unless a dependency is provided and that dependency changes
  // necessary to fetch the data from the server to prevent an infinite loop
  useEffect(() => {
      // fetch is provided by the browser, can be used to send an http request to the server
      async function fetchPlaces() {
        setIsLoading(true);
        try {
          const places = await fetchAvailablePlaces();

          navigator.geolocation.getCurrentPosition((position) => {
            const sortedPlaces = sortPlacesByDistance(
              places, 
              position.coords.latitude, 
              position.coords.longitude
            );
            setAvailablePlaces(sortedPlaces);
            setIsLoading(false);
          });

        } catch (error) {
          setError(error.message || 'An error occurred!');
          setIsLoading(false);
        }
     }

     fetchPlaces();
  }, []);

  if (error) {
    return <ErrorPage title="An error occurred!" message={error} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Loading places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const MapWithDirections = ({ apiKey, destination }) => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ lat: latitude, lng: longitude });
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };
  
    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const googleMapsScript = document.createElement("script");
        googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        googleMapsScript.async = true;
        googleMapsScript.defer = true;
        window.document.body.appendChild(googleMapsScript);
        googleMapsScript.addEventListener("load", () => {
          console.log("Google Maps API script loaded");
          getCurrentLocation();
        });
      } else {
        getCurrentLocation();
      }
    };
  
    loadGoogleMapsScript();
  }, [apiKey]);
  

  const mapOptions = {
    zoom: 14,
    center: currentLocation,
  };

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      zoom={mapOptions.zoom}
      center={mapOptions.center}
    >
      {currentLocation && (
        <>
          <DirectionsService
            options={{
              destination,
              origin: currentLocation,
              travelMode: "DRIVING",
            }}
            callback={(response) => {
              if (response !== null) {
                console.log(response);
              }
            }}
          />
          <DirectionsRenderer />
        </>
      )}
    </GoogleMap>
  );
};

export default MapWithDirections;

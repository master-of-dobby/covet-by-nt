import React from "react";

import { useNavigate } from "react-router-dom";

function SearcheResults(props) {
  const navigate = useNavigate();

  const handleSearch = (id) => {
    // console.log("handle search", id
    navigate(`/restaurant/${id}`);
  };

  const destinationLat = props.lat;
  const destinationLng = props.long;

  //console.log(props.lat + "==>" + props.long);

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="searched-res">
        <div className="searched-res-det">
          <div
            className="searched-res-name"
            onClick={() => handleSearch(props.rid)}
          >
            {props.eachRes}
          </div>
          <div className="searched-res-ratings">{props.starRating} ⭐</div>
          <div className="searched-res-direction">
            <button
              className="searched-res-direction-btn"
              onClick={openGoogleMaps}
            >
              Get Me 🗺️
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearcheResults;























// import React, { useEffect } from "react";

// function SearcheResults(props) {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCN_fMXasx1jlPhzVF0azO7BcIFJprKimw&callback=initMap&libraries=places`;
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <>
//       <div className="searched-res">
//         <div className="searched-res-det">
//           <div className="searched-res-name">{props.eachRes}</div>
//           <div className="searched-res-ratings">{props.starRating} ⭐</div>
//           <div className="searched-res-direction">
//             <button className="searched-res-direction-btn" onClick={initMap}>
//               Get Directions ↗️
//             </button>
//           </div>
//         </div>
//       </div>
//       <div id="map" style={{ height: "400px", width: "100%" }}></div>
//     </>
//   );
// }

// export default SearcheResults;

// // Initialize the map
// function initMap() {
//   const map = new window.google.maps.Map(document.getElementById("map"), {
//     zoom: 14,
//   });

//   // Get user's current location
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const userLocation = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         };

//         console.log("User Location:", userLocation);

//         //console.log(userLocation.lat + " " + userLocation.lng);

//         // Set the map center to user's location
//         map.setCenter(userLocation);

//         // Calculate directions
//         const directionsService = new window.google.maps.DirectionsService();
//         const directionsRenderer = new window.google.maps.DirectionsRenderer({
//           map,
//         });

//         const destination = new window.google.maps.LatLng(
//           13.659682447063451,
//           79.48594514218165
//         );

//         console.log("Destination : " + destination);

//         const request = {
//           origin: userLocation,
//           destination: destination,
//           travelMode: "DRIVING",
//         };

//         directionsService.route(request, function (result, status) {
//           if (status === "OK") {
//             console.log("request is OKAY!");
//             directionsRenderer.setDirections(result);
//           } else {
//             console.error("Error fetching directions: ", status);
//           }
//         });
//       },
//       (error) => {
//         console.error("Error getting user location: ", error);
//       }
//     );
//   } else {
//     console.error("Geolocation is not supported by this browser.");
//   }
// }

// import React, { useEffect, useState } from "react";

// function SearcheResults(props) {
//   const [map, setMap] = useState(null);
//   const [userMarker, setUserMarker] = useState(null);
//   const [directionsRenderer, setDirectionsRenderer] = useState(null);
//   const [watchId, setWatchId] = useState(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCN_fMXasx1jlPhzVF0azO7BcIFJprKimw&libraries=places`;
//     script.async = true;
//     script.defer = true;
//     script.onload = initializeMap;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const initializeMap = () => {
//     const map = new window.google.maps.Map(document.getElementById("map"), {
//       zoom: 14,
//     });
//     setMap(map);

//     const directionsRenderer = new window.google.maps.DirectionsRenderer({
//       map,
//     });
//     setDirectionsRenderer(directionsRenderer);
//   };

//   const startDirections = () => {
//     if (navigator.geolocation) {
//       const watchId = navigator.geolocation.watchPosition(
//         (position) => {
//           const userLocation = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };

//           if (!userMarker) {
//             const marker = new window.google.maps.Marker({
//               position: userLocation,
//               map,
//             });
//             setUserMarker(marker);
//           } else {
//             userMarker.setPosition(userLocation);
//           }

//           const destination = new window.google.maps.LatLng(
//             13.659682447063451,
//             79.48594514218165
//           );

//           const directionsService = new window.google.maps.DirectionsService();

//           const request = {
//             origin: userLocation,
//             destination: destination,
//             travelMode: "DRIVING",
//           };

//           directionsService.route(request, function (result, status) {
//             if (status === "OK") {
//               directionsRenderer.setDirections(result);
//             } else {
//               console.error("Error fetching directions: ", status);
//             }
//           });
//         },
//         (error) => {
//           console.error("Error getting user location: ", error);
//         }
//       );
//       setWatchId(watchId);
//     } else {
//       console.error("Geolocation is not supported by this browser.");
//     }
//   };

//   const stopDirections = () => {
//     if (watchId) {
//       navigator.geolocation.clearWatch(watchId);
//     }
//   };

//   return (
//     <>
//       <div className="searched-res">
//         <div className="searched-res-det">
//           <div className="searched-res-name">{props.eachRes}</div>
//           <div className="searched-res-ratings">{props.starRating} ⭐</div>
//           <div className="searched-res-direction">
//             <button
//               className="searched-res-direction-btn"
//               onClick={startDirections}
//             >
//               Start Directions 🚗
//             </button>
//             <button
//               className="searched-res-direction-btn"
//               onClick={stopDirections}
//             >
//               Stop Directions 🛑
//             </button>
//           </div>
//         </div>
//       </div>
//       <div id="map" style={{ height: "400px", width: "100%" }}></div>
//     </>
//   );
// }

// export default SearcheResults;



import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./map-style.css";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vw",
};

const center = {
  lat: -43.653225,
  lng: -79.383186,
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsAPiKey: process.env.React_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
      ></GoogleMap>
    </div>
  );
}

export default Map;

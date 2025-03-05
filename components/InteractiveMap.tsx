"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Sample data for markers
import { LatLngTuple } from "leaflet";

const markers: { id: number; position: LatLngTuple; content: string }[] = [
  {
    id: 1,
    position: [48.8566, 2.3522] as LatLngTuple, // Paris, France
    content: "Nous avons produit en Europe",
  },
  {
    id: 2,
    position: [40.7128, -74.006] as LatLngTuple, // New York, USA
    content: "Nous avons produit en Amérique du Nord",
  },
  {
    id: 3,
    position: [-33.8688, 151.2093] as LatLngTuple, // Sydney, Australia
    content: "Nous avons produit en Australie",
  },
  {
    id: 4,
    position: [-22.9068, -43.1729] as LatLngTuple, // Rio de Janeiro, Brazil
    content: "Nous avons produit en Amérique du Sud",
  },
  {
    id: 5,
    position: [35.6895, 139.6917] as LatLngTuple, // Tokyo, Japan
    content: "Nous avons produit en Asie",
  },
  {
    id: 6,
    position: [-1.2921, 36.8219] as LatLngTuple, // Nairobi, Kenya
    content: "Nous avons produit en Afrique",
  },
];

export default function InteractiveMap() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h2 className="text-3xl md:text-4xl lg:text-8xl text-center font-bold font-didot text-cyan-600 mb-8">
        MONDE
      </h2>
      <p className="text-lg text-gray-700 mb-8 text-center ">
        Nous avons produit sur tous les continents
      </p>

      {/* Map Container */}
      <div className="h-[500px] w-full rounded-lg overflow-hidden">
        <MapContainer
          center={[20, 0]} // Center of the map
          zoom={2} // Initial zoom level
          scrollWheelZoom={false} // Disable scroll wheel zoom
          doubleClickZoom={false} // Disable double-click zoom
          touchZoom={false} // Disable touch zoom
          zoomControl={false} // Disable zoom controls
          className="h-full w-full"
        >
          {/* TileLayer for the map */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Markers */}
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={marker.position}
              icon={defaultIcon}
            >
              <Popup>{marker.content}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

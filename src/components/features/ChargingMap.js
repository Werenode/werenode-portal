import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Correction du bug des icônes Leaflet
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl,
  shadowUrl,
});

const ChargingMap = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    // Remplacer cette URL par l'endpoint de votre API Firebase si nécessaire
    fetch('https://api.werenode.com/charging-stations')
      .then(response => response.json())
      .then(data => setStations(data))
      .catch(error => console.error('Erreur lors du chargement des bornes:', error));
  }, []);

  return (
    <MapContainer center={[48.866667, 2.333333]} zoom={12} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {stations.map((station, index) => (
        <Marker key={index} position={[station.latitude, station.longitude]}>
          <Popup>
            <b>{station.name}</b><br/>
            {station.address}<br/>
            Puissance: {station.power} kW
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ChargingMap;

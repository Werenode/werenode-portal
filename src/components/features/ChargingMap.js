import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import BrowserOnly from '@docusaurus/BrowserOnly';

// Chargement dynamique de Leaflet uniquement côté client
const MapContainer = ExecutionEnvironment.canUseDOM
  ? dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false })
  : () => null;
const TileLayer = ExecutionEnvironment.canUseDOM
  ? dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false })
  : () => null;
const Marker = ExecutionEnvironment.canUseDOM
  ? dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false })
  : () => null;
const Popup = ExecutionEnvironment.canUseDOM
  ? dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false })
  : () => null;

// Chargement dynamique des styles Leaflet
if (ExecutionEnvironment.canUseDOM) {
  import('leaflet/dist/leaflet.css');
}

const ChargingMap = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;

    fetch('https://api.werenode.com/charging-stations')
      .then(response => response.json())
      .then(data => setStations(data))
      .catch(error => console.error('Erreur lors du chargement des bornes:', error));
  }, []);

  return (
    <BrowserOnly>
      {() => (
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
      )}
    </BrowserOnly>
  );
};

export default ChargingMap;

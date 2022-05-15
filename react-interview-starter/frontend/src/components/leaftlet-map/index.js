import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// from https://react-leaflet.js.org/

function LeafletMap(props) {
  return (
    <div>
      {props.latlng && (
        <MapContainer center={props.latlng} zoom={13} scrollWheelZoom={false} zoomControl={false} doubleClickZoom={false} dragging={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={props.latlng}></Marker>
        </MapContainer>
      )}
    </div>
  );
}

export default LeafletMap;

import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  return (
      <div id="mapid">
          <MapContainer center={[-33.87704450182364, 151.2066786256421]} zoom={5}>
              <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
          </MapContainer>
      </div>
  );
}

export default App;

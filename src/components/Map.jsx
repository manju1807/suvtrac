import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = () => {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    axios
      .get("/getCoordinates")
      .then((response) => {
        setCoordinates(response.data);
      })
      .catch((error) => {
        console.error("Error fetching coordinates:", error);
      });
  }, []);

  return (
    <div style={{ width: "100%", height: "calc(100vh - 20px)" }}>
      <MapContainer
        center={[48.8566, 2.3522]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coordinates.map((coord, index) => (
          <Marker key={index} position={[coord.lat, coord.lon]} icon={L.icon()}>
            <Popup>
              Latitude: {coord.lat}, Longitude: {coord.lon}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;

import { useState } from "react";
import { useAppContext } from "../context2.js";
import { APIProvider, Map, AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";

export default function FestiMap() {
  const positionReferente = { lat: 45.69999536810878, lng: 5.885166511192596 };

  return (
    <div style={{height: '80vh', width:'100%'}}>
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
            <Map zoom={18} center={positionReferente} mapId={process.env.REACT_APP_MAP_ID}>
              <Markers />
            </Map>
      </APIProvider>
    </div>
  );
}

const Markers = () => {
  const { state } = useAppContext();
  const markersToDisplay = state.markers.map((marker) => ({
    activ: marker.activ,
    libelle: marker.libelle,
    lat: marker.lat,
    lng: marker.lng,
    pinIcon: marker.pinIcon
  }));
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <>
      {markersToDisplay.map((marker, index) => (
        marker.activ ? (
          <AdvancedMarker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            style={{ width: '30px', height: '30px' }}
            onClick={() => setSelectedMarker(marker)}
          >
            <span
              role="img"
              aria-label="dog-marker"
              style={{
                cursor: 'pointer',
                fontSize: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {marker.pinIcon}
            </span>
          </AdvancedMarker>
        ) : null
      ))}
      {selectedMarker && (
        <InfoWindow
          position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <span>{selectedMarker.libelle}</span>
        </InfoWindow>
      )}
    </>
  );
};

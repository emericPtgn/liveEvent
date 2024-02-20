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
  const [selectedMarker, setSelectedMarker] = useState(null);

  const markersToDisplay = state.markers.map((marker) => ({
    activ: marker.activ,
    libelle: marker.libelle,
    lat: marker.lat,
    lng: marker.lng,
    pinIcon: marker.pinIcon,
    type: marker.type,
    description: marker.description,
    more_info: marker.more_info,
  }));

  console.log("Composant Markers - state.markers :", state.markers);



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
    <p style={{ fontWeight: 700 }}>{selectedMarker.type} {selectedMarker.libelle}</p>
    {selectedMarker.type === 'scene' && selectedMarker.description && (
      selectedMarker.description.map((concert, index) => (
        <div key={index}> 
          <p>{concert.artiste}</p> 
          <p>{concert.date} à {concert.heure}</p> 
        </div>
      ))
    )}
        {selectedMarker.type === 'food' && selectedMarker.more_info && (
        <div> 
          <p style={{width: '150px'}}> {selectedMarker.more_info} </p>
        </div>
        )}
  </InfoWindow>
)}



    </>
  );
};

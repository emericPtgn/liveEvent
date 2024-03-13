import { useState } from "react";
import { useAppContext } from "../context2.js";
import { APIProvider, Map, AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";

export default function FestiMap() {
  const positionReferente = { lat: 45.69999536810878, lng: 5.885166511192596 };
  return (
    <div style={{height: '100%', width:'100%'}}>
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
  state.markers.map((marker) => console.log(marker.description))
  return (
    <>
      {state.markers.map((marker, index) => ( marker.activ ? (
        <AdvancedMarker className="advanced-marker" key={marker.id} position={{ lat: marker.lat, lng: marker.lng }} 
        onClick={() => setSelectedMarker(marker)}>
          <span role="img" aria-label="dog-marker"> {marker.pinIcon} </span>
        </AdvancedMarker>
        ) : null ))}
 {selectedMarker && (
      <InfoWindow className='info-window' position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }} 
      onCloseClick={() => setSelectedMarker(null)} >
        <p>{selectedMarker.type} {selectedMarker.libelle}</p>
        {selectedMarker.type === 'scene' && selectedMarker.description && (
          selectedMarker.description.map((concert, index) => (
            <>
            <div key={index}> 
              <p>{concert.artiste}</p> 
              <p>{concert.date} à {concert.heure}</p> 
            </div>
            </>
          ))
        )}
        {selectedMarker.type === 'food' && selectedMarker.more_info && (
        <div> 
          <p> {selectedMarker.more_info} </p>
        </div>
        )}
      </InfoWindow>)}
    </>
  );
};

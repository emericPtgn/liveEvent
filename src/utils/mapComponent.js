import { useState } from "react";
import { useAppContext } from "../context2.js";
import { APIProvider, Map, AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importer les styles Bootstrap

export default function FestiMap() {
  const positionReferente = { lat: 45.69999536810878, lng: 5.885166511192596 };
  
  return (
    <div style={{ height: '100%', width: '100%' }}>
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

  return (
    <>
      {state.markers2 ? state.markers2.map((marker) => (
        <AdvancedMarker 
          className="advanced-marker" 
          key={marker.id} 
          position={{ lat: marker.latitude, lng: marker.longitude }} 
          onClick={() => setSelectedMarker(marker)}
        >
          <span role="img" aria-label="marker-icon"> {marker.icone} </span>
        </AdvancedMarker>
      )) : null}

      {selectedMarker && (
        <InfoWindow 
          position={{ lat: selectedMarker.latitude, lng: selectedMarker.longitude }} 
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div className='info-window'>
            <h4>{selectedMarker.nom}</h4>
            <p>{selectedMarker.description}</p>

            {selectedMarker.type === 'scene' && selectedMarker.programmation && (
              <Tabs defaultActiveKey={Object.keys(selectedMarker.programmation)[0]} id="programmation-tabs">
                {Object.entries(selectedMarker.programmation).map(([date, concerts], index) => (
                  <Tab eventKey={date} title={date} key={index}>
                    {concerts.map((concert, idx) => (
                      <Concert concert={concert} key={idx} />
                    ))}
                  </Tab>
                ))}
              </Tabs>
            )}
          </div>
        </InfoWindow>
      )}
    </>
  );
};

const Concert = ({ concert }) => {
  return (
    <div className="info-window-concert">
      <p>{concert.artiste} : {concert.time}</p>
    </div>
  );
};

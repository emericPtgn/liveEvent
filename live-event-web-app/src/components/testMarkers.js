import React, { useState } from "react";
import { useAppContext } from "../context2.js";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import MarkerLiveEvent from "../utils/markers.js";

const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
const googleMapId = process.env.REACT_APP_MAP_ID;

export default function TestMapFestival() {
  const { state } = useAppContext();

  const shops = state.shops;
  const markers = shops.map(
    (shop, index) =>
      new MarkerLiveEvent(
        shop.nom_du_shop,
        shop.lat,
        shop.lng,
        shop.description_shop
      )
  );

  const positionReferente = {
    lat: 45.69711223183094,
    lng: 5.887098971682286,
  };

  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <APIProvider apiKey={googleMapApiKey}>
      <div className="mx-5 d-flex-column">
        <h1 className="text-center">FestiMAP'</h1>
        <div style={{ height: "80vh", width: "100%" }}>
          <Map zoom={19} center={positionReferente} mapId={googleMapId}>
            {markers.map((marker, index) => (
              <AdvancedMarker
                key={index}
                position={marker.position}
                onClick={() => setSelectedMarker(marker)}
              >
                <Pin
                  background={"grey"}
                  borderColor={"green"}
                  glyphColor={"purple"}
                />
              </AdvancedMarker>
            ))}
            {selectedMarker && (
              <InfoWindow
                position={selectedMarker.position}
                onCloseClick={() => setSelectedMarker(null)}
              >
                <div>
                  <p>{selectedMarker.nom_du_shop}</p>
                  <p>{selectedMarker.description}</p>
                </div>
              </InfoWindow>
            )}
          </Map>
        </div>
      </div>
    </APIProvider>
  );
}

import { useState } from "react"
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps"

const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY
const googleMapId = process.env.REACT_APP_MAP_ID

export default function MapFestival(){
    const position = { lat: 45.69811635186274, lng: 5.8865488133052875 };
    const [open, setOpen] = useState(false);

    return (
        <APIProvider apiKey={googleMapApiKey}>
            <div className=" mx-5 d-flex-column">
                <h1 className="text-center">FestiMAP'</h1>
                <div style={ { height: "80vh", width: "100%" }}>
                    <Map 
                    zoom={20 } 
                    center={position} 
                    mapId={googleMapId} 
                    >
                        <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                            <Pin background={"grey"} borderColor={"green"} glyphColor={"purple"}></Pin>
                        </AdvancedMarker>

                        {open && (
                            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                            <p>liveEvent Festival !</p>
                            </InfoWindow>
                            )}
                    </Map>
                </div>
            </div>
        </APIProvider>
    )
}


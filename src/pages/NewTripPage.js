import { useLoadScript } from "@react-google-maps/api";
import { useCallback, useMemo, useRef, useState } from "react"
import { HitchMap } from "../components/map/HitchMap";
import { CreateTrip } from "../components/trip/CreateTrip"
import { create_new_trip } from "../components/trip/TripAuthManager";

import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  InfoBox,
  DirectionsService,
  MarkerClusterer,
  Polyline,
  InfoWindow,
} from "@react-google-maps/api";
import { Link } from "react-router-dom";
/*global google*/
const google = window.google = window.google ? window.google : {}

export const NewTripPage = ({isDriver, setIsDriver, refresh, setRefresh, mapRef, setMapRef, tempTrip, setTempTrip, origin, setOrigin, destination, setDestination, originPlace, setOriginPlace, destinationPlace, setDestinationPlace}) => {
    const [directions, setDirections] = useState()
    const [showInfoBox, setShowInfoBox] = useState(false)
    const [searchPoint, setSearchPoint] = useState()
    
    

    

    const onLoad = useCallback(map => (setMapRef(map)), [searchPoint])

  

    const options = useMemo(
        () => ({
        mapId: "919771f94d285faa",
        disableDefaultUI: true,
        clickableIcons: false,
        }),
        []
      )


    // process.env.GOOGLE_MAPS_API_KEY
    const {isLoaded} = useLoadScript({
        
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    })
    


    if(!isLoaded){

        return <div>Loading...</div>
    } else {

    return (
        <>
         {isDriver ? <h1>New Driver Trip</h1> : <h1>New Passenger Trip</h1>}
            
            <div className="homepage-trip-list">
                <CreateTrip isDriver={isDriver} tempTrip={tempTrip} setTempTrip={setTempTrip} origin={origin} destination={destination} setOrigin={setOrigin} setDestination={setDestination} originPlace={originPlace} setOriginPlace={setOriginPlace} destinationPlace={destinationPlace} setDestinationPlace={setDestinationPlace} />
            </div>

            {/* <div className="homepage-map-container">
                <div className="map">
                        <GoogleMap 
                            zoom={11} 
                            center={searchPoint} 
                            mapContainerClassName="map" 
                            options={options}
                            onLoad={onLoad}
                           
                            
                            >
                                </GoogleMap>

                </div>
            </div> */}
            
        </>
    )
}
}
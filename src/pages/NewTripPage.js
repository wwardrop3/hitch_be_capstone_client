import { useLoadScript } from "@react-google-maps/api";
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { HitchMap } from "../components/map/HitchMap";
import { CreateTrip } from "../components/trip/CreateTrip"
import { create_new_trip } from "../components/trip/TripAuthManager";
import "../pageStyles/newTripPage.css"
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
import { CreateDriverTrip } from "../components/trip/CreateDriverTrip";
import { CreatePassengerTrip } from "../components/trip/CreatePassengerTrip";
/*global google*/
const google = window.google = window.google ? window.google : {}

export const NewTripPage = ({tempTrip, setTempTrip, isDriver, setIsDriver, highlight, setHighlight, pathHighlight, setPathHighlight}) => {
    const [directions, setDirections] = useState()
    const [showInfoBox, setShowInfoBox] = useState(false)
    const userLocation = useMemo(()=> ({lat: parseFloat(localStorage?.getItem("lat")), lng: parseFloat(localStorage?.getItem("lng"))}),[])
    const [selectedPoint, setSelectedPoint] = useState()
    const [searchPoint, setSearchPoint] = useState(userLocation)
    const [trips, setTrips] = useState()
    const [mapRef, setMapRef] = useState()
    const [refresh, setRefresh] = useState()
    const [origin, setOrigin] = useState()
    const [destination, setDestination] = useState()
    const [originPlace, setOriginPlace] = useState()
    const [destinationPlace, setDestinationPlace]= useState()
    
    const onLoad = useCallback(map => (setMapRef(map)))

    // process.env.GOOGLE_MAPS_API_KEY
    const {isLoaded} = useLoadScript({
        
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    })

    

    useEffect(
        () => {
            setMapRef(mapRef?.panTo(searchPoint))
        },[searchPoint]
    )
    


  

    const options = useMemo(
        () => ({
        mapId: "919771f94d285faa",
        disableDefaultUI: true,
        clickableIcons: false,
        }),
        []
      )

      const fetchDirections = () => {
        
        if(searchPoint != undefined){

        const service = new google.maps.DirectionsService();
        service.route(
            {
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === "OK" && result) {
                    setDirections(result)
                }
            }
        )
    }
}

    


    if(!isLoaded){

        return <div>Loading...</div>
    } else {

    return (
        <>
        <div className="new-trip-page-container">
            <div className="new-trip-page-header">

                {isDriver ? <h1>New Driver Trip</h1>: <h1>New Passenger Trip</h1>}
                <div className="type-toggle">
                    <div class="switch-button">
                        <input class="switch-button-checkbox" type="checkbox" 
                        onClick={
                            () => {
                                setIsDriver(!isDriver)
                                setRefresh(!refresh)
                        
                            
                            }}
                                
                                ></input>
                        <label class="switch-button-label" for=""><span class="switch-button-label-span">Driver</span></label>
                    </div>
                </div>

                
            </div>

            <div className="new-trip-page-content">
                {isDriver ? 
          
           
                    <CreateDriverTrip searchPoint={searchPoint} setSearchPoint={setSearchPoint} selectedPoint={selectedPoint} setSelectedPoint={setSelectedPoint} directions = {directions} setDirections={setDirections} showInfoBox={showInfoBox} setShowInfoBox={setShowInfoBox} mapRef={mapRef} setMapRef={setMapRef} userLocation={userLocation} trips = {trips} setTrips={setTrips} onLoad={onLoad} isDriver={isDriver} tempTrip={tempTrip} setTempTrip={setTempTrip} origin={origin} destination={destination} setOrigin={setOrigin} setDestination={setDestination} originPlace={originPlace} setOriginPlace={setOriginPlace} destinationPlace={destinationPlace} setDestinationPlace={setDestinationPlace} highlight={highlight} setHighlight={setHighlight} pathHighlight={pathHighlight} setPathHighlight={setPathHighlight} />
                
            
                :

                    <CreatePassengerTrip fetchDirections={fetchDirections} searchPoint={searchPoint} setSearchPoint={setSearchPoint} selectedPoint={selectedPoint} setSelectedPoint={setSelectedPoint} directions = {directions} setDirections={setDirections} showInfoBox={showInfoBox} setShowInfoBox={setShowInfoBox} mapRef={mapRef} setMapRef={setMapRef} userLocation={userLocation} trips = {trips} setTrips={setTrips} onLoad={onLoad} isDriver={isDriver} tempTrip={tempTrip} setTempTrip={setTempTrip} origin={origin} destination={destination} setOrigin={setOrigin} setDestination={setDestination} originPlace={originPlace} setOriginPlace={setOriginPlace} destinationPlace={destinationPlace} setDestinationPlace={setDestinationPlace} highlight={highlight} setHighlight={setHighlight} pathHighlight={pathHighlight} setPathHighlight={setPathHighlight}/>


        }
        </div>

            
    </div>
        </>
    )
}
}

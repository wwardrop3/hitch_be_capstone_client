import { useLoadScript } from "@react-google-maps/api";
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import "./trip.css"
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
import { Link, useHistory } from "react-router-dom";
import { TripList } from "./TripList";
import { NewTripHitchMap } from "../map/NewTripHitchMap";
import { create_new_passenger_trip, get_all_driver_trips, get_driver_trips_by_passenger_trip } from "./TripAuthManager";
import { Places } from "../map/Places";
import { HitchMap } from "../map/HitchMap";
/*global google*/
const google = window.google = window.google ? window.google : {}

export const CreatePassengerTrip = ({showInfoBox, setShowInfoBox, selectedPoint, setSelectedPoint, directions, setDirections, mapRef, setMapRef, userLocation, searchPoint, setSearchPoint, onLoad, highlight, setHighlight, pathHighlight, setPathHighlight, isDriver, setIsDriver, tempTrip, setTempTrip, origin, setOrigin, destination, setDestination, originPlace, setOriginPlace, destinationPlace, setDestinationPlace}) => {
   
    const history = useHistory()
    const [refresh, setRefresh] = useState(false)
    const [recTrips, setRecTrips] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        create_new_passenger_trip(tempTrip).then(
            () => {
                history.push("/home")
            })
  
    }




    const fetchDirections = () => {
        
        const service = new google.maps.DirectionsService();
        service.route(
            {
                origin: searchPoint,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === "OK" && result) {
                    const copy = {...tempTrip}
                    copy.path = result.routes[0].overview_polyline
                    copy.trip_distance = result.routes[0].legs[0].distance.value
                    copy.expected_travel_time = result.routes[0].legs[0].duration.value
                    copy.origin = searchPoint
                    copy.destination = destination
                    copy.origin_place = originPlace
                    copy.destination_place = destinationPlace
                    copy.is_approved = false
                    setTempTrip(copy)
                    get_driver_trips_by_passenger_trip(copy)
                    .then(
                        (response) => {
                            setRecTrips(response)
                        }
                    )

                }
            }
        )
    }

    useEffect(
        () => {
            fetchDirections()
        }, [destinationPlace]
    )
    

    
   
  

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
            <div className="create-new-trip-container">

                <div className="new-trip-form">


                    <div className="field">
                            
                            <label className="label">Departure Date/Time</label>
                            <div className="control">
                                <input className="input" type="datetime-local"
                                onChange = {
                                    (evt) => {
                                        const copy = {...tempTrip}
                                        copy.start_date = evt.target.value
                                        setTempTrip(copy)
                                    }
                                } />
                            </div>
                        </div>

      
                    {/* <div className="field">
                        <label className="label">Trip Summary</label>
                        <div className="control">
                            <input className="input" type="text" 
                            onChange = {
                                (evt) => {
                                    const copy = {...tempTrip}
                                    copy.trip_summary = evt.target.value
                                    setTempTrip(copy)
                                }
                            }/>
                        </div>
                    </div> */}
                    <div className="search-box">
                        <h3>Select Origin</h3>
                        {/* stores the lat/lng of office they chose, also want to move the map to that location */}
                        <Places
                        searchPoint={searchPoint}
                        setSearchPoint={setSearchPoint}
                        place={originPlace}
                        setPlace={setOriginPlace}
                        />
                    </div>

                    
         
                        


                    <div className="search-box">
                        <h3>Select Destination</h3>
                        <Places
                        searchPoint={destination}
                        setSearchPoint={setDestination}
                        place={destinationPlace}
                        setPlace={setDestinationPlace}
                        />
                    </div>
                
                            
                            
                    
                        
                    <div className="control">
                        <button className="button is-link" 
                        onClick={
                            (evt) => {
                                // handleSubmit(evt)
                                history.push("/home")
                            }
                        }>Return Home to Search</button>
                    </div>

                    
                    
                </div>
               
           




                <div className="create-new-trip-trips-container">

                    <div className="trip-list">
                        <h4>Recommended Trips</h4>
                        <TripList trips = {recTrips} refresh = {refresh} setRefresh = {setRefresh} highlight = {highlight} setHighlight = {setHighlight} pathHighlight = {pathHighlight} setPathHighlight={setPathHighlight} isDriver={isDriver} tempTrip={tempTrip} setTempTrip={setTempTrip} />    

                    </div>

                        <NewTripHitchMap fetchDirections={fetchDirections} userLocation={userLocation} onLoad={onLoad} searchPoint={searchPoint} setSearchPoint={setSearchPoint} selectedPoint={selectedPoint} setSelectedPoint={setSelectedPoint} trips={recTrips} mapRef = {mapRef} setDirections={setDirections} directions = {directions} setShowInfoBox = {setShowInfoBox} showInfoBox = {showInfoBox} highlight = {highlight} setHighlight = {setHighlight} pathHighlight = {pathHighlight} setPathHighlight={setPathHighlight} origin = {searchPoint} destination={destination} />

                    
                </div>

     

       
            </div>  
           
        </>
    )
                    }
                }


import { useLoadScript } from "@react-google-maps/api";
import { useCallback, useMemo, useRef, useState } from "react"
import { HitchMap } from "../components/map/HitchMap";
import { CreateTrip } from "../components/trip/CreateTrip"
import { create_new_trip } from "../components/trip/TripAuthManager";

export const NewTripPage = ({refresh, setRefresh}) => {
    const [directions, setDirections] = useState()
    const [showInfoBox, setShowInfoBox] = useState(false)
    const [cityState, setCityState] = useState()
    const userLocation = useMemo(()=> ({lat: parseFloat(localStorage?.getItem("lat")), lng: parseFloat(localStorage?.getItem("lng"))}),[])
    const [searchPoint, setSearchPoint] = useState()
    const [trips, setTrips] = useState()
    const [mapRef, setMapRef] = useState()

    
    
    // Form fields to create driver trip
    const [origin, setOrigin] = useState()
    const [destination, setDestination] = useState()
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
            <div className="homepage-trip-list">
                <CreateTrip refresh={refresh} setRefresh={setRefresh} mapRef={mapRef} setMapRef = {setMapRef}/>
            </div>

            {/* <div className="homepage-map-container">
                <HitchMap onLoad = {onLoad} userLocation= {userLocation} origin = {origin} destination={destination} setDirections={setDirections} directions = {directions} setShowInfoBox = {setShowInfoBox} showInfoBox = {showInfoBox} = {searchPoint} setFocusTrip = {setFocusTrip} mapRef={mapRef} setMapRef = {setMapRef} />

            </div> */}
            
        </>
    )
}}
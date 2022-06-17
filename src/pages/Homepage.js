import { useLoadScript } from "@react-google-maps/api"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { HitchMap } from "../components/map/HitchMap"
import { Places } from "../components/map/Places"
import { get_all_driver_trips, get_all_driver_trips_decoded, get_all_passenger_trips, get_decoded_trips } from "../components/trip/TripAuthManager"
import { TripList } from "../components/trip/TripList"
import "../pageStyles/homepage.css"



// focus trip is trip clicked on in the map
// focus trip location


export const HomePage = ({isDriver}) => {
    
    const [directions, setDirections] = useState()
    const [showInfoBox, setShowInfoBox] = useState(false)
    const userLocation = useMemo(()=> ({lat: parseFloat(localStorage?.getItem("lat")), lng: parseFloat(localStorage?.getItem("lng"))}),[])
    const [selectedPoint, setSelectedPoint] = useState()
    const [highlight, setHighlight] = useState(false)
    const [searchPoint, setSearchPoint] = useState(userLocation)
    const [trips, setTrips] = useState()
    const [mapRef, setMapRef] = useState()
    const [refresh, setRefresh] = useState()


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
    
    // isDriver ? get_all_passenger_trips(searchPoint.lat, searchPoint.lng) :

    useEffect(
        () => {
            get_all_driver_trips(searchPoint.lat, searchPoint.lng)
            .then(
                (response) => {
                    setTrips(response)}
            )
        },[refresh, searchPoint, isDriver]
        
    
    )
    if (!isLoaded){

        return <div>Loading...</div>
    } else
    {

    
    return (
        <>
        <div className="homepage-container">
        
            <div className="homepage-trip-list">
                <TripList trips = {trips} refresh = {refresh} setRefresh = {setRefresh} />    
            </div>

            <div className="location-search">
                    <h2>Search Area</h2>
                    <div className="search-box">
                        {/* stores the lat/lng of office they chose, also want to move the map to that location */}
                        <Places
                        searchPoint={searchPoint}
                        setSearchPoint={setSearchPoint}
                         
                        
                        
                        
                        
                        
        
                        
                        />
                    </div>

                    
            </div>
       

            <div className="homepage-map-container">
                    <HitchMap userLocation={userLocation} onLoad={onLoad} searchPoint={searchPoint} setSearchPoint={setSearchPoint} selectedPoint={selectedPoint} setSelectedPoint={setSelectedPoint} trips={trips} mapRef = {mapRef} setDirections={setDirections} directions = {directions} setShowInfoBox = {setShowInfoBox} showInfoBox = {showInfoBox}/>
                   
            
            </div>
            
            </div>
        </>
    )
}}
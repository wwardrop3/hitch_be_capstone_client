import { useLoadScript } from "@react-google-maps/api"
import { useCallback, useEffect, useMemo, useState } from "react"
import { HitchMap } from "../components/map/HitchMap"
import { Places } from "../components/map/Places"
import { get_all_driver_trips } from "../components/trip/TripAuthManager"
import { TripList } from "../components/trip/TripList"
import "../pageStyles/homepage.css"



// focus trip is trip clicked on in the map
// focus trip location


export const HomePage = ({ tempTrip, isDriver, highlight, setHighlight, pathHighlight, setPathHighlight }) => {

    const [directions, setDirections] = useState()
    const [showInfoBox, setShowInfoBox] = useState(false)
    const userLocation = useMemo(() => ({ lat: parseFloat(localStorage?.getItem("lat")), lng: parseFloat(localStorage?.getItem("lng")) }), [])
    const [selectedPoint, setSelectedPoint] = useState()
    const [searchPoint, setSearchPoint] = useState(userLocation)
    const [trips, setTrips] = useState()
    const [mapRef, setMapRef] = useState()
    const [refresh, setRefresh] = useState()


    const onLoad = useCallback(map => (setMapRef(map)))

    // process.env.GOOGLE_MAPS_API_KEY
    const { isLoaded } = useLoadScript({

        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    })

    useEffect(
        () => {
            setMapRef(mapRef?.panTo(searchPoint))
        }, [searchPoint]
    )

    // isDriver ? get_all_passenger_trips(searchPoint.lat, searchPoint.lng) :

    useEffect(
        () => {
            get_all_driver_trips(searchPoint.lat, searchPoint.lng)
                .then(
                    (response) => {

                        setTrips(response.sort((a, b) => new Date(a.start_date) - new Date(b.start_date)))
                    }
                )
        }, [refresh, searchPoint]



    )
    if (!isLoaded) {

        return <div>Loading...</div>
    } else {


        return (
            <>
                <div className="homepage-container">

                    <div className="homepage-trip-list">
                        <TripList tempTrip={tempTrip} trips={trips} refresh={refresh} setRefresh={setRefresh} highlight={highlight} setHighlight={setHighlight} pathHighlight={pathHighlight} setPathHighlight={setPathHighlight} isDriver={isDriver} />
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
                        <HitchMap userLocation={userLocation} onLoad={onLoad} searchPoint={searchPoint} setSearchPoint={setSearchPoint} selectedPoint={selectedPoint} setSelectedPoint={setSelectedPoint} trips={trips} mapRef={mapRef} setDirections={setDirections} directions={directions} setShowInfoBox={setShowInfoBox} showInfoBox={showInfoBox} highlight={highlight} setHighlight={setHighlight} pathHighlight={pathHighlight} setPathHighlight={setPathHighlight} />


                    </div>

                </div>
            </>
        )
    }
}
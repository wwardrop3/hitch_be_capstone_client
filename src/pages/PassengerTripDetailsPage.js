import { GoogleMap, LoadScript, Marker, Polyline } from "@react-google-maps/api"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { get_passenger_trip } from "../components/trip/TripAuthManager"
import "../pageStyles/tripDetailsPage.css"



export const PassengerTripDetailsPage = ({ isDriver, setIsDriver }) => {
    const [trip, setTrip] = useState()
    const [mapRef, setMapRef] = useState()

    const { passengerTripId } = useParams()
    const onLoad = useCallback(map => (setMapRef(map)))




    //WHEN VIEWING PASSENGER TRIP DETAIL, MAP OUT ALL RECOMMENDED TRIPS AS WELL

    useEffect(
        () => {
            get_passenger_trip(passengerTripId)
                .then(
                    (response) => {
                        setTrip(response)
                    }
                )
        }, []

    )

    const options = useMemo(
        () => ({
            mapId: "919771f94d285faa",
            disableDefaultUI: true,
            clickableIcons: false,
        }))


    const lineOptions = {
        strokeColor: 'blue',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        path: trip?.path_points
    };

    return (
        <>

            <div className="trip-details-page-container">
                <div className="trip-content">
                    <h2>Trip Detail</h2>

                    <div className="trip-detail-column-1">
                        <div className="trip-date">
                            {new Date(trip?.start_date).toDateString()}
                        </div>

                        <div className="trip-info">
                            {(trip?.expected_travel_time / 3600).toPrecision(2)} Hours
                        </div>

                        <div className="trip-info">
                            {(trip?.trip_distance / 1601).toPrecision(5)} Miles
                        </div>

                        <div className="trip-info">
                            {trip?.destination.city}
                        </div>

                        <div className="trip-info">
                            {trip?.driver_trips[0].driver.user?.first_name}
                        </div>



                        <div className="trip-info">
                            {trip?.trip_summary}
                        </div>

                    </div>

                    <div className="trip-detail-column-1">

                    </div>

                </div>

                <div className="trip-map">
                    <LoadScript
                        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                        <GoogleMap
                            mapContainerClassName="map"
                            center={trip?.origin}
                            zoom={9}
                            options={options}
                            onLoad={onLoad}
                        >
                            <Polyline

                                path={trip?.path_points}
                                options={lineOptions}
                            />


                            <Marker
                                key={parseFloat(trip?.origin.lat)}
                                position={trip?.origin}




                            />

                            <Marker
                                key={parseFloat(trip?.destination.lat)}
                                position={trip?.destination}


                            />

                        </GoogleMap>
                    </LoadScript>







                </div>
            </div>

        </>
    )

}
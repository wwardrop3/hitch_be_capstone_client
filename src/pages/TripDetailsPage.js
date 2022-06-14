import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { get_driver_trip } from "../components/trip/TripAuthManager"
import { TripDetail } from "../components/trip/TripDetail"

export const TripDetailsPage = () => {
    const [trip, setTrip] = useState()
    const { driverTripId } = useParams()

    useEffect(
        get_driver_trip(parseInt(driverTripId))
        .then(
            (response) => {
                setTrip(response)
            }
        ),[]
    )


    return (
        <>
            Trip Detail Page

            <div className="trip-details-page-container">

                <TripDetail trip={trip} />

            </div>
        </>
    )
}
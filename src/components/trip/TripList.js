import { TripListTrip } from "./TripListTrip"
import "./trip.css"
import { useEffect, useState } from "react"
import { get_all_trips } from "./TripAuthManager"


export const TripList = () => {

    const [trips, setTrips] = useState()

    // useEffect(
    // get_all_trips()
    // .then(
    //     (response) => {
    //         setTrips(response)
    //     },[]
    // )
    
    // )

    return (
        <>
            <div className="trip-list">
                {/* {trips.map(trip => {
                    return (
                        <TripListTrip trip = {trip} />
                    )
               
                })} */}
                
            </div>
   
        </>
    )
}
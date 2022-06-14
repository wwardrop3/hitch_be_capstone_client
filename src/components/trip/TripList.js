import { TripListTrip } from "./TripListTrip"
import "./trip.css"



export const TripList = ({trips, refresh, setRefresh}) => {

   

    return (
        <>
        <div className="trip-list-container">
            {trips ? trips.map(trip => {
                return (
                    <TripListTrip trip = {trip} refresh = {refresh} setRefresh={setRefresh} />
                )
            
            }):""}

        </div>
             
    
   
        </>
    )
}
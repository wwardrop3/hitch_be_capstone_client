import { TripListTrip } from "./TripListTrip"
import "./trip.css"



export const TripList = ({trips, refresh, setRefresh}) => {

   

    return (
        <>
        <div className="trip-list-container">
            {trips?.length == 0 ? <div>No Trips In The Area</div> :
            trips ? trips.map(trip => {
                return (
                    <TripListTrip trip = {trip} refresh = {refresh} setRefresh={setRefresh} />
                )
            
            }):""}

        </div>
             
    
   
        </>
    )
}
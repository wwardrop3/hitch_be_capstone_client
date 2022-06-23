import { TripListTrip } from "./TripListTrip"
import "./trip.css"



export const TripList = ({tempTrip, trips, refresh, setRefresh, highlight, setHighlight, pathHighlight, setPathHighlight, isDriver}) => {

   

    return (
        <>
        <div className="trip-list-container">
            {trips?.length == 0 ? <div>No Trips In The Area</div> :
            trips ? trips.map(trip => {
                return (
                    
                    <TripListTrip tempTrip={tempTrip} trip = {trip} refresh = {refresh} setRefresh={setRefresh} highlight = {highlight} setHighlight={setHighlight} pathHighlight = {pathHighlight} setPathHighlight={setPathHighlight} isDriver={isDriver} />
                  
                )
            
            }):""}

        </div>
             
    
   
        </>
    )
}
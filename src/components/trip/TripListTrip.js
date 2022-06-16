import { Link, useHistory } from "react-router-dom"
import "./trip.css"
import { delete_driver_trip, remove_passenger, sign_up_passenger, update_driver_trip } from "./TripAuthManager"

export const TripListTrip = ({trip, refresh, setRefresh}) => {

    const history = useHistory()


    
    return(
        <>    
        
        <div className="trip-list-trip-container">

            <div className="image-container">

                <img className="trip-list-trip-profile-picture" src={trip.driver.profile_image_url}/>

            </div>

            
            <div className="trip-list-trip-content">
            <Link to={`/trips/${trip.id}`}>
                <div className="trip-list-trip-info">
                    <table>
                        <tbody>
                            <tr>
                                <th colSpan={3}>{trip.driver.user['first_name']}</th>
                            </tr>
                            <tr>
                                <td>Seats: {trip.seats}</td>
                                <td>Trip Distance: {parseInt(trip.trip_distance/ 1609)} miles</td>
                                <td>Trip Duration: {parseInt(trip.expected_travel_time / 3600)} hours </td>
                               
                            </tr>
                        </tbody>
                    </table>



       
                    
                </div>

                <div className="trip-list-trip-dates">
                    <table>
                        <tbody>
                            <tr>
                                <th>Start Date</th>
                                <td>{new Date(trip.start_date).toDateString()}</td>
                            </tr>

                        </tbody>
                    </table>
                    
                </div>
                </Link>
                {trip.is_user ? 
                <>
                 <button
                                onClick={
                                    () => {
                                        delete_driver_trip(trip.id)
                                        .then(
                                            () => {
                                                setRefresh(!refresh)
                                            }
                                        )
                                    }
                                }>Delete Trip</button>

                
                </>
                                
                               

                                :
                                trip.is_signed_up ?
                                <button
                                onClick={
                                    () => {
                                        remove_passenger(trip)
                                        .then(
                                            () => {
                                                setRefresh(!refresh)
                                            }
                                        )
                                    }
                                }>Cancel Ride</button>
                            
                            :
                            <button
                                onClick={
                                    () => {
                                        sign_up_passenger(trip)
                                        .then(
                                            () => {
                                                setRefresh(!refresh)
                                            }
                                        )
                                    }
                                }>Request Ride</button>
                            
                            
                            }

            </div>

    
        </div>
        
        </>
    )
}
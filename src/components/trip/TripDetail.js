import { useHistory } from "react-router-dom"
import "./trip.css"
import { delete_driver_trip } from "./TripAuthManager"

export const TripDetail = ({trip}) => {

    const history = useHistory()

    return(
        <>    
        <div className="trip-list-trip-container">

            <img className="trip-list-trip-profile-picture" src={trip?.driver.profile_image_url}/>


            <div className="trip-list-trip-content">
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
                            <tr>
                                <th>End Date</th>
                                <td>{new Date(trip.completion_date).toDateString()}</td>

                            </tr>

                        </tbody>
                    </table>
                </div>
                {trip.is_user ? 
                                
                                <button
                                onClick={
                                    () => {
                                        delete_driver_trip(trip.id)
                                        .then(
                                            () => {
                                                history.push("/")
                                            }
                                        )
                                    }
                                }>Delete Trip</button>

                                :""}

            </div>

        </div>
        
        </>
    )
}
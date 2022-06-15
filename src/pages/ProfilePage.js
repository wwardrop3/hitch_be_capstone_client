import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { TripListTrip } from "../components/trip/TripListTrip"
import "../pageStyles/profile_page.css"
import { delete_member, get_member } from "./PagesAuthManager"
import { TripDetailsPage } from "./TripDetailsPage"

export const ProfilePage = () => {
    const history = useHistory()

    const [member, setMember] = useState()


    useEffect(
        () => {
            get_member()
            .then(
                (response) => {
                    setMember(response)
                }
            )
        },[]
    )


    return (
        <>
            
        <div className="profile-page-container">

            <div className="profile-page-column-1">

                <div className="profile-image-container">

                    <img className="profile-image" src={member?.profile_image_url} />
                    <h2>{member?.user.first_name}</h2>
                    <button
                                onClick={
                                    () => {
                                    
                                        delete_member(member?.id)
                                        .then(
                                            () => {
                                                localStorage.removeItem("token")
                                                history.push("/login")
                                            }
                                        )
                                    }
                                }>Delete Account</button>

                </div>

                <div className="profile-stats-container">

                    <h4>Quick Stats</h4>

                    <table>
                        <tbody>
                            <tr>
                                <th>Avg Rating</th>
                                <th># of Ratings</th>
                            </tr>

                            <tr>
                                <th>Total Trips</th>
                                <th>Total Miles</th>
                            </tr>

                            <tr>
                                <th># of Passengers</th>
                                <th>Total Travel Time</th>
                            </tr>

                        </tbody>
                    </table>

                </div>

            </div>

            <div className="profile-page-column-2">
                <div className="driver-trips">

                <h2>Driver Trips</h2>

                {member?.driver_trips.map(trip => {
                    return(
                        <>
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
                        
                        </>
                    )
                })}
                </div>


                <div className="driver-trips">

                <h2>Passenger Trips</h2>

                {member?.passenger_trips.map(trip => {
                    return(
                        <>
                        <Link to={`/trips/${trip.id}`}>
                        <div className="trip-list-trip-info">
                            <table>
                                <tbody>
                                    <tr>
                                        <th colSpan={3}>{trip.driver?.user['first_name']}</th>
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
                        
                        </>
                    )
                })}
                </div>
               
                
            </div>

        </div>


        </>
    )
}
import { refresh } from "@cloudinary/url-gen/qualifiers/artisticFilter"
import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { delete_driver_trip, delete_passenger_trip } from "../components/trip/TripAuthManager"
import { TripListTrip } from "../components/trip/TripListTrip"
import "../pageStyles/profile_page.css"
import { delete_member, get_member } from "./PagesAuthManager"
import { TripDetailsPage } from "./TripDetailsPage"

export const ProfilePage = () => {
    const history = useHistory()
    const [refresh, setRefresh] = useState(false)
    const [member, setMember] = useState()


    useEffect(
        () => {
            get_member()
            .then(
                (response) => {
                    setMember(response)
                }
            )
        },[refresh]
    )




    return (
        <>
            
        <div className="profile-page-container">

            <div className="profile-page-column-1">

                <div className="profile-image-container">

                    <img className="profile-image" src={member?.profile_image_url} />
                    <h2>{member?.user.first_name}</h2>
                    <h3>{member?.bio}</h3>
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

                   <div>
                        <p>Avg Rating: {member?.avg_rating ? member?.avg_rating: "No Ratings Yet"}</p>
                        <p>Number of Ratings: {member?.total_ratings ? member?.total_ratings: "No Ratings Yet"}</p>
                   </div>

                </div>

            </div>

            <div className="profile-page-column-2">
                <h2>Driver Trips</h2>
                <div className="trips">

               

                {member?.driver_trips.map(trip => {
                    return(
                        <>
                        <Link to={`/driver_trips/${trip.id}`}>
                        <div className="trip-list-trip-info">
                            <table>
                                <tbody>
                                    <tr>
                                        <th colSpan={3}>{trip?.driver.user['first_name']}</th>
                                    </tr>
                                    <tr>
                                        <td>Seats: {trip.seats}</td>
                                        <td>Trip Distance: {parseInt(trip.trip_distance/ 1609)} miles</td>
                                        <td>Trip Duration: {parseInt(trip.expected_travel_time / 3600)} hours </td>
                                    
                                    </tr>
                                </tbody>
                            </table>



            
                            
                        

                        <div className="trip-list-trip-dates">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Start Date</th>
                                        <td>{new Date(trip.start_date).toDateString()}</td>
                                    </tr>

                                    <tr>
                                        <th>Status</th>
                                        <td>{trip.completed ? "Completed" : "Not Completed"}</td>
                                    </tr>

                                </tbody>
                            </table>
                            
                        </div>

                        {/* {trip?.is_requested ? 
                        <div>
                            <button
                            onClick={
                                () => {
                                    approve_passenger()
                                }
                            }>Approve Passenger</button>
                        </div>
                        
                    
                    :
                    <button
                    onClick={
                        () => {
                            reject_passenger()
                        }
                    }
                    >Reject Request</button>
                
                } */}
                </div>
                        </Link>
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
                    )
                })}
                </div>
                

                <h2>Passenger Trips</h2>
                <div className="trips">

               
                {member?.passenger_trips.map(trip => {
                    return(
                        <>
                        <Link to={`/passenger_trips/${trip.id}`}>
                        <div className="trip-list-trip-info">
                             
                            <div>{trip.origin_place} to {trip.destination_place}</div>
                            <p>Trip Distance: {parseInt(trip.trip_distance/ 1609)} miles</p>
                            <p>Trip Duration: {parseInt(trip.expected_travel_time / 3600)} hours </p>
                            


            
                            
                        

                        <div className="trip-list-trip-dates">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Start Date</th>
                                        <td>{new Date(trip.start_date).toDateString()}</td>
                                    </tr>

                                    {/* <tr>
                                        <th>Status</th>
                                        <td>{trip.completed}</td>
                                    </tr> */}

                                </tbody>
                            </table>
                            
                        </div>
                        </div>
                        </Link>

                        <button
                            onClick={
                                () => {
                                    delete_passenger_trip(trip.id)
                                    .then(
                                        () => {
                                            setRefresh(!refresh)
                                        }
                                    )
                                }
                            }>Delete Trip</button>
                           
                        
                        </>
                    )
                })}
                </div>
               
                
            </div>

        </div>


        </>
    )
}
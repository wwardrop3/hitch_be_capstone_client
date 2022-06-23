import { useState } from "react"
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";import { Link, useHistory } from "react-router-dom"
import "./trip.css"
import { delete_driver_trip, rate_driver, remove_passenger, sign_up_passenger, update_driver_trip } from "./TripAuthManager"
import { useEffect } from "react";
import { create_new_message } from "../message/MessageAuthManager";
import { NewMessage } from "../message/NewMessage";

export const TripListTrip = ({trip, refresh, setRefresh, pathHighlight, setPathHighlight, highlight, setHighlight}) => {

    const [showRating, setShowRating]= useState(false)
    const [rating, setRating] = useState({})
    const [showMessage, setShowMessage] = useState(false)


    useEffect(
        () => {
            setRating({
                driver_trip: trip.id,
                passenger_trip: trip.passenger_trips[0]?.id,
                rating: 0,
                review: ""
            })
        },[trip]
    )
    const history = useHistory()

    const ratingChanged = (newRating) => {
        const copy = {...rating}
        copy.rating = newRating
        setRating(copy)
        }
        
    

    const handleSubmit = (trip) => {
        const copy = {...trip}
        copy.completed = true
        copy.completion_date = Date.now()
        // update_driver_trip(copy)
        update_driver_trip(copy).then(
            () => {

                rate_driver(rating)
                .then(
                    () => {
                        setShowRating(!showRating)
                        setRefresh(!refresh)
                    }
                )
            }
        )
        

    }

    const isSelected = (propertyId, highlightId, trip) => {
        if(highlightId === propertyId){
            return "lightGreen"
        }
        else if (trip?.is_recommended){
            return "yellow"
        }
    }
    
     
        
    


    return(
        <>    
        
        <div className="trip-list-trip-container" style={{backgroundColor: isSelected(trip.id, highlight, trip)}}
     
        onMouseOver={
            () => {
                setPathHighlight(trip.id)
                setHighlight(trip.id)
            }
        }
        
        onMouseOut ={
            () => {
                setPathHighlight("")
                setHighlight("")
            }
            
        }
        
        >
            

            <div className="image-container">

                <img className="trip-list-trip-profile-picture" src={trip.driver?.profile_image_url}/>

            </div>

            
            <div className="trip-list-trip-content">
            <Link to={`/driver_trips/${trip.id}`}>
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
            <div className="buttons">
            {trip?.completed ? 
                <div>Completed</div>
            :
            trip.is_user ? 
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
                                <>
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
                                }>Cancel Request</button>

                                

                                {trip.passenger_trips[0].is_approved ?
                                <>
                                <button
                                onClick={
                                    () => {
                                        setShowMessage(!showMessage)
                                    }
                                }
                                >Send Message</button>
                                
                                <button
                                onClick={
                                    () => {
                                        setShowRating(!showRating)
                                    }
                                }
                                >Complete Trip</button>
                            </>
                            :""}

                                
                            </>
                            :

                            trip?.passenger_trips[0] ?

                            <div>Full</div>

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

        {showRating ? 
            <>
            <h2>Modal Example</h2>


                <div id="myModal" class="modal">

                <div class="modal-content">
                    <span class="close"
                    onClick={
                        () => {
                            setShowRating(!showRating)
                        }
                    }>&times;</span>


                        <div className="trip-rating">
                            <h1>Rate Trip</h1>
                            
                            
                            
                      

                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                        </div>

                        <div className="trip-review">
                            
                            <label htmlFor="trip-review">Additional Comments:</label>
                            <input type="text" name = "trip-review" 
                            onChange={
                                (evt) => {
                                    const copy = {...rating}
                                    copy.review = evt.target.value
                                    setRating(copy)
                                }
                            }/>
                        </div>    

                        <button
                        onClick={
                            () => {
                                handleSubmit(trip)
                            }
                        }>Submit</button>

                                            
 
                    

                </div>

                </div>
                
            
            </>
            
        
        
        
        :""}


        {showMessage ? 
            <>
            <NewMessage trip = {trip} refresh={refresh} setRefresh={setRefresh} showMessage={showMessage} setShowMessage={setShowMessage} />
            
            </>
            
        
        
        
        :""}
        </div>
        </>
            
            
                
    )
}
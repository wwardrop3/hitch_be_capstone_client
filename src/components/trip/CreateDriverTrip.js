import { useEffect, useMemo, useRef, useState } from "react"
import { Places } from "../map/Places"
import { create_new_driver_trip, create_new_passenger_trip, get_tags, sign_up_passenger } from "./TripAuthManager"

import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    InfoBox,
    DirectionsService,
    MarkerClusterer,
  } from "@react-google-maps/api";
import { Link, useHistory } from "react-router-dom";
/*global google*/
const google = window.google = window.google ? window.google : {}
  


export const CreateDriverTrip = ({tempTrip, setTempTrip, destination, setDestination, origin, setOrigin, originPlace, setOriginPlace, destinationPlace, setDestinationPlace}) => {
    const history = useHistory()

    const [checkedState, setCheckedState] = useState({})
    const [tags, setTags] = useState()
    
    
    // useEffect(
    //     get_tags()
    //     .then(
    //         (response) => {
    //             setTags(response)
    //         }
    //     ),[]
    // )

    // useEffect(
    //     () => {
    //         let emptyObject = {}
    //         tags.map((tag) => {
    //             return emptyObject[tag.id]= false
    //         })
    //         setCheckedState(emptyObject)
    //     },[tags]
    // )

    // const handleChecks = (tagId) => {
    //     let copy = {...checkedState}
    //     copy[parseInt(tagId)] = !copy[parseInt(tagId)]

    //     setCheckedState(copy)
    // }

    // const transferChecks = () => {
    //     let copy = {...tempTrip}
    //     for (const property in checkedState) {
    //         if(checkedState[property] === true){
    //             copy.tags.push(parseInt(property))
    //         } 
        
    //     setTempTrip(copy)
    //     }}


    // const checkChecked = (tagId) => {
    //     let checked = ""
    //     tagId in tempTrip.tags ? checked = true:checked=false
    //     return checked
    // }



    
    const handleSubmit = (e) => {
        e.preventDefault()
        tempTrip.origin = origin
        tempTrip.destination = destination
        tempTrip.origin_place = originPlace
        tempTrip.destination_place = destinationPlace
        // transferChecks()
        // isDriver ?
        create_new_driver_trip(tempTrip).then(
            () => {
                history.push("/home")
            })
        // :
        //     create_new_passenger_trip(tempTrip).then(history.push("/home"))
    }


    const fetchDirections = () => {
        
        const service = new google.maps.DirectionsService();
        service.route(
            {
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === "OK" && result) {
                    const copy = {...tempTrip}
                    copy.path = result.routes[0].overview_polyline
                    copy.trip_distance = result.routes[0].legs[0].distance.value
                    copy.expected_travel_time = result.routes[0].legs[0].duration.value
                    setTempTrip(copy)
                }
            }
        )
    }

    useEffect(
        () => {
            fetchDirections()
        }, [destination]
    )

  


    return (
        <>
            <div className="create-trip-content">
                

                <div className="new-trip-form">
                    <div className="search-box">
                        <h3>Select Origin</h3>
                        <div className="search-box">
                        {/* stores the lat/lng of office they chose, also want to move the map to that location */}
                        <Places
                        searchPoint={origin}
                        setSearchPoint={setOrigin}
                        place={originPlace}
                        setPlace={setOriginPlace}
                        />
                    </div>

                    
         
                        


                    <div className="search-box">
                        <h3>Select Destination</h3>
                        <Places
                        searchPoint={destination}
                        setSearchPoint={setDestination}
                        place={destinationPlace}
                        setPlace={setDestinationPlace}
                        />
                    </div>
                
                            
                            
                    <div className="field">
                        
                        <label className="label">Departure Date/Time</label>
                        <div className="control">
                            <input className="input" type="datetime-local"
                            onChange = {
                                (evt) => {
                                    const copy = {...tempTrip}
                                    copy.start_date = evt.target.value
                                    setTempTrip(copy)
                                }
                            } />
                        </div>
                        </div>


                        <div className="field">
                            <label className="label">Detour Radius</label>
                            <div className="control">
                                <input className="input" type="number"
                                onChange = {
                                    (evt) => {
                                        const copy = {...tempTrip}
                                        copy.detour_radius = parseInt(evt.target.value)
                                        setTempTrip(copy)
                                    }
                                }
                                />
                            </div>
                        </div>
            

                     
                    
                        
                        
            
                        <div className="field">
                        <label className="label">Seats Available</label>
                        <div className="control">
                            <input className="input" type="number" 
                            onChange = {
                                (evt) => {
                                    const copy = {...tempTrip}
                                    copy.seats = evt.target.value
                                    setTempTrip(copy)
                                }
                            }/>
                        </div>
                        </div>
                        {/* <div className="tags">

                        {tags?.map(tag => {

                            return ( 
                                <>
                                <label htmlFor={`${tag.id}`}>{tag.name}</label>
                                <input type="checkbox" value={`${tag.id}`} name={`${tag.name}`} checked = {console.log(checkChecked(tag.id))}

                                onChange={
                                    () => {
                                        handleChecks(tag.id)
                                    }}
                                    />
                            </>
                            )
                                })}
                            </div> */}
                   

                       
            
            
                        
                

                <div className="field">
                        <label className="label">Trip Summary</label>
                        <div className="control">
                            <input className="input" type="text" 
                            onChange = {
                                (evt) => {
                                    const copy = {...tempTrip}
                                    copy.trip_summary = evt.target.value
                                    setTempTrip(copy)
                                }
                            }/>
                        </div>
                        </div>
                        
                <div className="control">
                            <button className="button is-link" 
                            onClick={
                                (evt) => {
                                    handleSubmit(evt)
                                }
                            }>Submit</button>
                        </div>
                        <div className="control">
                            <Link to="/login" className="button is-link is-light">Cancel</Link>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )

                        }
import { useEffect, useMemo, useRef, useState } from "react"
import { Places } from "../map/Places"
import { create_new_trip } from "./TripAuthManager"

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
  


export const CreateTrip = ({mapRef}) => {
    const history = useHistory()
    const [destination, setDestination] = useState()
    const [origin, setOrigin] = useState()


    

    const [newTrip, setNewTrip] = useState({
        origin: origin,
        destination: destination,
        start_date: "",
        detour_radius: "",
        trip_summary: "",
        seats: 1,
        completion_date: "",
        completed: false,
        path: "",
        trip_distance: "",
        expected_travel_time: 10,
        tags: [1,2]




    })


    const options = useMemo(
        () => ({
        mapId: "919771f94d285faa",
        disableDefaultUI: true,
        clickableIcons: false,
        }),
        []
      )

    


    
    const handleSubmit = (e) => {
        e.preventDefault()
        newTrip.origin = origin
        newTrip.destination = destination
        create_new_trip(newTrip).then(history.push("/home"))
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
                    const copy = {...newTrip}
                    copy.path = result.routes[0].overview_polyline
                    copy.trip_distance = result.routes[0].legs[0].distance.value
                    copy.expected_travel_time = result.routes[0].legs[0].duration.value
                    setNewTrip(copy)
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
                <h1>Create New Trip</h1>

                <div className="new-trip-form">
                    <div className="search-box">
                        <h3>Select Origin</h3>
                        <div className="search-box">
                        {/* stores the lat/lng of office they chose, also want to move the map to that location */}
                        <Places
                        searchPoint={origin}
                        setSearchPoint={setOrigin}
                        />
                    </div>

                    
         
                        


                    <div className="search-box">
                        <h3>Select Destination</h3>
                        <Places
                        searchPoint={destination}
                        setSearchPoint={setDestination}
                        />
                    </div>
                
                            
                            
                    <div className="field">
                        
                        <label className="label">Departure Date/Time</label>
                        <div className="control">
                            <input className="input" type="datetime-local"
                            onChange = {
                                (evt) => {
                                    const copy = {...newTrip}
                                    copy.start_date = evt.target.value
                                    setNewTrip(copy)
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
                                        const copy = {...newTrip}
                                        copy.detour_radius = parseInt(evt.target.value)
                                        setNewTrip(copy)
                                    }
                                }
                                />
                            </div>
                        </div>
            

                     
                    
                        
                        <div className="field">
                        <label className="label">Trip Summary</label>
                        <div className="control">
                            <input className="input" type="text" 
                            onChange = {
                                (evt) => {
                                    const copy = {...newTrip}
                                    copy.trip_summary = evt.target.value
                                    setNewTrip(copy)
                                }
                            }/>
                        </div>
                        </div>
            
                        <div className="field">
                        <label className="label">Seats Available</label>
                        <div className="control">
                            <input className="input" type="number" 
                            onChange = {
                                (evt) => {
                                    const copy = {...newTrip}
                                    copy.seats = evt.target.value
                                    setNewTrip(copy)
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

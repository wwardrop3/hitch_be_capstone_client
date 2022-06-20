import { useEffect, useState } from "react"
import { create_new_message } from "../components/message/MessageAuthManager"
import { NewMessage } from "../components/message/NewMessage"
import { update_passenger_trip } from "../components/trip/TripAuthManager"
import "../pageStyles/messagesPage.css"
import { get_all_member_messages, get_member } from "./PagesAuthManager"
export const MessagesPage = () => {

    const [member, setMember] = useState()
    const [messages, setMessages] = useState()
    const [refresh, setRefresh] = useState(false)
    const [trip, setTrip] = useState()
    const [message, setMessage] = useState()
    const [tripMessages, setTripMessages] = useState()
    const [isDriverTrip, setIsDriverTrip] = useState(false)
    const [showReply, setShowReply] = useState(false)
    const [reply, setReply] = useState()


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

    useEffect(
        () => {
            get_all_member_messages()
            .then(
                (response) => {
                    setMessages(response)
                }
            )
        },[member, refresh]
    )


    const update_driver_trip_messages = (id) => {
        const foundMessages = messages.filter(message => message.driver_trip.id == id)
        setTripMessages(foundMessages)
        setMessage({})

    }

    const update_passenger_trip_messages = (id) => {
        const foundMessages = messages.filter(message => message.passenger_trip.id == id)
        setTripMessages(foundMessages)

    }

    useEffect(
        () => {
            setReply({
                
                message_text: "",
                is_read: false

            })
        },[message]
    )

    

    const handleReplySubmit = () => {
        const copy = {...reply}
        copy.driver_trip = message?.driver_trip.id
        copy.passenger_trip = message?.passenger_trip.id
        copy.sender = isDriverTrip ? message?.driver_trip.driver : message?.passenger_trip.passenger
        copy.receiver = isDriverTrip ? message?.passenger_trip.passenger: message?.driver_trip.driver        
        // update_driver_trip(copy)
        create_new_message(copy)
                .then(
                    () => {
                        setShowReply(!showReply)
                        
                    }
                ).then(
                    () => {
                        setRefresh(!refresh)
                    }
                )
            }
        
        

    //get all trips and show messages related to each trip....message content in the far right column
    return (
        <>
            
        <div className="messages-container">

            <div className="trip-list-column">

                <div className="messages-trip-list">
                    Driver Trips
                    {member?.driver_trips.map(driver_trip => {
                    return (
                        <>
                        <div className="list-trip-container"
                        onClick={
                            () => {
                            
                                update_driver_trip_messages(driver_trip.id)
                                setIsDriverTrip(true)
                                setMessage("")
                            }
                        }>
                            
                            <div className="list-driver_trip-header">
                                <h4>{driver_trip.origin_place} to {driver_trip.destination_place}</h4>
                                <div>{new Date(driver_trip.start_date).toDateString()}</div>
                            </div>
                           

                        </div>
                        </>
                    )
                        
                })}

                </div>

                <div className="messages-trip-list">
                    Passenger Trips
                    {member?.passenger_trips.map(passenger_trip => {
                    return (
                        <>
                        <div className="list-trip-container"
                        onClick={
                            () => {
                                update_passenger_trip_messages(passenger_trip.id)
                                setIsDriverTrip(false)
                                setMessage("")

                            }
                        }>
                            {passenger_trip.is_approved ? <h6>Approved</h6>: <h6>Pending</h6>}
                            <div className="list-passenger_trip-header">
                                <h4>{passenger_trip.sender?.id}</h4>
                                <div>{new Date(passenger_trip.start_date).toDateString()}</div>
                            </div>
                           

                        </div>
                        </>
                    )
                        
                })}

                </div>

               

                {/* iterate through each trip the member is either a passenger or driver on
                all trips will have at least an initial message */}
                Trip List Column

            </div>


            <div className="trip-messages-column">
                
                { tripMessages ? 
                
                tripMessages[0] ?
                tripMessages[0].passenger_trip?.is_approved ? 
                

                tripMessages.map(message => {
                    return (
                        <>
                        <div className="list-message-container"
                        onClick={
                            () => {
                                setMessage(message)
                            }
                        }>
                            
                            <div className="list-message-header">
                                <h4>{message.driver_trip.origin_place}</h4> 
                                <p>TO</p> 
                                <h4>{message.driver_trip.destination_place}</h4>
                                <h4>{message.sender.id}</h4>
                                <div>{new Date(message.creation_date).toDateString()}</div>
                            </div>
                           

                        </div>
                        </>
                    )
                        
                })
                :
                isDriverTrip ?
                <button
                onClick={
                    () => {
                        const copy = {...tripMessages[0].passenger_trip}
                        
                        copy.is_approved = true
                        update_passenger_trip(copy).then(setRefresh(!refresh))
                    }
                }>Approve Passenger Trip</button>
                
                :
                tripMessages.map(message => {
                    return (
                        <>
                        <div className="list-message-container"
                        onClick={
                            () => {
                                setMessage(message)
                            }
                        }>
                            
                            <div className="list-message-header">
                                <h4>{message.driver_trip.origin_place}</h4> 
                                <p>TO</p> 
                                <h4>{message.driver_trip.destination_place}</h4>
                                <h4>{message.sender.id}</h4>
                                <div>{message.creation_date}</div>
                            </div>
                           

                        </div>
                        </>
                    )
                        
                })
                
                :
                <div>No Trip Messages</div>
                :
                <div>No Trip Messages</div>
            }

                {/* once a trip is selected, this column will show all messages sorted by most recent
                and show if they have been opened or not */}
                Trip Messages Column

            </div>


            <div className="message-detail-column">

                {message ? 
                <>
                
                <div>{message.message_text}</div>
                <button
                onClick={
                    () => {
                        setShowReply(!showReply)
                    }
                }>Reply</button>

                {showReply ?
                <>
                <div className="message-reply">

                <h2>Reply</h2>

                        
                        <label htmlFor="reply-text">Message Text:</label>
                        <input type="text" name = "reply-text" 
                        onChange={
                            (evt) => {
                                const copy = {...reply}
                                copy.message_text = evt.target.value
                                setReply(copy)
                            }
                        }/> 

                    <button
                    onClick={
                        () => {
                            handleReplySubmit()
                        }
                    }>Submit</button>

                </div>
                </>
                :""}
    

                </>
                
                :
                <div>No Message Selected</div>
                }

                {/* once a message is selected, the content of the message will appear in the column
                on the right */}
                Message Detail Column

            </div>
            
        </div>

        


        </>
    )
}
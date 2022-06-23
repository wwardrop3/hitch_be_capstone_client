import { useEffect, useState } from "react"
import { create_new_message } from "./MessageAuthManager"



export const NewMessage = ({trip, refresh, setRefresh, showMessage, setShowMessage}) => {
    const [message, setMessage] = useState()




    useEffect(
        () => {
            setMessage({
                driver_trip: trip.id,
                passenger_trip: trip.passenger_trips[0]?.id,
                receiver: trip.driver.id,
                message_text: "",
                is_read: false
            })
        },[trip]
    )


    

    const handleMessageSubmit = (message) => {
        const copy = {...message}
        
        // update_driver_trip(copy)
        create_new_message(copy)
                .then(
                    () => {
                        setShowMessage(!showMessage)
                        setRefresh(!refresh)
                    }
                )
            }
        
        

    return (
        <>
        New Message

        <h2>Send new message</h2>


                <div id="myModal" class="modal">

                <div class="modal-content">
                    <span class="close"
                    onClick={
                        () => {
                            setShowMessage(!showMessage)
                        }
                    }>&times;</span>


                        <div className="trip-review">
                            <h2>Send New Message</h2>
                            
                            <label htmlFor="trip-review">Message Text:</label>
                            <input type="text" name = "trip-review" 
                            onChange={
                                (evt) => {
                                    const copy = {...message}
                                    copy.message_text = evt.target.value
                                    setMessage(copy)
                                }
                            }/>
                        </div>    

                        <button
                        onClick={
                            () => {
                                handleMessageSubmit(message)
                            }
                        }>Submit</button>

                                            
 
                    

                </div>

                </div>
        </>

                                            
    )


}
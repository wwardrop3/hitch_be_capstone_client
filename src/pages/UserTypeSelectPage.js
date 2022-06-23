import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "../pageStyles/user_type_select_page.css"



// going to add a location search 

export const UserTypeSelectPage = ({isDriver, setIsDriver}) => {
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)

    
    return (
        <>

  



            <div className="user-type-container">                     











                <div className="type-passenger">
                    <h1>Looking for a ride</h1>
                </div>

                <div className="type-driver">
                    <h1>Looking for a passenger</h1>
                </div>

               
                <div
                className="user-type"
                to= "/trip/new"
                onClick = {
                    () => {
                        setIsDriver(false)
                        history.push("/trip/new")
                       
                  
                        
                    }}
                    ><img src="https://cdn.vox-cdn.com/thumbor/W6dccN6tlKcHBtFSMYkd9BsKd7M=/0x0:7492x5619/1200x800/filters:focal(0x0:7492x5619)/cdn.vox-cdn.com/uploads/chorus_image/image/46484254/shutterstock_244451992.0.0.jpg" />


                

                 </div>

                <div
                className="user-type"
                to= "/trip/new"
                onClick = {
                    () => {
                        setIsDriver(true)
                        history.push("/trip/new")
                    }
                }
                ><img src="https://media.istockphoto.com/photos/drive-test-at-car-dealership-picture-id1138561454?k=20&m=1138561454&s=612x612&w=0&h=TYiFHkVhGXvbdrlURGEQMlerXYb4F8ck7zaNARQzQJU=" />
                 </div>
            </div>

        </>
    )
}
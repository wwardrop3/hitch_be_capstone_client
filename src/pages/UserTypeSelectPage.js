import { Link } from "react-router-dom"
import "../pageStyles/user_type_select_page.css"


export const UserTypeSelectPage = () => {

    
    return (
        <>
            <div className="user-type-container">

                <Link
                className="user-type"
                to="/" 
                onClick = {
                    () => {
                        localStorage.setItem("user_type", "passenger")
                        
                    }
                }><img src="https://cdn.vox-cdn.com/thumbor/W6dccN6tlKcHBtFSMYkd9BsKd7M=/0x0:7492x5619/1200x800/filters:focal(0x0:7492x5619)/cdn.vox-cdn.com/uploads/chorus_image/image/46484254/shutterstock_244451992.0.0.jpg" />


                <div className="type-passenger">
                    <h1>Looking for a ride</h1>
                </div>

                <div className="type-driver">
                    <h1>Looking for a passenger</h1>
                </div>

                 </Link>

                <Link
                className="user-type"
                to= "/" 
                onClick = {
                    () => {
                        localStorage.setItem("user_type", "driver")
                    }
                }><img src="https://www.mkrfirm.com/wp-content/uploads/2019/04/transport2C-vehicle-and-taxi-concept-happy-smiling-male-driver-driving-car-with-passenger.jpg" />
                 </Link>
            </div>

        </>
    )
}
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { Route } from "react-router-dom"
import { Login } from "./components/auth/Login";
import { Sidebar } from "./components/sidebar/Sidebar"
import { HomePage } from "./pages/Homepage"
import { LoginLandingPage } from "./pages/LoginLandingPage";
import { MessagesPage } from "./pages/MessagesPage";
import { NewTripPage } from "./pages/NewTripPage";
import { get_member } from "./pages/PagesAuthManager";
import { ProfilePage } from "./pages/ProfilePage";
import { TripDetailsPage } from "./pages/TripDetailsPage";
import { UserTypeSelectPage } from "./pages/UserTypeSelectPage";



const openNav = () => {
    document.getElementById("sidebar-content").style.width = "10%";

}

const closeNav= () => {
    document.getElementById("sidebar-content").style.width = "0px";
    document.getElementById("sidebar-button").style.marginLeft= "0px";
    }

export const ApplicationViews = ({isDriver, setIsDriver}) => {
    const [member, setMember] = useState()
    const [origin, setOrigin] = useState()
    const [destination, setDestination] = useState()

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

    const [tempTrip, setTempTrip] = useState(
        {
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
            expected_travel_time: "",
            tags:""

        }
    )


    



    
    return (
        <>
            <div className="application-views">
                <div id="sidebar-button">
    
                    <div className="openbtn material-icons"  onMouseOver={openNav}>
                        chevron_right
                    </div> 
    
                    
                    <div className="sidebar" id="sidebar-content" onMouseLeave={closeNav}>
                        <Sidebar member={member} isDriver={isDriver} setIsDriver={setIsDriver} />
                    </div>  
                </div>


            
                
                <Route exact path="/">
                    <UserTypeSelectPage isDriver={isDriver} setIsDriver={setIsDriver}/>
                </Route>
                
                
                <Route exact path = {"/home"}>
                    <HomePage isDriver={isDriver} setIsDriver={setIsDriver} tempTrip={tempTrip} setTempTrip={setTempTrip} />
                </Route>

                <Route exact path = "/trip/new/passenger">
                    <NewTripPage isDriver={isDriver} setIsDriver={setIsDriver} tempTrip={tempTrip} setTempTrip={setTempTrip} origin={origin} destination={destination} setOrigin={setOrigin} setDestination={setDestination} />
                </Route>


                <Route exact path = "/trip/new/driver">
                    <NewTripPage isDriver={isDriver} setIsDriver={setIsDriver} tempTrip={tempTrip} setTempTrip={setTempTrip} origin={origin} destination={destination} setOrigin={setOrigin} setDestination={setDestination} />
                </Route>

                <Route exact path = "/trips/:driverTripId(\d+)">
                    <TripDetailsPage />
                </Route>

                <Route exact path = "/profile">
                    <ProfilePage />
                </Route>
                
                <Route exact path = "/messages">
                    <MessagesPage />
                </Route>
            </div>



       

            
        </>
    )
}
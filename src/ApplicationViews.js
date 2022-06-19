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
    document.getElementById("sidebar-content").style.width = "5%";

}

const closeNav= () => {
    document.getElementById("sidebar-content").style.width = "0px";
    document.getElementById("sidebar-button").style.marginLeft= "0px";
    }

export const ApplicationViews = ({isDriver, setIsDriver, refresh, setRefresh, searchPoint, setSearchPoint}) => {
    const [member, setMember] = useState()
    const [origin, setOrigin] = useState()
    const [destination, setDestination] = useState()
    const [originPlace, setOriginPlace] = useState()
    const [destinationPlace, setDestinationPlace]= useState()
    

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
            origin_place: originPlace,
            destination: destination,
            destination_place: destinationPlace,
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
                    <UserTypeSelectPage isDriver={isDriver} setIsDriver={setIsDriver} refresh ={refresh} setRefresh={setRefresh}/>
                </Route>
                
                
                <Route exact path = {"/home"}>
                    <HomePage searchPoint={searchPoint} setSearchPoint={setSearchPoint} isDriver={isDriver} setIsDriver={setIsDriver} tempTrip={tempTrip} setTempTrip={setTempTrip} refresh ={refresh} setRefresh={setRefresh}/>
                </Route>

                <Route exact path = "/trip/new/passenger">
                    <NewTripPage isDriver={isDriver} setIsDriver={setIsDriver} tempTrip={tempTrip} setTempTrip={setTempTrip} origin={origin} originPlace={originPlace} setOriginPlace={setOriginPlace} destination={destination} setOrigin={setOrigin} setDestination={setDestination} destinationPlace={destinationPlace} setDestinationPlace={setDestinationPlace} refresh ={refresh} setRefresh={setRefresh}/>
                </Route>


                <Route exact path = "/trip/new/driver">
                    <NewTripPage isDriver={isDriver} setIsDriver={setIsDriver} tempTrip={tempTrip} setTempTrip={setTempTrip} origin={origin} originPlace={originPlace} setOriginPlace={setOriginPlace} destination={destination} setOrigin={setOrigin} setDestination={setDestination} destinationPlace={destinationPlace} setDestinationPlace={setDestinationPlace} refresh ={refresh} setRefresh={setRefresh}/>
                </Route>

                <Route exact path = "/trips/:driverTripId(\d+)">
                    <TripDetailsPage refresh ={refresh} setRefresh={setRefresh}/>
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
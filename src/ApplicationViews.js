import { Route } from "react-router-dom"
import { Login } from "./components/auth/Login";
import { Sidebar } from "./components/sidebar/Sidebar"
import { HomePage } from "./pages/Homepage"
import { LoginLandingPage } from "./pages/LoginLandingPage";
import { MessagesPage } from "./pages/MessagesPage";
import { NewTripPage } from "./pages/NewTripPage";
import { ProfilePage } from "./pages/ProfilePage";
import { TripDetailsPage } from "./pages/TripDetailsPage";

const openNav = () => {
    document.getElementById("sidebar-content").style.width = "10%";

}

const closeNav= () => {
    document.getElementById("sidebar-content").style.width = "0px";
    document.getElementById("sidebar-button").style.marginLeft= "0px";
    }

export const ApplicationViews = () => {


    
    return (
        <>
            <div className="application-views">
                <div id="sidebar-button">
    
                    <div className="openbtn material-icons"  onMouseOver={openNav}>
                        chevron_right
                    </div> 
    
                    
                    <div className="sidebar" id="sidebar-content" onMouseLeave={closeNav}>
                        <Sidebar />
                    </div>  
                </div>


            
                

                
                
                <Route exact path = {["/home" , "/"]}>
                    <HomePage />
                </Route>


                <Route exact path = "/trip/new">
                    <NewTripPage />
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



       

            {/* <Route exact path="/">
                <UserTypeSelectPage />
        </Route> */}
        </>
    )
}
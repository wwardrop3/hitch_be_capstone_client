import { Route } from "react-router-dom"
import { Login } from "./components/auth/Login";
import { Sidebar } from "./components/sidebar/Sidebar"
import { HomePage } from "./pages/Homepage"
import { LoginLandingPage } from "./pages/LandingPage";


const openNav = () => {
    document.getElementById("sidebar-content").style.width = "10vw";
    document.getElementById("sidebar-button").style.marginLeft = "1vw";
  }

const closeNav= () => {
    document.getElementById("sidebar-content").style.width = "0px";
    document.getElementById("sidebar-button").style.marginLeft= "0px";
    }

export const ApplicationViews = () => {
    return (
        <>
            
            <div id="sidebar-button">
                <div class="openbtn material-icons"  onMouseOver={openNav}>chevron_right</div> 
            <div className="sidebar" id="sidebar-content" onMouseLeave={closeNav}>
                <Sidebar />
            </div>  
            </div>

            
            
            <Route exact path = "/home">
                <HomePage />
            </Route>

            <Route exact path = "/">
                <LoginLandingPage />
            </Route>
        </>
    )
}
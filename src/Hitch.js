import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./components/navbar/Navbar"

export const Hitch = () => {
    return (
        <>
            <div className="app-container">
                <div className="navbar">
                    <NavBar />
                </div>
                <div className="application-views">
                    <ApplicationViews />
                </div>
                   
            </div>
            
        </>
       
    )
}
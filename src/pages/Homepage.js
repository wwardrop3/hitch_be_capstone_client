import { MapContainer } from "../components/map/MapContainer"
import { TripList } from "../components/trip/TripList"
import "../pageStyles/homepage.css"

export const HomePage = () => {
    return (
        <>
            <div className="homepage-trip-list">
                <TripList />    
            </div>

            <div className="homepage-map-container">
                <MapContainer />
            </div>
            
            
        </>
    )
}
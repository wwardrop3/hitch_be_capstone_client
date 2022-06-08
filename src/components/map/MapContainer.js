import { useEffect, useMemo, useState } from "react"
import { HitchMap } from "./HitchMap"
import { LoadScript, useLoadScript } from "@react-google-maps/api"
import "./map.css"

export const MapContainer = () => {
    // process.env.GOOGLE_MAPS_API_KEY
    const {isLoaded} = useLoadScript({
        
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    })



    



    if(!isLoaded){

        return <div>Loading...</div>
    } else {
        
        return(
            <>
            {
                isLoaded? <HitchMap />
                :""
            }
            </>
        )
            
        

    }
}
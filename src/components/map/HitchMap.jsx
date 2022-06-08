import { useState, useMemo, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  InfoBox,
  DirectionsService,
  MarkerClusterer,
} from "@react-google-maps/api";
// import { Places } from "./Places";
// import { Distance } from "./Distance";
// import { MarkerPopUp } from "./MarkerPopUp";
/*global google*/
const google = window.google = window.google ? window.google : {}
const options = {
    imagePath:
      'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  }

export const HitchMap = () => {
    const center = useMemo(()=> ({lat: parseFloat(localStorage?.getItem("lat")), lng: parseFloat(localStorage?.getItem("lng"))}),[])
    const options = useMemo(
        () => ({
        mapId: "919771f94d285faa",
        disableDefaultUI: true,
        clickableIcons: false,
        }),
        []
    )
    return (
        <>
            <div className="map">
                <GoogleMap 
                    zoom={11} 
                    center={center} 
                    mapContainerClassName="map-container" 
                    options={options}
                    // onLoad={onLoad}
                    >

                    </GoogleMap>
            </div>
        </>
    )
}
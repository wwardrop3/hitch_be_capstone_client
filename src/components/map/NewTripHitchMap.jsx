

import { useState, useMemo } from "react";
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    InfoBox,
    Polyline,
} from "@react-google-maps/api";
import "./map.css"
import { Link } from "react-router-dom";
/*global google*/
const google = window.google = window.google ? window.google : {}

const colors = {
    1: "red",
    2: "blue",
    3: "green",
    4: "yellow",
    5: "orange",
    6: "red"
}

// const getRandomIntInclusive = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//   }

const lineOptions = {
    strokeColor: Math.randomI,
    strokeOpacity: 0.8,
    strokeWeight: 4,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    zIndex: 1
};


export const NewTripHitchMap = ({ fetchDirections, origin, destination, onLoad, trips, setShowInfoBox, showInfoBox, setSelectedPoint, selectedPoint, searchPoint, isDriver, highlight, setHighlight, pathHighlight, setPathHighlight }) => {
    const options = useMemo(
        () => ({
            mapId: "919771f94d285faa",
            disableDefaultUI: true,
            clickableIcons: false,
            scrollwheel: true
        }))

    const [directions, setDirections] = useState()

    const isSelected = (propertyId, pathHighlight, trip) => {
        if (pathHighlight === propertyId) {
            return [3, "red", 3, 4]
        } else {
            if (trip?.is_recommended == true) {
                return [2, "green", .8, 2]
            }
            else {
                return [2, "blue", .8, 2]
            }

        }
    }





    return (
        <>
            <div>

                {/* {directions ? console.log(directions) :""} */}

            </div>

            <div className="map">
                <GoogleMap
                    zoom={11}
                    zoomControl="true"
                    // original search point based on location
                    center={searchPoint}
                    mapContainerClassName="map"
                    options={options}
                    onLoad={onLoad}



                >
                    {/* When the origin and destination are set, will return recommended driving trips */}
                    {trips ?
                        trips?.map((trip) => (

                            <>
                                <Polyline
                                    path={trip?.path_points}
                                    options={{
                                        strokeColor: isSelected(trip.id, pathHighlight, trip)[1],
                                        strokeOpacity: isSelected(trip.id, pathHighlight)[2],
                                        strokeWeight: isSelected(trip.id, pathHighlight)[3],
                                        fillColor: '#FF0000',
                                        fillOpacity: 0.35,
                                        clickable: false,
                                        draggable: false,
                                        editable: false,
                                        visible: true,
                                        radius: 30000,
                                        zIndex: 1
                                    }}
                                />


                                <Marker
                                    key={parseFloat(trip?.origin.lat)}
                                    position={trip?.origin}
                                    icon={{
                                        path: "M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
                                        fillColor: "green",
                                        fillOpacity: .6,
                                        strokeWeight: 1,
                                        scale: 2,
                                        strokeColor: "black",
                                        anchor: new google.maps.Point(7, 15)
                                    }}
                                    onClick={
                                        () => {

                                            setShowInfoBox(!showInfoBox)
                                            setSelectedPoint(trip)
                                            // fetchDirections(trip)

                                        }}

                                />

                                <Marker
                                    key={parseFloat(trip.destination?.lat)}
                                    position={trip?.destination}
                                    icon={{
                                        path: "M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
                                        fillColor: "red",
                                        fillOpacity: .6,
                                        strokeWeight: 1,
                                        scale: 2,
                                        strokeColor: "black",
                                        anchor: new google.maps.Point(7, 15)
                                    }}
                                    onClick={
                                        () => {

                                            setShowInfoBox(!showInfoBox)
                                            setSelectedPoint(trip)
                                            // fetchDirections(trip)

                                        }}

                                />

                                {/* <Circle center={trip?.origin} radius={trip?.pick_up_radius * 1609} /> */}

                            </>
                        )
                        ) : ""}



                    {showInfoBox ?
                        <>
                            <InfoBox
                                position={selectedPoint?.origin}
                                clickable={true}
                                onCloseClick={() =>
                                    setSelectedPoint({})}
                            >
                                <div className='popup-window'>
                                    <Link to={`/trips/${selectedPoint?.id}`}> <h2> {selectedPoint?.start_date}</h2></Link>
                                    <div className='image-container'>
                                        <img id='prop-image' src={isDriver ? selectedPoint?.driver.profile_image_url : selectedPoint?.passenger.profile_image_url} height="150px"></img>

                                    </div>


                                </div>
                            </InfoBox>


                        </>



                        : ""}
                    {/* this is the marker for the original search point */}
                    {searchPoint ?
                        <>
                            <Marker
                                position={searchPoint}
                                key={parseFloat(searchPoint.lat)}
                                icon={{
                                    path: "M17.659,9.597h-1.224c-0.199-3.235-2.797-5.833-6.032-6.033V2.341c0-0.222-0.182-0.403-0.403-0.403S9.597,2.119,9.597,2.341v1.223c-3.235,0.2-5.833,2.798-6.033,6.033H2.341c-0.222,0-0.403,0.182-0.403,0.403s0.182,0.403,0.403,0.403h1.223c0.2,3.235,2.798,5.833,6.033,6.032v1.224c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403v-1.224c3.235-0.199,5.833-2.797,6.032-6.032h1.224c0.222,0,0.403-0.182,0.403-0.403S17.881,9.597,17.659,9.597 M14.435,10.403h1.193c-0.198,2.791-2.434,5.026-5.225,5.225v-1.193c0-0.222-0.182-0.403-0.403-0.403s-0.403,0.182-0.403,0.403v1.193c-2.792-0.198-5.027-2.434-5.224-5.225h1.193c0.222,0,0.403-0.182,0.403-0.403S5.787,9.597,5.565,9.597H4.373C4.57,6.805,6.805,4.57,9.597,4.373v1.193c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403V4.373c2.791,0.197,5.026,2.433,5.225,5.224h-1.193c-0.222,0-0.403,0.182-0.403,0.403S14.213,10.403,14.435,10.403",
                                    fillColor: "black",
                                    fillOpacity: .6,
                                    strokeWeight: 1,
                                    scale: 2,
                                    strokeColor: "black",
                                    anchor: new google.maps.Point(7, 15)
                                }}



                            />

                        </>
                        : ""}

                    {/* once the origin of the passenger trip is selected, going to plot the origin marker */}

                    {origin?.lat ?
                        <>
                            <Marker
                                position={origin}
                                key={parseFloat(origin.lat)}
                                icon={{
                                    path: "M19 10c0 3.976-7 11-7 11s-7-7.024-7-11 3.134-7 7-7 7 3.024 7 7zM9 10h3m3 0h-3m0 0V7m0 3v3",
                                    fillColor: "lightblue",
                                    fillOpacity: .8,
                                    strokeWeight: 1,
                                    scale: 3,
                                    strokeColor: "black",
                                    anchor: new google.maps.Point(12, 22)
                                }}


                            />

                        </>
                        : ""}

                    {/* once the destination of the passenger trip is selected, plot the destination marker */}

                    {destination?.lat ?
                        <>
                            <Marker
                                position={destination}
                                key={parseFloat(destination.lat)}
                                icon={{
                                    path: "M19 10c0 3.976-7 11-7 11s-7-7.024-7-11 3.134-7 7-7 7 3.024 7 7zM9 10h3m3 0h-3m0 0V7m0 3v3",
                                    fillColor: "pink",
                                    fillOpacity: .8,
                                    strokeWeight: 1,
                                    scale: 3,
                                    strokeColor: "black",
                                    anchor: new google.maps.Point(12, 22)
                                }}


                            />

                        </>
                        : ""}














                    {directions ?
                        <>
                            <DirectionsRenderer
                                directions={directions}
                                options={
                                    {
                                        polylineOptions: {
                                            strokeColor: "#eb4034",
                                            strokeWeight: 5
                                        }
                                    }
                                }
                            />






                        </>
                        : ""}






                </GoogleMap>

            </div>


        </>
    )
}


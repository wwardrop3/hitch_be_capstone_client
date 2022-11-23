import React, { useMemo, useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./components/navbar/Navbar"
import { LoginLandingPage } from "./pages/LoginLandingPage"
export const host = "ttps://hitch-capstone-server.herokuapp.com"
// export const host = "https://hitch-capstone-server.herokuapp.com"



export const Hitch = () => {
    const [token, setTokenState] = useState(localStorage.getItem('token'))
    const [staff, setStaffState] = useState(localStorage.getItem('staff'))
    const [isDriver, setIsDriver] = useState(true)
    const [refresh, setRefresh] = useState(false)

    const [searchPoint, setSearchPoint] = useState()








    const success = (pos) => {
        const coordinates = pos?.coords
        localStorage.setItem("lat", coordinates.latitude)
        localStorage.setItem("lng", coordinates.longitude)
    }

    // uses built in browser tool to get current location of user to set the original search point on map
    const currentLocation = useMemo(
        () => {
            setSearchPoint(navigator.geolocation.getCurrentPosition(success))
        }, []
    )


    // function sets the token in the local browser
    const setToken = (newToken, is_staff) => {
        localStorage.setItem('token', newToken)
        localStorage.setItem('staff', is_staff)
        setTokenState(newToken)
        localStorage.setItem('staff', is_staff)
        setStaffState(is_staff)
    }


    return <>
        {
            token
                ?
                <Route>
                    <NavBar refresh={refresh} setRefresh={setRefresh} isDriver={isDriver} setIsDriver={setIsDriver} token={token} setToken={setToken} searchPoint={searchPoint} setSearchPoint={setSearchPoint} />

                    <ApplicationViews isDriver={isDriver} setIsDriver={setIsDriver} refresh={refresh} setRefresh={setRefresh} searchPoint={searchPoint} setSearchPoint={setSearchPoint} />
                </Route>
                :
                <Redirect to="/login" />
        }

        <Route exact path="/login" >
            <LoginLandingPage token={token} setToken={setToken} />
        </Route>


    </>
}

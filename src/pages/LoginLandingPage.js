import { useState } from "react"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import "../pageStyles/loginLandingPage.css"



export const LoginLandingPage = ({ token, setToken }) => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)



    return (
        <>
            <div className="landing-page-container">
                <div className="background-image"></div>
                <div className="hitch-title-logo"></div>



                <div className="auth-buttons">
                    <button className="auth-button"
                        onClick={
                            () => {
                                setShowLogin(!showLogin)
                                setShowRegister(false)
                            }
                        }>Login</button>

                    <button className="auth-button"
                        onClick={
                            () => {
                                setShowRegister(!showRegister)
                                setShowLogin(false)
                            }
                        }>Register</button>
                </div>


                <div className="auth-content">

                    {showLogin ? <Login token={token} setToken={setToken} /> : ""}

                    {showRegister ? <Register token={token} setToken={setToken} showRegister={showRegister} setShowRegister={setShowRegister} showLogin={showLogin} setShowLogin={setShowLogin} /> : ""}

                </div>
            </div>






        </>
    )
}
import { useState } from "react"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import "../pageStyles/loginLandingPage.css"



export const LoginLandingPage = ({token, setToken}) => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)



    return (
        <>
       
        <div className="background-image">
            <div className="hitch-title-logo">
          
            
                
            
        <div className="auth-forms">
        <button className="auth-button"
        onClick={
            () => {
                setShowLogin(!showLogin)
                setShowRegister(false)
            }
        }>Login</button>
        
        {showLogin ? <Login token={token} setToken = {setToken} /> :""}


        <button className="auth-button"
        onClick={
            () => {
                setShowRegister(!showRegister)
                setShowLogin(false)
            }
        }>Register</button>
        
        {showRegister ? <Register token={token} setToken = {setToken} /> :""}




        </div>
        </div>
    
        </div>

     
       

        </>
    )
}
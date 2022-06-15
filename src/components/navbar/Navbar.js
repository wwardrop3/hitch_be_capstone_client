import { Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom"
import "./navbar.css"



export const NavBar = ({isDriver, setIsDriver, token, setToken, showModal, setShowModal}) => {
    const history = useHistory()
    const handleLogout = () => {
        history.push("/login")
        localStorage.removeItem('token')

        
    }
    return(
        <>
        <div className="navbar">

            <img className="hitch-logo" src="https://sat02pap002files.storage.live.com/y4moTt8OhQGLCzPgJSs5kvgikfvvyAg5746mamtL8mRElqvJ8rNq3JC7h539A6KkHIoWEWrgN6l41MUKDTk_ASa7AAEBvdI8vZc96__DPvTOhxQSLQJEe7CBKNn-zEeF-4rGJ-NJ3doV5FVxNND4nU7oZF-Pc5J2XSi3m6w1YPv8J5gvWDZTCZXsKArMyVDj_Qa?width=96&height=96&cropmode=none"
            onClick={
                () => {
                    history.push("/")
                }
            }/>

            
   
            <img className="nav-title-logo" src="https://sat02pap002files.storage.live.com/y4me3HXQPkLDfZGzC_T73xcBJd5TZc7ny3eeim3h7sAaZYfZqXDuPgdRrUAacktukr6CC_NrSri5x-ezKyFq8YHG6fFxaGHPaHvelYvGsBSElTcbxJyPTUhpooznvpNFku7ZZoVc7g43eyVKTk2wC5B8n0idoT1IXZNiGs5Y7LSUlJeP4VY_7PLxUoJuBjc4vbV?width=1008&height=449&cropmode=none"/>

            <div className="type-toggle">
                <div class="switch-button">
                    <input class="switch-button-checkbox" type="checkbox" 
                    onClick={
                        () => {
                            setIsDriver(!isDriver)}}></input>
                    <label class="switch-button-label" for=""><span class="switch-button-label-span">Driver</span></label>
                </div>
            </div>



            <button className="button is-outlined" onClick={() => {
                    setToken('', '')
                    history.push('/login')
                  }}>Logout</button>

           



        </div>
        
        
        </>
       
    )
}
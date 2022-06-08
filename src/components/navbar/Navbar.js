import { Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom"
import "./navbar.css"



export const NavBar = ({token, setToken}) => {
    const history = useHistory()
    const handleLogout = () => {
        history.push("/login")
        localStorage.removeItem('token')

        
    }
    return(
        <>
        <div className="navbar">
            <div className="hitch-logo">
                <img src="https://sat02pap002files.storage.live.com/y4moTt8OhQGLCzPgJSs5kvgikfvvyAg5746mamtL8mRElqvJ8rNq3JC7h539A6KkHIoWEWrgN6l41MUKDTk_ASa7AAEBvdI8vZc96__DPvTOhxQSLQJEe7CBKNn-zEeF-4rGJ-NJ3doV5FVxNND4nU7oZF-Pc5J2XSi3m6w1YPv8J5gvWDZTCZXsKArMyVDj_Qa?width=96&height=96&cropmode=none"/>
            </div>
            <button className="button is-outlined" onClick={() => {
                    setToken('', '')
                    history.push('/login')
                  }}>Logout</button>


        </div>
        
        
        </>
       
    )
}
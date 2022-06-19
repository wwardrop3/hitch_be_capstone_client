import { Link, useHistory } from "react-router-dom"
import "./sidebar.css"


export const Sidebar = ({member, isDriver, setIsDriver}) => {
    const history = useHistory()
    return (
        <>
     
            <div
                onClick={
                    () => {
                        history.push("/profile")
                    }
                }>
                <img className="profile-icon" src={member?.profile_image_url}/>
            

            <div className="notifications">Profile</div>

            </div>
            
    
            
        
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Link to="/home"> <svg xmlns="http://www.w3.org/2000/svg" width="100%" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg></Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to={localStorage.getItem("is_driver")=="true" ? "/trip/new/driver" : "/trip/new/passenger"}><svg xmlns="http://www.w3.org/2000/svg" width="100%" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                </svg></Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/messages"> <svg xmlns="http://www.w3.org/2000/svg" width="100%" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                </svg>
                                </Link>
                            </td>
                        </tr>

                    </tbody>
                    
                </table>
                
                <div className="user-mode">
                    {isDriver ? <h5>Driver Mode</h5> : <h5>Passenger Mode</h5> }
                </div>
                
             
           

        
            



        
      
       
        </>
    )
}


import { Link } from "react-router-dom"
import "./sidebar.css"


export const Sidebar = () => {
    return (
        <>
     
            <div className="profile-icon">
                <img className="small-profile-picture" src="https://sat02pap002files.storage.live.com/y4m8vAuRh7DFDleasfs5GGSjV1PDBzGfMn060ONdlxfm8pJkCykN379qi75xzcD5ot4ELKmHDFPpKmK74b2IJx1_5eJ1nXv7uD1KQECHMY8DmBMrQxYs04ZVX6BDyZUFJr2qKQLMktup52VISd8_imW1HKhfvwVIysPv5mR4UboLIQFVHojejQc6OCgpr7kvZ7t?width=1024&height=768&cropmode=none"/>
            </div>
            
            <div id="sidebar-nav">
                <table className="sidebar-table">
                    <tbody>
                        <tr className="sidebar-table-row">
                            <td className="sidebar-table-cell">
                                <Link to="/home"> <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg></Link>
                            </td>
                        </tr>
                        <tr className="sidebar-table-row">
                            <td className="sidebar-table-cell">
                                <Link to="/trip/new"> <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22 38.5V26H9.5V22H22V9.5H26V22H38.5V26H26V38.5Z"/></svg></Link>
                            </td>
                        </tr>
                        <tr className="sidebar-table-row">
                            <td className="sidebar-table-cell">
                                <Link to="/messages"> <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg></Link>
                            </td>
                        </tr>

                    </tbody>
                    
                </table>
            
            </div>

        
            



        
      
       
        </>
    )
}
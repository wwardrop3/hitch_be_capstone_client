import "./sidebar.css"


export const Sidebar = () => {
    return (
        <>
     
            <div className="profile-icon">
                <img className="small-profile-picture" src="https://sat02pap002files.storage.live.com/y4m8vAuRh7DFDleasfs5GGSjV1PDBzGfMn060ONdlxfm8pJkCykN379qi75xzcD5ot4ELKmHDFPpKmK74b2IJx1_5eJ1nXv7uD1KQECHMY8DmBMrQxYs04ZVX6BDyZUFJr2qKQLMktup52VISd8_imW1HKhfvwVIysPv5mR4UboLIQFVHojejQc6OCgpr7kvZ7t?width=1024&height=768&cropmode=none"/>
            </div>
            
            <div id="sidebar-nav">
                <table>
                    <tbody>
                        <tr className="sidebar-nav-icon">
                            <td class="material-icons">cloud</td>
                        </tr>
                        <tr className="sidebar-nav-icon">
                            <td>New Trip Icon</td>
                        </tr>
                        <tr className="sidebar-nav-icon">
                            <td>Trip History Icon</td>
                        </tr>
                        <tr className="sidebar-nav-icon">
                            <td>Messages Icon</td>
                        </tr>

                    </tbody>
                    
                </table>
            
            </div>

        
            



        
      
       
        </>
    )
}
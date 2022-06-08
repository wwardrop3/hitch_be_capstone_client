import "./trip.css"

export const TripListTrip = () => {
    return(
        <>
        
        <div className="trip-list-trip-container">
            <div>
                <img className="small-profile-picture" src="https://sat02pap002files.storage.live.com/y4m8vAuRh7DFDleasfs5GGSjV1PDBzGfMn060ONdlxfm8pJkCykN379qi75xzcD5ot4ELKmHDFPpKmK74b2IJx1_5eJ1nXv7uD1KQECHMY8DmBMrQxYs04ZVX6BDyZUFJr2qKQLMktup52VISd8_imW1HKhfvwVIysPv5mR4UboLIQFVHojejQc6OCgpr7kvZ7t?width=1024&height=768&cropmode=none"/>
            </div>

            <div className="trip-list-trip-content">
                <div className="trip-list-trip-info">
                    <table className="">
                        <tbody>
                            <tr>
                                <th colSpan={3}>Driver Name</th>
                            </tr>
                            <tr>
                                <td>Seats Available</td>
                                <td>Trip Distance</td>
                                <td>Estimated Cost</td>
                            </tr>
                        </tbody>
                    </table>



       
                    
                </div>

                <div className="trip-list-trip-dates">
                    <table>
                        <tbody>
                            <tr>
                                <th>Start Date</th>
                            </tr>
                            <tr>
                                <th>End Date</th>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
        
        </>
    )
}
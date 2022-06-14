import { useEffect, useState } from "react"
import "../pageStyles/profile_page.css"
import { get_member } from "./PagesAuthManager"
import { TripDetailsPage } from "./TripDetailsPage"

export const ProfilePage = () => {

    const [member, setMember] = useState()


    useEffect(
        () => {
            get_member()
            .then(
                (response) => {
                    setMember(response)
                }
            )
        },[]
    )


    return (
        <>
            
        <div className="profile-page-container">

            <div className="profile-page-column-1">

                <div className="profile-image-container">

                    <img className="profile-image" src={member?.profile_image_url} />

                </div>

                <div className="profile-stats-container">

                    <h4>Quick Stats</h4>

                    <table>
                        <tbody>
                            <tr>
                                <th>Avg Rating</th>
                                <th># of Ratings</th>
                            </tr>

                            <tr>
                                <th>Total Trips</th>
                                <th>Total Miles</th>
                            </tr>

                            <tr>
                                <th># of Passengers</th>
                                <th>Total Travel Time</th>
                            </tr>

                        </tbody>
                    </table>

                </div>

            </div>

            <div className="profile-page-column-2">
                
            </div>

        </div>


        </>
    )
}
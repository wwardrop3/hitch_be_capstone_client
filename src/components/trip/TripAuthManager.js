import { host } from "../../Hitch"



export const get_all_trips = () => {
    return fetch(`${host}/trips`,{
        headers: {
            "Authorization": 'token fa2eba9be8282d595c997ee5cd49f2ed31f65bed' 
        }
        
    })
    .then(res => res.json())
}

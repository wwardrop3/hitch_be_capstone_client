import { host } from "../Hitch"


export const get_member = () => {
    return fetch(`${host}/members/1`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }).then(res => res.json())
}
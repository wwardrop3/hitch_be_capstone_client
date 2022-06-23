import { host } from "../../Hitch"


export const create_new_message = (message) => {
    return fetch(`${host}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(message)
    }).then(res => res.json())
}
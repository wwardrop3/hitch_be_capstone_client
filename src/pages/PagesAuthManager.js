import { host } from "../Hitch"


export const get_member = () => {
    return fetch(`${host}/members/1`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }).then(res => res.json())
}

export const delete_member = (id) => {
    return fetch(`${host}/members/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
}

export const get_all_member_messages = () => {
    return fetch(`${host}/messages/get_all_member_messages`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }).then(res => res.json())
}

export const get_driver_trip_messages = (tripId) => {
    return fetch(`${host}/messages/${tripId}/get_driver_trip_messages`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }).then(res => res.json())
}

export const get_passenger_trip_messages = (tripId) => {
    return fetch(`${host}/messages/${tripId}/get_passenger_trip_messages`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }).then(res => res.json())
}

export const get_message = (messageId) => {
    return fetch(`${host}/messages/${messageId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }).then(res => res.json())
}


import { host } from "../../Hitch"


export const get_all_driver_trips = (lat, lng) => {
    return fetch(`${host}/driver_trips?lat=${lat}&lng=${lng}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }).then(res => res.json())
}

export const getDriverTrip = (id) => {
    return fetch(`${host}/driver_trips/${id}`,{
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
}})
    .then(res => res.json())
}

export const get_all_passenger_trips = (lat, lng) => {
    return fetch(`${host}/passenger_trips?lat=${lat}&lng=${lng}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }).then(res => res.json())
}


export const create_new_driver_trip = (trip) => {
    return fetch(`${host}/driver_trips`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(trip)
    }).then(res => res.json())
}

export const create_new_passenger_trip = (trip) => {
    return fetch(`${host}/passenger_trips`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(trip)
    }).then(res => res.json())
}

export const delete_driver_trip = (id) => {
    return fetch(`${host}/driver_trips/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
}

export const update_driver_trip = (driver_trip) => {
    return fetch(`${host}/driver_trips/${driver_trip.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(driver_trip)
        
    })
}


export const sign_up_passenger= (driver_trip) => {
    return fetch(`${host}/driver_trips/${driver_trip.id}/sign_up_passenger`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(driver_trip)
        
    })

}

export const remove_passenger= (driver_trip) => {
    return fetch(`${host}/driver_trips/${driver_trip.id}/remove_passenger`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(driver_trip)
        
    })

}


export const get_driver_trips_by_passenger_trip = (tempPassengerTrip) => {
    return fetch(`${host}/passenger_trips/driver_trips_by_passenger_trip`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(tempPassengerTrip)
    }).then(res => res.json())
}
    
export const get_tags = () => {
    return fetch(`${host}/tags`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }).then(res => res.json())
}
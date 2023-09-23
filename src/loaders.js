// YOUR DEPLOYED API BASE URL
import url from "./url"

//indexLoader => get all todos for index route
export const indexLoader = async () => {
    const response = await fetch(url)
    const cheeses = await response.json()
    return cheeses
}

//showLoader => get a single todo for Show route
export const showLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(url + id)
    const cheese = await response.json()
    return cheese
}
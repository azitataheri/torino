import { api } from "./config"


const getTours =  () => {
return api.get('/tour')
}


const getTourById = (id) => {
    return api.get(`/tour/${id}`)
}
export {
    getTours, getTourById
}
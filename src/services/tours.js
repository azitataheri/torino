import { api } from "./config"


const getTours =  () => {
return api.get('/tour')
}


const getTourById = (id) => {
    return api.get(`/tour/${id}`)
}

const addToBasket = (id) => {
    console.log('tour id:', id);
    
    return api.put(`/basket/${id}`)
}
export {
    getTours, getTourById, addToBasket
}
import { api } from "./config";

const updateProfile = (data) => {
    return api.put('/user/profile', data)
}

const getUserTours = () =>{
    return api.get('/user/tours')
}


const getUserTransactions = () => {
    return api.get('/user/transactions')
}
export {updateProfile, getUserTours, getUserTransactions}
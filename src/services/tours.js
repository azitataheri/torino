import { api } from "./config"
const getTours =  () => {
return api.get('/tour')
}

export {
    getTours
}
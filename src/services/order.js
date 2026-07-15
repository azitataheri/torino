import { api } from "./config";

const createOrder = (data) => {
return api.post('/order', data)
}

export {createOrder}
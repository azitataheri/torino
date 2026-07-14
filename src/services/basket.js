import { api } from "./config";

const getBaskets = () => {
    return api.get("/basket")
}


export {getBaskets}
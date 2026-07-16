import { api } from "./config";
const updateProfile = (data) => {
    return api.put('/user/profile', data)
}
export {updateProfile}
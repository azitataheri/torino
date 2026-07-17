import { api } from "./config" 

const sendOtp =  (mobile) => {
    return api.post('/auth/send-otp', {mobile:  mobile})
}


const checkOtp = ({mobile , code}) => {    
    return api.post('/auth/check-otp', {mobile, code})
}


const refreshTokenApi =(refreshToken) =>{
   return api.post('/auth/refresh-token', {refreshToken})
}


const getProfile =  () => {
    return api.get('/user/profile')
}
export { sendOtp , checkOtp, refreshTokenApi, getProfile}
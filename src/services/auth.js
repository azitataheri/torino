import { api } from "./config" 

const sendOtp =  (mobile) => {
    return api.post('/auth/send-otp', {mobile:  mobile})
}


const checkOtp = ({mobile , code}) => {
    return api.post('/auth/check-otp', {mobile, code})
}

export { sendOtp , checkOtp}
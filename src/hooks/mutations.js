import {
    useMutation
} from "@tanstack/react-query";
import {
    sendOtp,
    checkOtp
} from "@/services/auth";
import {
    addToBasket
} from "@/services/tours";



// Mutation for send otp code
const useSendOtpMutation = () => {
    const sendOtpMutation = async (mobile) => {
        const res = await sendOtp(mobile);
        return res;
    };

    return useMutation({
        mutationFn: sendOtpMutation
    })
}


// Mutation for checck otp code
const useCheckOtpMutation = () => {
    const checkOtpMutation = async ({
        mobile,
        code
    }) => {
        const res = await checkOtp({
            mobile,
            code
        })
        console.log('data is:', res.data)
        return res.data
    }

    return useMutation({
        mutationFn: checkOtpMutation
    })
}


// Mutation for put tour to basket
const useAddToBasketMutation = () => {
    return useMutation({
        mutationFn: addToBasket
    })
}
export {
    useSendOtpMutation,
    useCheckOtpMutation,
    useAddToBasketMutation
}
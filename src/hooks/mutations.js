import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query";
import {
    sendOtp,
    checkOtp
} from "@/services/auth";
import {
    addToBasket
} from "@/services/tours";

import {
    createOrder
} from "@/services/order";
import {
    updateProfile
} from "@/services/user";
import toast from "react-hot-toast";



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
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: addToBasket,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['basket']
            })
        }
    })
}

// Mutation for order
const useCreateOrderMutation = () => {
    const createOrderMutation = async (data) => {
        const res = await createOrder(data)
        return res
    }
    return useMutation({
        mutationFn: createOrderMutation
    })
}


// Mutation for update profile
const useUpdateProfileMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateProfile,
        onSuccess: () => {
            toast.success('اطلاعات با موفقیت ویرایش شد')

            queryClient.invalidateQueries({
                queryKey: ['user']
            })            
        }
    })
}
export {
    useSendOtpMutation,
    useCheckOtpMutation,
    useAddToBasketMutation,
    useCreateOrderMutation,
    useUpdateProfileMutation
}
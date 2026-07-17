import {
    useQuery
} from "@tanstack/react-query";
import {
    getProfile
} from "@/services/auth";
import {
    getTours
} from "@/services/tours";
import {
    getBaskets
} from "@/services/basket";
import {
    getUserTours
} from '@/services/user'

import {
    getUserTransactions
} from '@/services/user'




// For get users
const useUser = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            try {
                const res = await getProfile()
                return res.data;
            } catch (err) {
                console.log('error:', err);
                throw err
            }
        },
        retry: false
    })
}


//For tours
const useTours = () => {
    return useQuery({
        queryKey: ['tours'],
        queryFn: async () => {
            try {
                const res = await getTours()
                return res.data
            } catch (error) {
                console.log('error:', err);
                throw error
            }
        },

        retry: false
    })
}


//For get baskets
const useBaskets = () => {
    return useQuery({
        queryKey: ["basket"],
        queryFn: getBaskets
    })
}


// For get user tours
const useUserTours = () => {
    return useQuery({
        queryKey: ['usertours'],
        queryFn: getUserTours
    })
}


// For get transactions
const useUserTransactions = () => {
    return useQuery({
        queryKey: ['usertransactions'],
        queryFn: getUserTransactions
    })
}
export {
    useUser,
    useTours,
    useBaskets,
    useUserTours,
    useUserTransactions
}
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/services/auth";
import { getTours } from "@/services/tours";

// For get users
const useUser = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            try{
                const res = await getProfile()
                console.log('rsuccess:', res.data);
                return res.data;
            }catch(err){
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
        queryFn: async()=> {
            try{
                const res= await getTours()
                return res.data
            }
            catch(error){
                 console.log('error:', err);
                throw error
            }
        },

        retry: false
    })
}

export {useUser, useTours}
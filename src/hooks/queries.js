import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/services/auth";

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


export {useUser}
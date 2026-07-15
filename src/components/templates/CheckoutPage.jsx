import { passengerSchema } from "@/utils/validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import PassengerForm from "../modules/ckeckout/PassengerForm";
import BasketItem from "../modules/ckeckout/BasketItem";
import { useCreateOrderMutation } from "@/hooks/mutations";

function CheckoutPage({ data }) {
  const methods = useForm({
    resolver: yupResolver(passengerSchema),
  });

  // Use mutation
  const {mutate, isPending} = useCreateOrderMutation();

  const orderHandler = (data) => {
    console.log('form data:', data);
    mutate(data,{
      onSuccess: (res) => {console.log('success:', res.data);
      },
      onError: (err) => {
        console.log('error:', err.response?.data || err);
        
      }
    })
    
  }
  if (!data) return null;

  return (
    <div className="md:bg-[#F8F8F8] md:py-20">
      <div className="md:w-400 mx-auto rounded-xl md:px-5 py-7">
        <form onSubmit={methods.handleSubmit(orderHandler)}
        >
          <div className="grid gird-1 md:grid-cols-4 gap-8 md:gap-0">
            <div className="md:col-span-3 bg-white border border-gray-400  rounded-lg p-5 relative">
              <PassengerForm methods={methods} />
            </div>
            <div className="md:col-span-1 bg-white border border-gray-300 md:border-none rounded-lg">
              <BasketItem data={data.data} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPage;

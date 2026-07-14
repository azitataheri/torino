import Image from "next/image";
import { useUser } from "@/hooks/queries";
import { useRouter } from "next/router";

import { formatDuration, formatPrice } from "@/utils/format";
import Button from "../common/Button";
import TourItems from "../common/TourItems";
import { useAuthModal } from "@/context/AuthModalContext";
import { useAddToBasketMutation } from "@/hooks/mutations";



function TourDetailsPage({ tour }) {
  const router = useRouter()
  const {setIsOpen} = useAuthModal()
  const {data:user} = useUser();

  const {mutate} = useAddToBasketMutation()

  const reserveHandler = () => {
    console.log('user is', user);
    
    if(!user){
      setIsOpen(true)
      return;
    }

    mutate(tour.id, {
      onSuccess: () => {
        console.log('add to basket');
        
        router.push("/checkout")
      console.log('after push');
      
      },
      onError: (error) =>{console.log(error);
      }
    })
  }


  return (
    <div className="md:bg-[#F8F8F8] overflow-hidden md:py-20">
      <div className="bg-white md:border md:border-gray-300 md:w-400 mx-auto rounded-xl md:px-5 py-7">
        <div className="grid grid-1 md:grid-cols-5 gap-6">
          <div className="col-span-1 md:col-span-2">
            <Image
              src={tour.image}
              width={390}
              height={280}
              alt="tour image"
              style={{ width: "100%", borderRadius: "20px" }}
            />
          </div>
          <div className="col-span-1 md:col-span-3 space-y-20">
            <div className="flex justify-between md:flex-col">
              <span className="text-3xl font-bold">{tour.title} </span>
              <span className="text-xl md:pt-5">
                {formatDuration(tour.startDate, tour.endDate)}
              </span>
            </div>
            <div className="flex space-x-10  text-xs md:text-lg text-gray-500">
              <div className="flex items-center">
                <Image
                  src="/images/user-tick.svg"
                  width={20}
                  height={20}
                  alt="leader"
                />
                <span className="pr-2"> تور لیدر از مبدا</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/images/map.svg"
                  width={20}
                  height={20}
                  alt="leader"
                />
                <span className="pr-2">برنامه سفر</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/images/medal-star.svg"
                  width={20}
                  height={20}
                  alt="leader"
                />
                <span className="pr-2">تضمین کیفیت</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-complementry text-2xl">
                  {formatPrice(tour.price)}
                </span>
                <span className="text-color pr-2">تومان</span>
              </div>
              <Button className="leading-12 px-15" onClick={reserveHandler}>رزرو و خرید</Button>
            </div>
          </div>
        </div>
        <div className="flex justify-start md:leading-12 mt-10 md:py-5 overflow-y-hidden md:overflow-y-hidden overflow-x-scroll md:overflow-x-hidden">
          <TourItems tour={tour} />
        </div>
      </div>
    </div>
  );
}

export default TourDetailsPage;

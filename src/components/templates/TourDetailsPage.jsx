import Image from "next/image";
import {
  formatDate,
  formatDuration,
  formatVehicle,
  formatHotel,
  formatPrice,
  calculateDuration,
} from "@/utils/format";
import Button from "../common/Button";
import TourItems from "../common/TourItems";

function TourDetailsPage({ tour }) {
  return (
    <div className="md:bg-[#F8F8F8] overflow-hidden">
      <div className="bg-white md:border md:w-400 mt-10 mx-auto">
        <div className="flex-wrap md:flex py-8 px-4">
          <div className="md:w-1/3">
            <Image
              src={tour.image}
              width={397}
              height={265}
              alt="tour image"
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
            />
          </div>
          <div className="flex flex-col md:w-2/3 space-y-20">
            <div className="flex justify-between md:flex-col">
              <span className="text-3xl font-semibold">{tour.title} </span>
              <span className="text-xl">{formatDuration(tour.startDate, tour.endDate)}</span>
            </div>
            <div className="md:flex  space-x-10 text-xl">
              <div className="flex items-center">
                <Image
                  src="/images/user-tick.svg"
                  width={20}
                  height={20}
                  alt="leader"
                />
                <span> تور لیدر از مبدا</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/images/map.svg"
                  width={20}
                  height={20}
                  alt="leader"
                />
                <span>برنامه سفر</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/images/medal-star.svg"
                  width={20}
                  height={20}
                  alt="leader"
                />
                <span>تضمین کیفیت</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="text-complementry text-2xl">
                  {formatPrice(tour.price)}
                </span>
                <span className="text-color pr-2">تومان</span>
              </div>
              <Button>رزرو و خرید</Button>
            </div>
          </div>
        </div>
        <div className="flex justify-start leading-10 py-5">
          <TourItems tour={tour} />
        </div>
      </div>
    </div>
  );
}

export default TourDetailsPage;

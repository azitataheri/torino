import Image from "next/image";
import Button from "@/components/common/Button";
import Link from "next/link";
import {
  formatDate,
  formatVehicle,
  formatHotel,
  formatPrice,
  calculateDuration,
} from "@/utils/format";


function TourCard({
  id,
  title,
  image,
  fleetVehicle,
  startDate,
  endDate,
  options,
  price,
}) {
  return (
    <div className="rounded-xl border border-gray-200">
      <Image
        className="w-full object-cover"
        src={image}
        alt="tour image"
        width={278}
        height={159}
      />
      <div className="p-2">
        <p>{title}</p>
        <p className="flex text-sm text-gray-500 mt-2">
          {formatDate(startDate)}ماه. {calculateDuration(startDate, endDate)}
          روزه- {formatVehicle(fleetVehicle)}
          {formatHotel(options) && `-هتل ${formatHotel(options)}`}
        </p>
      </div>
      <div className="flex justify-between items-center border-t border-gray-300 p-2">
        <Button className="py-0.5 px-9 md:px-6">
          <Link href={`/tour/${id}`}>رزرو</Link>
        </Button>
        <div>
          <span className="text-complementry">{formatPrice(price)}</span><span className="text-color pr-2">تومان</span></div>
      </div>
    </div>
  );
}

export default TourCard;

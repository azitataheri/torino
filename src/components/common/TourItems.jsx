import Image from "next/image";
import {
  formatCompleteDate,
  formatVehicle,
  formatCities,
} from "@/utils/format";

function TourItems({ tour }) {
  const items = [
    {
      label: "مبدا",
      value: formatCities(tour.origin.name),
      border: true,
      img: "/images/routing.svg",
    },
    {
      label: "تاریخ رفت",
      value: formatCompleteDate(tour.startDate),
      border: true,
      img: "/images/calendar.svg",
    },
    {
      label: "تاریخ برگشت",
      value: formatCompleteDate(tour.endDate),
      border: true,
      img: "/images/calendar-2.svg",
    },
    {
      label: "حمل و نقل",
      value: formatVehicle(tour.fleetVehicle),
      border: true,
      img: "/images/bus.svg",
    },
    {
      label: "ظرفیت",
      value: tour.capacity,
      border: true,
      img: "/images/profile-2user.svg",
    },
     {
      label: "بیمه",
      value: 'بیمه 50 هزار دیناری',
      border: false,
      img: "/images/security.svg",
    },
  ];

  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${item.border ? "md:border-l md:border-gray-200" : ""} md:w-full md:mr-10 mt-10 md:mt-0`}
        >
          <ul className="text-center pr-0 w-32 md:w-full text-xs md:text-base leading-9">
            <li className="flex items-center justify-center">
              <span>
                <Image src={item.img} width={20} height={20} alt="item icon" />
              </span>
              <span className="text-gray-500 pr-2">{item.label}</span>
            </li>
            <li className="font-semibold">{item.value}</li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default TourItems;

import Image from "next/image";
import {
  formatDate,
  formatCompleteDate,
  formatVehicle,
  formatHotel,
  formatPrice,
  formatCities,
  calculateDuration,
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
          className={`${item.border ? "border-l border-gray-200" : ""} w-full mr-10`}
        >
          <ul className="text-center pr-0">
            <li className="flex items-center justify-center">
              <span>
                <Image src={item.img} width={20} height={20} alt="item icon" />
              </span>
              <span>{item.label}</span>
            </li>
            <li>{item.value}</li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default TourItems;

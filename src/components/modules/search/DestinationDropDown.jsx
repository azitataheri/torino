import Image from "next/image";
import { useState } from "react";
import { formatCities } from "@/utils/format";

function DestinationDropDown({ tours, value, setValue }) {
  const [isOpen, setIsOpen] = useState(false);

  
  {
    /** Filter tours and remove repetitive destiantion */
  }
  const destinations = [
    ...new Map(
      (tours ?? [])
        .filter((tour) => tour.destination)
        .map((tour) => [tour.destination.id, tour.destination]),
    ).values(),
  ];

  return (
    <div
      className="relative w-full md:w-58 border border-gray-300 md:border-none rounded-xl"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex items-center md:border-r md:border-l md:border-gray-300 px-3">
        <Image
          className="ml-3"
          src="/images/location.svg"
          width={20}
          height={20}
          alt="location"
        />
        {value ? formatCities(value.name) : "مقصد"}
      </div>
      {isOpen ? (
        <div className="absolute top-15 w-full border-2">
          {destinations.map((destination) => (
            <p
              className="cursor-pointer"
              key={destination.id}
              onClick={(e) => {
                e.stopPropagation();
                setValue("destination", destination);
                setIsOpen(false);
              }}
            >
              {formatCities(destination.name)}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default DestinationDropDown;

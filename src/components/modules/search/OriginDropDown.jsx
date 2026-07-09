import { useState } from "react";
import Image from "next/image";

import { formatCities } from "@/utils/format";

function OriginDropDown({ tours, value, setValue }) {
  const [isOpen, setIsOpen] = useState(false);

  {
    /** Filter tours and remove repetitive origins */
  }
  const origins = [
    ...new Map(
      (tours ?? [])
        .filter((tour) => tour.origin)
        .map((tour) => [tour.origin.id, tour.origin]),
    ).values(),
  ];

  return (
    <div
      className="relative w-full md:w-58 border border-gray-300 md:border-0  rounded-xl"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex items-center border-gray-300 px-3">
        <Image
          className="ml-3"
          src="/images/location.svg"
          width={20}
          height={20}
          alt="location"
        />
        {value ? formatCities(value.name) : "مبدا"}
      </div>
      {isOpen ? (
        <div className="absolute top-16 w-full border bg-white border-gray-300 rounded-lg">
          <div className="bg-[#F8F8F8] rounded-t-lg pr-1">پرتردد</div>
          {origins.map((origin) => (
            <div
              className="flex items-center cursor-pointer pr-2 border-b border-gray-100"
              key={origin.id}
              onClick={(e) => {
                e.stopPropagation();
                setValue("origin", origin);
                setIsOpen(false);
              }}
            >
              <Image
                className="ml-3"
                src="/images/location.svg"
                width={20}
                height={20}
                alt="location"
              />
              {formatCities(origin.name)}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default OriginDropDown;

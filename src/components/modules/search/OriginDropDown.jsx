import Image from "next/image";
import { useState } from "react";

function OriginDropDown({ tours , value, setValue}) {
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
      className="relative bg-red-500 w-58"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex items-center border-l border-gray-300 px-3">
        <Image
          className="ml-3"
          src="/images/location.svg"
          width={20}
          height={20}
          alt="location"
        />
        {value ? value.name : "مبدا"}
      </div>
      {isOpen ? (
        <div className="absolute top-15 w-full border-2">
          {origins.map((origin) => (
            <p className="cursor-pointer" key={origin.id} onClick={(e) => {
              e.stopPropagation();
            setValue('origin', origin);
              setIsOpen(false);
            }}>
              {origin.name}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default OriginDropDown;

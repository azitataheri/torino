import Image from "next/image";
import {
  formatVehicle,
  formatCities,
  formatCompleteDate,
  formatPrice,
  formatToursStatus,
} from "@/utils/format";

function UserToursList({ usertours }) {
  return (
    <div>
      {usertours.data.map((item) => {
        const status = formatToursStatus(item.startDate, item.endDate);
        return (
          <div
            key={item.id}
            className="border border-gray-300 rounded-xl mb-5 overflow-hidden"
          >
            {/* Header */}
            <div className="border-b border-gray-300 p-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="order-1 md:order-0 flex items-center">
                  <Image
                    src="/images/sun-fog-light.svg"
                    width={24}
                    height={24}
                    alt="tour"
                  />
                  <span className="pr-3">{item.title}</span>
                </div>

                <div className="order-2 md:order-1 flex items-center md:justify-center">
                  <Image
                    src="/images/ship.svg"
                    width={24}
                    height={24}
                    alt="vehicle"
                  />
                  <span className="pr-2">
                    سفر با {formatVehicle(item.fleetVehicle)}
                  </span>
                </div>

                <div className="order-0 md:order-2 flex md:justify-end">
                  <span className={status.className}>{status.text}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-semibold">
                    {formatCities(item.origin.name)} به{" "}
                    {formatCities(item.destination.name)}
                  </span>

                  <span className="text-gray-400 text-sm">
                    {formatCompleteDate(item.startDate)}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-center gap-2">
                  <span className="font-semibold">تاریخ برگشت</span>

                  <span className="text-gray-400 text-sm">
                    {formatCompleteDate(item.endDate)}
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex justify-between sm:block sm:border-l sm:border-gray-300 sm:pl-4">
                    <span className="text-gray-400">شماره تور</span>
                    <span className="pr-0 sm:pr-3">102095404</span>
                  </div>

                  <div className="flex justify-between sm:block">
                    <span className="text-gray-400">مبلغ پرداخت شده</span>

                    <span className="sm:pr-3 font-semibold">
                      {formatPrice(item.price)}
                      <span className="text-xs text-gray-400 pr-1">تومان</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UserToursList;

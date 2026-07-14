import Image from "next/image";
import { formatDuration, formatCities, formatPrice } from "@/utils/format";
import Button from "@/components/common/Button";

function BasketItem({ data }) {
  return (
    <>
    <div className="py-3">
      <div className="flex justify-between px-4 py-7">
        <span className="text-2xl font-semibold">
          تور {formatCities(data.destination.name)}{" "}
        </span>
        <span className="text-xl text-gray-500">
          {formatDuration(data.startDate, data.endDate)}
        </span>
      </div>
      <div
        style={{
          margin: "10px 0",
          height: "1px",
          background:
          "repeating-linear-gradient(to right, #6b6969 0px, #6b6969 10px, transparent 12px, transparent 20px)",
        }}
        ></div>
      <div className="flex justify-between items-center px-3 py-7">
        <span className="text-lg">قیمت نهایی</span>
        <div>
          <span className="text-4xl text-complementry">
           {formatPrice(data.price)}
          </span>
          <span className="text-gray-500">
            تومان
          </span>
        </div>
      </div>
      <Button className="w-90 py-3 mx-auto block text-2xl">ثبت و خرید نهایی</Button>
    </div>
  </>
  );
}

export default BasketItem;

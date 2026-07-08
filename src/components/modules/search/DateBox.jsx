import Image from "next/image";
import { DatePicker } from "zaman";

function DateBox({ setValue }) {
  return (
    <div className="relative flex items-center w-full rounded-xl md:w-1/2 border border-gray-300 md:border-none md:border-r px-5">
      <div className="flex items-center mx-auto md:mx-0 gap-2 text-gray-700">
        <Image src="/images/calendar.svg" width={20} height={20} alt="date" />
        <span>تاریخ</span>
      </div>
      <DatePicker
        range
        locale="fa"
        direction="rtl"
        inputClass="absolute inset-0 opacity-0 cursor-pointer"
        accentColor="#28A745"
        onChange={(e) => {
          setValue("from", e.from);
          setValue("to", e.to);
        }}
      />
    </div>
  );
}

export default DateBox;

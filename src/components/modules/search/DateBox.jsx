import Image from "next/image";
import { DatePicker } from "zaman";

function DateBox({ setValue }) {
  const formatFa = (date) => {
    return new Date(date).toLocaleDateString("fa-IR");
  };
  return (
    <div className="relative flex items-center border-r border-gray-300 w-1/2 px-1 bg-green-600">
      <div className="flex items-center">
        <Image
          className="ml-3"
          src="/images/calendar.svg"
          width={20}
          height={20}
          alt="date"
        />
        تاریخ
      </div>
      <div className="absolute top-5 ">
        <DatePicker
        range
          locale="fa"
          direction="rtl"
          onChange={(e) => {
            console.log('date picker is:', e);
            
                  setValue('from', e.from)
                  setValue('to', e.to)

          }}
        />
      </div>
    </div>
  );
}

export default DateBox;

import { useState } from "react";
import { DatePicker } from "zaman";
import Image from "next/image";

import FormError from "./FormError";
import { formatCompleteDate } from "@/utils/format";

function DateInput({ name, setValue, error }) {
  const [birthDayDate, setBirthDayDate] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [pickerKey, setPickerKey] = useState(0);


  return (
    <div>
      <div
        onClick={() => setShowPicker(true)}
        className="flex items-center relative h-14 w-full rounded-md px-4"
      >
        <DatePicker
          key={pickerKey}
          show={showPicker}
          inputAttributes={{ placeholder: "تاریخ تولد" }}
          locale="fa"
          direction="rtl"
          inputClass="absolute top-0 inset-0 opacity-0 cursor-pointer"
          accentColor="#28A745"
          onChange={(e) => {
            const value = formatCompleteDate(e.value);
            setBirthDayDate(value);
            (setValue(name, value, { shouldValidate: true, shouldDirty: true }),
              setShowPicker(false));
            setPickerKey((prev) => prev + 1);
          }}
        />
        <span className="text-sm text-slate-400 pr-4">
          {birthDayDate || "تاریخ تولد"}
        </span>
        <Image
          src="/images/calendar.svg"
          className="absolute right-1 pointer-events-none"
          width={15}
          height={15}
          alt="calendar"
        />
      </div>
      <FormError message={error} />
    </div>
  );
}

export default DateInput;

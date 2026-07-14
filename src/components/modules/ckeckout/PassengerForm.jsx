import Image from "next/image";

function PassengerForm() {
  return (
    <>
      <div className="text-2xl flex items-center">
        <Image
          src="/images/frame.svg"
          width={24}
          height={24}
          alt="passenger icon"
        />
        <span> مشخصات مسافر</span>
      </div>
      <form>
        <div className="grid grid-1 md:grid-cols-3 gap-8 py-5">
          <input
            class="order-0 md:order-0 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black-400 rounded-md px-3 py-4"
            placeholder="نام و نام خانوادگی"
          />
          <input
            class="order-2 md:order-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black-400 rounded-md px-3 py-4"
            placeholder="کد ملی"
          />
          <input
            class="order-3 md:order-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black-400 rounded-md px-3 py-4"
            placeholder="تاریخ تولد"
          />
          <select class="order-1 md:order-3 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black-400 rounded-md px-3 py-4">
            <option className="pl-3">زن</option>
            <option className="pl-3">مرد</option>
          </select>
        </div>
      </form>
    </>
  );
}

export default PassengerForm;

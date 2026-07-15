import Image from "next/image";

import Input from "@/components/common/Input";
import FormError from "@/components/common/FormError";
import Select from "@/components/common/Select";
import DateInput from "@/components/common/DateInput";

function PassengerForm({ methods }) {
  const {
    register,
    setValue,
    formState: { errors },
  } = methods;

  return (
    <>
      <div className="text-2xl flex items-center">
        <Image
          src="/images/frame.svg"
          width={24}
          height={24}
          alt="passenger icon"
        />
        <span className="pr-5"> مشخصات مسافر</span>
      </div>
      <div className="grid grid-1 md:grid-cols-3 gap-8 py-5">
        
        {/* fullName */}
        <div className="order-0">
          <Input placeholder="نام و نام خانوادگی" {...register("fullName")} />
          {errors.fullName && <FormError message={errors.fullName?.message} />}
        </div>

        {/* nationalCode */}
        <div className="order-1">
          <Input placeholder="کد ملی" {...register("nationalCode")} />
          {errors.nationalCode && (
            <FormError message={errors.fullName?.message} />
          )}
        </div>


        {/* birthDate */}
        <div className="flex items-center order-2 md:order-2 relative h-14 w-full  border
        border-gray-400 rounded-md px-4">
          <DateInput
            name="birthDate"
            setValue={setValue}
            error={errors.birthDate?.message}
          />
        </div>

        {/*gender*/}
        <div className="order-3">
          <Select
            {...register("gender")}
            error={errors.gender?.message}
            options={[
              { value: "female", label: "زن" },
              { value: "male", label: "مرد" },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default PassengerForm;

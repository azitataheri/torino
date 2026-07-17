import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "@/components/common/Input";
import DateInput from "@/components/common/DateInput";
import Select from "@/components/common/Select";
import Button from "@/components/common/Button";
import { useUpdateProfileMutation } from "@/hooks/mutations";
import { useUser } from "@/hooks/queries";

function PersonalForm({ isEdit, setIsEdit, setActiveTab }) {
  const { data: user } = useUser();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { mutate } = useUpdateProfileMutation();

  // UseEffect for getting previous user data
  useEffect(() => {
    if (user) {
      setValue("fullName", `${user.firstName} ${user.lastName}`);
      setValue("nationalCode", user.nationalCode);
      setValue("gender", user.gender);
      setValue("birthDate", user.birthDate);
    }
  }, [user, setValue]);

  const editUserInfoHandler = (data) => {
    // Handle fullName based on firstName, lastName of backEnd endpoint
    const [firstName, ...rest] = data.fullName.split(" ");

    // Payload= data that post
    const payload = {
      firstName,
      lastName: rest.join(" "),
      nationalCode: data.nationalCode,
      gender: data.gender,
      birthDate: data.birthDate,
    };
    mutate(payload, {
      onSuccess: () => {
        setIsEdit(false);
        setActiveTab("profile");
      },
    });
  };

  
  return (
    <form onSubmit={handleSubmit(editUserInfoHandler)}>
      <div className="border border-gray-300 space-y-6 rounded-lg mt-8">
        <div className="flex items-center justify-between py-5 px-10">
          {isEdit ? <h3 className="text-lg"> ویرایش اطلاعات شخصی</h3> : <h3 className="text-lg">  اطلاعات شخصی</h3>}
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4 px-10 space-y-4">
          <div>
            <Input {...register("fullName")} placeholder="نام و نام خانوادگی" />
          </div>
          <div>
            <Input {...register("nationalCode")} placeholder="کد ملی" />
          </div>
          <div>
            <div
              className="flex items-center order-2 md:order-2 relative h-14 w-full  border
            border-gray-400 rounded-md px-4"
            >
              <DateInput
                name="birthDate"
                setValue={setValue}
                error={errors.birthDate?.message}
              />
            </div>
          </div>
          <div>
            <Select
              {...register("gender")}
              options={[
                { value: "female", label: "زن" },
                { value: "male", label: "مرد" },
              ]}
            />
          </div>
        </div>
        <div className="border-t-0 md:border-t md:border-t-gray-300 px-10 py-3">
          <div className="flex justify-end">
            <Button className="px-13 py-2 ml-14" type="submit">
              تایید
            </Button>
            <Button
              bg="white"
              className="px-12 py-2"
              onClick={() => setIsEdit(false)}
            >
              انصراف
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PersonalForm;

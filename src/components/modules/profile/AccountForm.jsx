import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { accountValidation } from "@/utils/validation";
import { useUpdateProfileMutation } from "@/hooks/mutations";
import { useUser } from "@/hooks/queries";

function AccountForm({ setIsEdit, setActiveTab }) {
  const { data: user } = useUser();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(accountValidation),
  });

  const { mutate } = useUpdateProfileMutation();

  // UseEffect for getting previous email
  useEffect(() => {
    if (user) {
      setValue("email", `${user.email}`);
    }
  }, [user, setValue]);

  const editEmailHandler = (data) => {
    mutate(data, {
      onSuccess: () => {
        setIsEdit(false);
        setActiveTab("profile");
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(editEmailHandler)}>
      <div className="border border-gray-300 py-4 px-2 md:px-10 space-y-6 rounded-lg mt-7 md:mt-0">
        <div className="flex items-center justify-between px-10 md:px-0">
          <h3 className="text-lg">اطلاعات حساب کاربری</h3>
        </div>
        <div className="flex flex-wrap md:grid md:grid-cols-4 px-10 md:px-0">
          <div className="w-full flex items-center justify-between md:justify-normal md:col-span-2">
            <p>شماره موبایل:</p>
            <span className="pr-10">{user?.mobile}</span>
          </div>
          <div className="w-full flex items-center justify-between md:col-span-2 gap-4 mt-7 md:mt-0">
            <p className="hidden md:block">ایمیل:</p>
            <Input
              {...register("email")}
              placeholder="ایمیل"
            />
            {errors.email && <p>{errors.email.message}</p>}
            <Button className="px-5 md:px-15 py-3.5" type="submit">
              تایید
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AccountForm;

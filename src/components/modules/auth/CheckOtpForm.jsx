import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import OtpInput from "react-otp-input";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useQueryClient } from "@tanstack/react-query";
import { useCheckOtpMutation } from "@/hooks/mutations";

import Button from "@/components/common/Button";

const schema = yup.object({
  code: yup
    .string()
    .required("کد الزامی است")
    .length(6, "کد باید 6 رقمی باشد."),
});

function CheckOtpForm({ mobile, onClose }) {
  const queryClient = useQueryClient();
  {
    /* Use router */
  }
  const router = useRouter();

  {
    /*Mutate function */
  }
  const { mutate } = useCheckOtpMutation();

  {
    /* Collaboration yup and RHF */
  }
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      code: "",
    },
  });

  {
    /* Handle otp and send to dashboard after get success */
  }
  const otpHandler = (data) => {
    mutate(
      { mobile, code: data.code },
      {
        onSuccess: (data) => {
          {/* Set to cookies */}
          document.cookie = `accessToken=${data.accessToken}; path=/; max-age=${1 * 24 * 60 * 60}`;
          document.cookie = `refreshToken=${data.refreshToken}; path=/; max-age=${30 * 24 * 60 * 60}`;

          queryClient.invalidateQueries({
            queryKey: ["user"],
          });

          onClose()
          router.push("/");
        },
        onError: (error) => {
          console.log("Error:", error);
        },
      },
    );
  };
  return (
    <div
      dir="ltr"
      className="w-[358] h-[362] md:w-[550] md:h-[333] mx-auto absolute top-70 md:top-100 left-1/2 bg-white rounded-[20] translate-x-[-50%] translate-y-[-50%]"
      onClick={(e) => e.stopPropagation()}
    >
      <IoClose onClick={onClose} className="float-left m-3" />
      <div className="text-center pt-15">
        <p className="text-2xl">کد تایید را وارد کنید</p>
        <p>کد تایید به شماره {mobile} ارسال شد</p>
      </div>
      <form onSubmit={handleSubmit(otpHandler)} className="flex flex-col p-7">
        <Controller
          name="code"
          control={control}
          render={({ field }) => (
            <OtpInput
              value={field.value}
              onChange={field.onChange}
              numInputs={6}
              shouldAutoFocus
              containerStyle="flex justify-center gap-2 my-4 md:my-6"
              inputStyle={{
                width: "45px",
                height: "45px",
                textAlign: "center",
                fontSize: "18px",
                direction: "ltr",
              }}
              renderInput={(props) => (
                <input
                  {...props}
                  input="numeric"
                  className="border border-gray-400 rounded-lg"
                />
              )}
            />
          )}
        />
        <div></div>
        {errors.code && (
          <span className="text-custome-red text-sm mt-2 text-right">
            {errors.code.message}
          </span>
        )}
        <Button type="submit" className="py-3"> ورود به تورینو </Button>
      </form>
    </div>
  );
}

export default CheckOtpForm;

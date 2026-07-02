import { useSendOtpMutation } from "@/hooks/mutations";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@/components/common/Button";

const schema = yup.object({
  mobile: yup
    .string()
    .required("شماره موبایل الزامی است.")
    .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست."),
});

function SendOtpForm({ onSuccess, onClose, setMobile, setCode, setOtpSent }) {
  {
    /* Collaboration yup and RHF */
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  {
    /* Mutate */
  }
  const { mutate } = useSendOtpMutation();

  {
    /*Submit*/
  }
  const submitHandler = (data) => {
    setMobile(data.mobile);
    mutate(data.mobile, {
      onSuccess: (data) => {
        onSuccess(data);
        setCode(data.data.code);
        setOtpSent(true);
      },
    });
  };

  return (
    <div
      className="w-[358] h-[362] md:w-[550] md:h-[333] mx-auto absolute top-70 left-1/2 bg-white rounded-[20] translate-x-[-50%] translaye-y-[-50%]"
      onClick={(e) => e.stopPropagation()}
    >
      <IoClose onClick={onClose} className="float-left m-3" />
      <div className="text-center pt-15">
        <p className="text-2xl">ورود به تورینو</p>
      </div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col p-7"
      >
        <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
        <input
          className="border border-gray-400 outline-0 rounded-[6] leading-12 mt-3 mb-10 pl-3"
          type="tel"
          placeholder="0990***7200"
          id="input"
          {...register("mobile")}
        />
        {errors.mobile && (
          <span className="text-pink-600 text-sm">{errors.mobile.message}</span>
        )}
        <Button value="ارسال کد تایید" />
      </form>
    </div>
  );
}

export default SendOtpForm;

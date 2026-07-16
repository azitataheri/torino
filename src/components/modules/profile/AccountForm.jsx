import { useForm } from "react-hook-form"
import { useUser } from "@/hooks/queries"

import Input from "@/components/common/Input"
import Button from "@/components/common/Button"
import { yupResolver } from "@hookform/resolvers/yup"
import { accountValidation } from "@/utils/validation"
import { useUpdateProfileMutation } from "@/hooks/mutations"

function AccountForm() {
    const {data: user} = useUser()
    const {register, handleSubmit , formState: {errors}} = useForm({
        resolver: yupResolver(accountValidation)
    })

    const {mutate} = useUpdateProfileMutation()
    const onSubmit = (data) => {
        mutate(data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="border border-gray-300 py-4 px-2 md:px-10 space-y-6 rounded-lg mt-7 md:mt-0">
        <h3 className="text-lg">اطلاعات حساب کاربری</h3>
        <div className="flex flex-wrap md:grid md:grid-cols-4">
          <div className="flex items-center justify-between md:justify-normal md:col-span-2">
            <p>شماره موبایل:</p>
            <span className="pr-10">{user?.mobile}</span>
          </div>
          <div className="w-full flex items-center justify-between md:col-span-2 md:gap-4">
            <p className="hidden md:block">ایمیل:</p>
            <Input className="py-2" {...register('email')} placeholder="ایمیل" />
            {errors.email && (<p>{errors.email.message}</p>)}
            <Button className="px-5 md:px-15 py-2 md:py-3 ml-10" type="submit">تایید</Button>
          </div>
        </div>
      </div>

    </form>
  )
}

export default AccountForm
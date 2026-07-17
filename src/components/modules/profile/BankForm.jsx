import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"


import Input from "@/components/common/Input"
import Button from "@/components/common/Button"
import { bankValidation } from "@/utils/validation"
import { useUpdateProfileMutation } from "@/hooks/mutations"
import { useUser } from "@/hooks/queries"



function BankForm({setIsEdit, setActiveTab}) {
    const {data: user} = useUser()
    const {register, handleSubmit, setValue} = useForm({resolver: yupResolver(bankValidation)})
    const{mutate} = useUpdateProfileMutation()


    // UseEffect for get previous user bank info
    useEffect(() => {
      if(user?.payment) {
        setValue('payment.shaba_code', `${user.payment.shaba_code}`)
        setValue('payment.debitCard_code', `${user.payment.debitCard_code}`)
        setValue('payment.accountIdentifier', `${user.payment.accountIdentifier}`)
      }
    }, [user, setValue])


    const editBankInfoHandler = (data) => {
      mutate(data, {
        onSuccess: () => {
          setIsEdit(false)
          setActiveTab('profile')
        }
      })
    }
  return (
   <form onSubmit={handleSubmit(editBankInfoHandler)} >
     <div className="border border-gray-300 space-y-6 rounded-lg mt-8">
        <div>
          <div className="flex items-center justify-between cursor-pointer py-5 px-10">
            <h3 className="text-lg">اطلاعات حساب بانکی</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 px-10">
            <Input {...register('payment.shaba_code')} placeholder="شماره شبا" />
            <Input {...register('payment.debitCard_code')} placeholder="شماره کارت" />
            <Input {...register('payment.accountIdentifier')} placeholder="شماره حساب" />
          </div>
        </div>
        <div className="border-t border-t-gray-300 px-10 py-3">
          <div className="flex justify-end">
            <Button className="px-13 py-2 ml-10" type="submit">تایید</Button>
            <Button bg="white" className="px-12 py-2" type="submit" onClick={() => setIsEdit(false)}>
              انصراف
            </Button>
          </div>
        </div>
      </div>
   </form>
  )
}

export default BankForm
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"


import Input from "@/components/common/Input"
import Button from "@/components/common/Button"
import { bankValidation } from "@/utils/validation"
import { useUpdateProfileMutation } from "@/hooks/mutations"
import { useUser } from "@/hooks/queries"



function BankForm({isEdit, setIsEdit, setActiveTab}) {
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
          {isEdit ? <h3 className="text-lg"> ویرایش اطلاعات حساب بانکی</h3> : <h3 className="text-lg">  اطلاعات حساب بانکی</h3>}
          </div>
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4 px-10 space-y-4">
            <div>
              <Input {...register('payment.shaba_code')} placeholder="شماره شبا" />
            </div>
            <div>
              <Input {...register('payment.debitCard_code')} placeholder="شماره کارت" />
            </div>
            <div>
              <Input {...register('payment.accountIdentifier')} placeholder="شماره حساب" />
            </div>
          </div>
        </div>
        <div className="border-t-0 md:border-t md:border-t-gray-300 px-10 py-3">
          <div className="flex md:justify-end">
            <Button className="px-13 py-2 ml-3 md:ml-14" type="submit">تایید</Button>
            <Button bg="white" className="px-12 py-2" onClick={() => setIsEdit(false)}>
              انصراف
            </Button>
          </div>
        </div>
      </div>
   </form>
  )
}

export default BankForm
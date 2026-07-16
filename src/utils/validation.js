import * as yup from 'yup'

const accountValidation = yup.object({
    email: yup
    .string()
    .required('ایمیل معتبر نیست')
})
const passengerSchema = yup.object({
    fullName: yup
        .string()
        .required('نام و نام خانوادگی الزامی است'),
    nationalCode: yup
        .string()
        .matches(/^[0-9]{10}$/, "کد ملی باید 10 رقمی باشد")
        .required("کد ملی الزامی است"),
    birthDate: yup
        .string()
        .required('تاریخ تولد الزامی است'),
    gender: yup
        .string()
        .required('جنیست را انتخاب کنید')
})


 const bankValidation = yup.object({
  payment: yup.object({
    shaba_code: yup
      .string()
      .required("شماره شبا الزامی است"),

    debitCard_code: yup
      .string()
      .required("شماره کارت الزامی است"),

    accountIdentifier: yup
      .string()
      .required("شماره حساب الزامی است"),
  }),
});
export {
    passengerSchema, bankValidation, accountValidation
}
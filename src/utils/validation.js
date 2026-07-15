import * as yup from 'yup'

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

export {
    passengerSchema
}
import { useUser } from "@/hooks/queries";

import Image from "next/image";

function ProfileSection({ setIsEdit }) {
  const { data: user, isLoading } = useUser();
  if (isLoading) {
    return <p>در حال بارگذاری.....</p>;
  }

  // For convert female and male to farsi
  const genderLabel = {
    female: "زن",
    male: "مرد",
  };

  
  return (
    <div>
      {/* Show account info */}
      <div className="border border-gray-300 py-4 px-10 space-y-6 rounded-lg mt-7 md:mt-0">
        <h3 className="text-lg">اطلاعات حساب کاربری</h3>
        <div className="flex flex-wrap md:grid md:grid-cols-2">
          <div className="w-full flex justify-between md:justify-normal">
            <p>شماره موبایل:</p>
            <span className="pr-10">{user?.mobile}</span>
          </div>
          <div className="w-full flex items-center justify-between mt-7 md:mt-0">
            <p>ایمیل:</p>
            {user?.email ? (
              <p className="pr-10">{user.email}</p>
            ) : (
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setIsEdit(true)}
              >
                <Image
                  src="/images/edit-2.svg"
                  width={20}
                  height={20}
                  alt="edit"
                />
                <span className="pr-3 text-complementry text-md md:text-base">افزودن</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Show user info */}
      <div className="border border-gray-300 py-4 px-10 space-y-6 rounded-lg mt-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg">اطلاعات شخصی</h3>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsEdit(true)}
          >
            <Image src="/images/edit-2.svg" width={20} height={20} alt="edit" />
            <span className="pr-3 text-complementry text-sm md:text-base">ویرایش اطلاعات</span>
          </div>
        </div>
        <div className="flex flex-wrap md:grid md:grid-cols-2 md:gap-4 leading-10 md:leading-none">
          <div className="w-full flex items-center justify-between md:justify-normal">
            <p className="text-nowrap">نام و نام خانوادگی</p>
            <p className="pr-10 text-nowrap">{`${user?.firstName} ${user?.lastName}`}</p>
          </div>
          <div className="w-full flex items-center justify-between md:justify-normal">
            <p>کد ملی:</p>
            <p className="pr-10">{user.nationalCode}</p>
          </div>
          <div className="w-full flex items-center justify-between md:justify-normal">
            <p>جنسیت</p>
            <p className="pr-10">{genderLabel[user.gender]}</p>
          </div>
          <div className="w-full flex items-center justify-between md:justify-normal">
            <p>تاریخ تولد</p>
            <p className="pr-10">{user.birthDate}</p>
          </div>
        </div>
      </div>

      {/* Show user bank info */}
      <div className="border border-gray-300 py-4 px-10 space-y-6 rounded-lg mt-8">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsEdit(true)}
        >
          <h3 className="text-lg">اطلاعات حساب بانکی</h3>
          <div className="flex items-center">
            <Image src="/images/edit-2.svg" width={20} height={20} alt="edit" />
            <span className="pr-3 text-complementry text-sm md:text-base">ویرایش اطلاعات</span>
          </div>
        </div>
        <div className="flex flex-wrap md:grid md:grid-cols-2 md:gap-4 leading-10 md:leading-none">
          <div className="w-full flex items-center justify-between md:justify-normal">
            <p>شماره کارت</p>
            <p className="pr-10">{user.payment?.debitCard_code}</p>
          </div>
          <div className="w-full flex items-center justify-between md:justify-normal">
            <p>شماره شبا</p>
            <p className="pr-10">{user.payment?.shaba_code}</p>
          </div>
          <div className="w-full flex items-center justify-between md:justify-normal">
            <p>شماره حساب</p>
            <p className="pr-10">{user.payment?.accountIdentifier}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;

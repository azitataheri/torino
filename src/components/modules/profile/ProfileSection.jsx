import { useUser } from "@/hooks/queries";
import Image from "next/image";

function ProfileSection({setIsEdit}) {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return <p>در حال بارگذاری.....</p>;
  }

  return (
    <div>
      <div className="border border-gray-300 py-4 px-10 space-y-6 rounded-lg">
        <h3 className="text-lg">اطلاعات حساب کاربری</h3>
        <div className="grid grid-cols-2">
          <div className="flex">
            <p>شماره موبایل:</p>
            <span className="pr-10">{user?.mobile}</span>
          </div>
          <div className="flex items-center justify-between">
            <p>ایمیل:</p>
            {user?.email ? (
              <p className="pr-10">{user.email}</p>
            ) : (
              <div className="flex items-center cursor-pointer" onClick={() => setIsEdit(true)}>
                <Image
                  src="/images/edit-2.svg"
                  width={20}
                  height={20}
                  alt="edit"
                />
               <span className="pr-3 text-complementry">افزودن</span> 
              </div>
            )}
          </div>
        </div>
      </div>
        <div className="border border-gray-300 py-4 px-10 space-y-6 rounded-lg mt-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg">اطلاعات شخصی</h3>
            <div className="flex items-center cursor-pointer" onClick={() => setIsEdit(true)}>
                <Image
                  src="/images/edit-2.svg"
                 width={20}
                  height={20}
                  alt="edit"
                />
               <span className="pr-3 text-complementry">ویرایش اطلاعات</span> 
              </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 flex items-center">
                <p>نام و نام خانوادگی</p>
                <p className="pr-10">--</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p>کد ملی:</p>
                <p className="pr-10">--</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p>جنسیت</p>
                <p className="pr-10">--</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p>تاریخ تولد</p>
                <p className="pr-10">--</p>
              </div>
          </div>

        </div>
        <div className="border border-gray-300 py-4 px-10 space-y-6 rounded-lg mt-8">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsEdit(true)}>
            <h3 className="text-lg">اطلاعات حساب بانکی</h3>
            <div className="flex items-center">
                <Image
                  src="/images/edit-2.svg"
                 width={20}
                  height={20}
                  alt="edit"
                />
               <span className="pr-3 text-complementry">ویرایش اطلاعات</span> 
              </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 flex items-center">
                <p>شماره شبا</p>
                <p className="pr-10">--</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p>شماره کارت</p>
                <p className="pr-10">--</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p>شماره حساب</p>
                <p className="pr-10">--</p>
              </div>
          </div>

        </div>
    </div>
  );
}

export default ProfileSection;

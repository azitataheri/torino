import { useUser } from "@/hooks/queries";
import Image from "next/image";

import Input from "@/components/common/Input";
import Select from "@/components/common/Select";
import DateInput from "@/components/common/DateInput";
import Button from "@/components/common/Button";

function EditProfile() {
  const { data: user } = useUser();

  return (
    <div>
      {/* Edit email */}
      <div className="border border-gray-300 py-4 px-10 space-y-6 rounded-lg">
        <h3 className="text-lg">اطلاعات حساب کاربری</h3>
        <div className="grid grid-cols-4">
          <div className="col-span-2 flex">
            <p>شماره موبایل:</p>
            <span className="pr-10">{user?.mobile}</span>
          </div>
          <div className="col-span-2 gap-4 flex items-center justify-between">
            <p>ایمیل:</p>
            <Input placeholder="ایمیل" />
            <Button className="px-13 py-2 ml-10">تایید</Button>
          </div>
        </div>
      </div>

      {/* Edit user info */}
      <div className="border border-gray-300 space-y-6 rounded-lg mt-8">
        <div className="flex items-center justify-between p-5">
          <h3 className="text-lg">اطلاعات شخصی</h3>
        </div>
        <div className="grid grid-cols-3 gap-4 px-10">
          <div>
            <Input placeholder="نام و نام خانوادگی" />
          </div>
          <div>
            <Input placeholder="کد ملی" />
          </div>
          <div>
            <div
              className="flex items-center order-2 md:order-2 relative h-14 w-full  border
        border-gray-400 rounded-md px-4"
            >
              <DateInput />
            </div>
          </div>
          <div>
            <Select
              options={[
                { value: "female", label: "زن" },
                { value: "male", label: "مرد" },
              ]}
            />
          </div>
        </div>
        <div className="border-t border-t-gray-300 px-10 py-3">
          <div className="flex justify-end">
            <Button className="px-13 py-2 ml-10">تایید</Button>
            <Button bg="white" className="px-12 py-2">
              انصراف
            </Button>
          </div>
        </div>
      </div>

      {/* Edit user bank info */}
      <div className="border border-gray-300 space-y-6 rounded-lg mt-8">
        <div>
          <div className="flex items-center justify-between cursor-pointer p-5">
            <h3 className="text-lg">اطلاعات حساب بانکی</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 px-10">
            <Input placeholder="شماره شبا" />
            <Input placeholder="شماره کارت" />
            <Input placeholder="شماره حساب" />
          </div>
        </div>
        <div className="border-t border-t-gray-300 px-10 py-3">
          <div className="flex justify-end">
            <Button className="px-13 py-2 ml-10">تایید</Button>
            <Button bg="white" className="px-12 py-2">
              انصراف
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;

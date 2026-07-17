import Image from "next/image";
import SearchBox from "../modules/search/SearchBox";
import ToursList from "../modules/tours/ToursList";
import HeroSlider from "../modules/slider/HeroSlider";

function HomePage({ tours }) {
    return (
    <div>
      {/* Banner of home */}
      <Image
        className="w-full h-auto"
        src="/images/banner.svg"
        width={1440}
        height={350}
        alt="banner"
      />

      <div className="mx-auto md:w-400">
        <p className="text-center text-[28px] pt-5 text-gray-600 font-medium">
          <span className="text-primary">تورینو</span> برگزار کننده بهترین تور
          های داخلی و خارجی
        </p>
        {/* Search */}
        <div>
          <SearchBox tours={tours} />
        </div>
        {/* Tours list */}
        <div className="mt-10 md:mt-40">
          <div>
            <p className="text-3xl pb-4">همه تورها</p>
          </div>
          <ToursList tours={tours} />
        </div>
        {/* Shoppping by torino */}
        <div className="flex-wrap md:flex mt-30 border border-gray-300 rounded-lg">
          <div className="relative flex-wrap md:flex justify-around bg-primary w-full md:w-3/4 md:pt-8 rounded-r-lg">
            <div className="w-1/2 md:w-auto py-9 pr-5 md:pr-0 md:space-y-10">
              <p className="md:text-5xl font-bold text-secondary">
                <span className="text-white"> خرید تلفنی از</span> تورینو
              </p>
              <p className="md:text-3xl text-white">به هر کجا که میخواهید!!</p>
            </div>
            <div className="w-1/2 md:w-auto">
              <Image
                className="absolute -top-15 -left-1 md:top-13 md:left-10 w-52 h-52 md:w-[300] md:h-[200]"
                src="/images/man.svg"
                alt="man picture"
                width={300}
                height={200}
              />
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <div className="flex jus justify-center md:flex-col w-full rounded-2xl py-5 md:py-20 px-6">
              <div className="flex items-center justify-center gap-2 text-lg font-medium text-gray-800">
                <span className="font-bold">۰۲۱-۱۸۴۰</span>
                <Image
                  src="/images/call.svg"
                  alt="phone"
                  width={20}
                  height={20}
                />
              </div>

              <button className="md:mt-6 mx-auto block rounded-lg bg-secondary text-white py-2 px-8">
                اطلاعات بیشتر
              </button>
            </div>
          </div>
        </div>
        {/* Slider: Why torino */}
        <div className="md:flex items-start justify-between md:w-360 md:mt-10">
          <div>
            <div className="flex items-center pt-30">
              <div className="flex justify-center items-center text-2xl text-white w-10 h-10 rounded-full bg-secondary pt-1">
                ؟
              </div>
              <div>
                <p className="text-3xl font-bold pr-5">
                  چرا <span className="text-primary">تورینو</span> ؟
                </p>
              </div>
            </div>
            <div className="hidden md:block md:pt-5">
              <p className="text-lg font-medium">تور طبیعت گردی و تاریخی </p>
              <p className="w-3/4 leading-10 md:pt-4">
                اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در
                دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
                تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
                گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
                فرهنگی و تاریخی را خریداری کنید. اگر دوست داشته باشید که یک
                جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت چادر بزنید یا در یک
                اقامتگاه بوم گردی اتاق بگیرید، باید تورهای طبیعت‌گردی را خریداری
                کنید. اما اگر بخواهید از جاذبه‌های گردشگری و آثار تاریخی یک مقصد
                خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را خریداری
                کنید.
              </p>
            </div>
          </div>

          <div>
            <HeroSlider />
          </div>
        </div>
      </div>
      {/* Up footer */}
      <div className="border-t border-gray-300">
        <div className="grid grid-1 md:grid-cols-3 gap-20 md:w-400 mx-auto pt-5 leading-8">
          <div className="flex items-center">
            <Image
              src="/images/Ticket Discount.png"
              width={100}
              height={100}
              alt="support"
            />
            <div className="pr-3">
              <p className="font-semibold">بصرفه ترین قیمت</p>
              <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/support.png"
              width={100}
              height={100}
              alt="support"
            />
            <div className="pr-3">
              <p className="font-semibold">پشتیبانی</p>
              <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/satisfy.png"
              width={100}
              height={100}
              alt="support"
            />
            <div className="pr-3">
              <p className="font-semibold">رضایت کاربران</p>
              <p>رضایت بیش از 10هزار کاربر از تور های ما. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

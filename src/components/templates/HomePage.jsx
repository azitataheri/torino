import Image from "next/image";

import SearchBox from "../modules/search/SearchBox";
import ToursList from "../modules/tours/ToursList";

function HomePage({ tours }) {
  console.log("tours from ssr:", tours);

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

      <div className="mx-auto md:w-340">
        <p className="text-center text-[28px] pt-5 text-gray-600 font-medium">
          <span className="text-primary">تورینو</span> برگزار کننده بهترین تور
          های داخلی و خارجی
        </p>
        {/* Search */}
        <div>
          <SearchBox tours={tours} />
        </div>
        {/* Tours list */}
        <div className="mt-40">
          <p className="text-3xl pb-4">همه تورها</p>
          <ToursList tours={tours} />
        </div>
        {/* Shoppping by torino */}
        <div className="flex-wrap md:flex mt-20 border border-gray-300 rounded-lg">
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

      </div>
    </div>
  );
}

export default HomePage;

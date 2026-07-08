import Image from "next/image";
import SearchBox from "../modules/search/SearchBox";
import ToursList from "../modules/tours/ToursList";

function HomePage({ tours }) {
console.log('tours from ssr:', tours);

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

      {/*  Search by departure-destination-calendar  */}
      <div className="mx-auto md:w-[1600px]">
        <p className="text-center text-[28px] pt-5 text-gray-600 font-medium">
          <span className="text-primary">تورینو</span> برگزار کننده بهترین تور
          های داخلی و خارجی
        </p>
        <div>
          <SearchBox tours={tours} />
        <ToursList tours={tours} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

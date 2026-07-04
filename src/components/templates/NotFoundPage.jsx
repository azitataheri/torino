import Image from "next/image";

function NotFoundPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly mb-40 md:mb-0">
      <div className="order-last md:order-first">
        <p className="text-4xl font-semibold">صفحه مورد نظر یافت نشد!</p>
        <button className="bg-[#D8FFE1] text-2xl text-primary px-7 md:px-10 py-4 rounded-2xl mt-15 block mx-auto md:mx-5">
          بازگشت به صفحه اصلی
        </button>
      </div>
      <div className="order-first md:order-last">
        <Image
          src="/images/error404.svg"
          alt="server error"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}

export default NotFoundPage;

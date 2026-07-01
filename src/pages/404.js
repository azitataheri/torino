import Image from "next/image"
function NotFound() {
  return (
        <div>
          <div className="flex flex-col md:flex-row items-center justify-evenly">
            <div className="order-last md:order-first">
             <p className="text-4xl font-semibold">صفحه مورد نظر یافت نشد!</p>
                <button className="bg-[#D8FFE1] text-2xl text-primary px-8 py-3 rounded-lg mt-15 mx-5">بازگشت به صفحه اصلی</button>
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
        </div>
  )
}

export default NotFound
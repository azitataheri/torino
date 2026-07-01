import Image from "next/image";
function ServerError() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <div className="order-last md:order-first">
          <ul className="">
            <li className="md:text-right text-4xl font-semibold">
              اتصال با سرور برقرار نیست!
            </li>
            <li className="text-center md:text-right text-xl">لطفا بعدا دوباره امتحان کنید.</li>
          </ul>
        </div>
        <div className="order-first md:order-last">
          <Image
            className="border-2"
            src="/images/error-server.svg"
            alt="server error"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

export default ServerError;

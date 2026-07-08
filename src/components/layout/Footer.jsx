// import Image from "next/image";
// function Footer() {
//   return (
//     <div>
//       {/* Footer */}
//       <div className="max-w-7xl flex flex-col md:flex-row border-t border-dashed border-gray-300 md:border-solid md:border-t md:border-gray-300 justify-between mx-auto px-4 py-6">
//         <div className="flex w-full justify-around md:justify-normal md:w-1/2">
//           <ul className="space-y-2">
//             <li className="text-xl pb-5 font-semibold">تورینو</li>
//             <li>درباره ما</li>
//             <li>تماس با ما</li>
//             <li>چرا تورینو</li>
//             <li>بیمه مسافرتی</li>
//           </ul>
//           <ul className="pr-0 md:pr-20 space-y-2">
//             <li className="text-xl pb-5 font-semibold">خدمات مشتریان</li>
//             <li>راهنمای خرید</li>
//             <li>پشتیبانی آنلاین</li>
//             <li>راهنمای استرداد</li>
//             <li>پرسش و پاسخ</li>
//           </ul>
//         </div>
//         <div className="flex flex-row-reverse md:flex-col items-end w-full md:w-1/2 space-y-2">
//           <div className="space-y-4">
//             <Image
//             className="float-left"
//               src="/images/Torino.svg"
//               width={120}
//               height={40}
//               alt="torino logo"
//             />
//             <div className="text-[15px]">
//               <span>تلفن پشتیبانی:</span>
//               <span>021-8574</span>
//             </div>
//           </div>
//           <div className="flex flex-wrap gap-4 mt-7">
//             <Image  src="/images/license5.svg" width={78}  height={74} alt="license"/>
//             <Image  src="/images/license4.svg" width={78}  height={74} alt="license"/>
//             <Image  src="/images/license3.svg" width={78}  height={74} alt="license"/>
//             <Image  src="/images/license2.svg" width={78}  height={74} alt="license"/>
//             <Image  src="/images/license1.svg" width={78}  height={74} alt="license"/>
//           </div>
//         </div>
//       </div>

//       {/* Copy right */}
//       <div className="text-center border-t border-gray-300 py-4">
//         <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
//       </div>
//     </div>
//   );
// }

// export default Footer;

import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="md:w-[1600px] mx-auto px-4 py-8 border-t border-dashed md:border-solid border-gray-300">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Links */}
          <div className="w-full md:w-1/2 flex justify-around md:justify-start md:gap-24">
            <ul className="space-y-3">
              <li className="text-xl font-semibold mb-4">تورینو</li>
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>چرا تورینو</li>
              <li>بیمه مسافرتی</li>
            </ul>

            <ul className="space-y-3">
              <li className="text-xl font-semibold mb-4">خدمات مشتریان</li>
              <li>راهنمای خرید</li>
              <li>پشتیبانی آنلاین</li>
              <li>راهنمای استرداد</li>
              <li>پرسش و پاسخ</li>
            </ul>
          </div>

          {/* Logo & Licenses */}
          <div className="w-full md:w-1/2 flex flex-row-reverse md:flex-col justify-around items-center md:items-end">
            <div className="flex flex-col items-center md:items-end">
              <Image
                src="/images/Torino.svg"
                width={120}
                height={40}
                alt="Torino"
              />

              <p className="mt-4 text-[15px]">تلفن پشتیبانی: 0218574</p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-8">
              <Image
                className="w-10 h-20 md:w-19.5 md:h-18.5"
                src="/images/license1.svg"
                width={78}
                height={74}
                alt="license"
              />

              <Image
                className="w-10 h-20 md:w-19.5 md:h-18.5"
                src="/images/license2.svg"
                width={78}
                height={74}
                alt="license"
              />

              <Image
                className="w-10 h-20 md:w-19.5 md:h-18.5"
                src="/images/license3.svg"
                width={78}
                height={74}
                alt="license"
              />

              <Image
                className="w-10 h-20 md:w-19.5 md:h-18.5"
                src="/images/license4.svg"
                width={78}
                height={74}
                alt="license"
              />

              <Image
                className="w-10 h-20 md:w-19.5 md:h-18.5"
                src="/images/license5.svg"
                width={78}
                height={74}
                alt="license"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 py-4">
        <p className="text-center text-sm text-gray-500">
          کلیه حقوق این وب‌سایت متعلق به تورینو می‌باشد.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

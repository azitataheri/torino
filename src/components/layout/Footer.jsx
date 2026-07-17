import Image from "next/image";
import Link from "next/link";


function Footer() {
  return (
    <footer>
      <div className="md:w-400 mx-auto px-4 py-8 border-t border-dashed md:border-solid border-gray-300">
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
               <Link href="/">
              <Image
                src="/images/Torino.svg"
                alt="torino logo"
                width={120}
                height={40}
              />
            </Link>

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

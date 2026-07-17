import { menu } from "@/contacts/menu";
import Image from "next/image";
import { useRouter } from "next/router";

function MenuItem({ mobile }) {
  const router = useRouter();

  return (
    <>
      {menu.map((item, index) => (
        <li key={index} className="flex items-center rounded-xl cursor-pointer" onClick={()=> router.push('/')}>
          {mobile && (
            <Image src={item.image} alt={item.name} width={20} height={20} />
          )}

          <span
            className={`pr-3 ${
              router.pathname === "/" && item.name === "صفحه اصلی"
                ? "text-primary font-semibold"
                : ""
            }`}
          >
            {item.name}
          </span>
        </li>
      ))}
    </>
  );
}

export default MenuItem;

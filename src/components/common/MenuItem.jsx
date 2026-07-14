import { menu } from "@/contacts/menu";
import Image from "next/image";
function MenuItem({mobile}) {
  return (
    <>
        {menu.map((item, index) => (
          <li key={index} className="flex items-center rounded-xl">
            {mobile && (<Image src={item.image} alt={item.name} width={20} height={20}/>)}
            <span className="pr-3">{item.name}</span>
          </li>
        ))}
    </>
  )
}

export default MenuItem
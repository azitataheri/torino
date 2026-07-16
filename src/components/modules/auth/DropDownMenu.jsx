import { useUser } from "@/hooks/queries";
import { api } from "@/services/config";
import Image from "next/image";
import { useState } from "react";
import { menuItems } from "@/contacts/dropdown";
import { useRouter } from "next/router";

function DropDownMenu({ openDropDown }) {
  const router = useRouter()
  const [selectedItem, setSelectedItem] = useState(1);
  const { data: user } = useUser();
  const logoutHandler = () => {
    document.cookie = "accessToken =; Max-Age=0; path=/";
    document.cookie = "refreshToken =; Max-Age=0; path=/";

    delete api.defaults.headers.Authorization;
    window.location.href = "/";
  };
  return (
    <div className="bg-white absolute top-9 md:top-10 z-40  w-60 md:w-64  -left-5 md:-left-10 rounded-xl shadow-md">
      {openDropDown && (
        <ul className="">
          {menuItems.map((item) => (
            <li
              onClick={() => {
                setSelectedItem(item.id);
                 if (item.type === "mobile") {
                 router.push('/')
                }
                if (item.type === "profile") {
                 router.push('/profile')
                }
                if (item.type === "logout") {
                  logoutHandler();
                }
              }}
              key={item.id}
              className={`flex items-center border-b border-custome-gray last:border-b-0 p-3 cursor-pointer text-[16px] first:rounded-t-xl
                 ${selectedItem === item.id ? "bg-custome-gray text-secondary" : ""}`}
            >
              <div
                className={`rounded-full p-1.5 bg-none ${selectedItem === item.id ? "rounded-full p-1.5 bg-gray-300" : ""}`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={17}
                  height={17}
                />
              </div>
              <p
                className={`px-1 py-0.5 
                ${item.type === "logout" ? "text-custome-red" : ""} ${item.type === "mobile" ? "font-number" : ""}`}
              >
                {item.type === "mobile" ? user?.mobile : item.title}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDownMenu;

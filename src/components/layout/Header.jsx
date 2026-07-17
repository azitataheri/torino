import { useState } from "react";
import Image from "next/image";
import { useUser } from "@/hooks/queries";
import Link from "next/link";


import AuthModal from "../modules/auth/AuthModal";
import Menu from "../modules/Menu";
import DropDownMenu from "../modules/auth/DropDownMenu";
import { useAuthModal } from "@/context/AuthModalContext";

function Header() {
  const {setIsOpen} = useAuthModal()
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const { data: user, isLoading, error } = useUser();

  const toggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div>
      <div className="w-full font-bakh flex items-center justify-around py-4 shadow-md">
        <div className="w-[1600px] flex justify-between items-center mx-5 md:mx-0">
          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <Image
              src="/images/hamburger.svg"
              alt="hamburger-menu"
              width={25}
              height={20}
            />
          </button>

          {/* Logo */}
          <div className="hidden md:flex items-center">
            <Link href="/">
              <Image
                src="/images/Torino.svg"
                alt="torino logo"
                width={120}
                height={40}
              />
            </Link>
            {/* Desktop Menu */}
            <Menu />
          </div>

          {/* Button login in desktop */}
          {user ? (
            <div className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setOpenDropDown(!openDropDown)}
              >
                <div>
                  <Image
                    src="/images/profile.svg"
                    alt="profile"
                    width={21}
                    height={21}
                  />
                </div>
                <span className="flex cursor-pointer px-2 rounded-lg text-primary text-[16px] font-number">
                  {user.mobile}
                </span>
                <div>
                  <Image
                    src="/images/arrow-down.svg"
                    alt="profile"
                    width={21}
                    height={21}
                  />
                </div>
              </div>
              <DropDownMenu openDropDown={openDropDown} />
            </div>
          ) : (
            <>
              <button
                onClick={toggleModal}
                className="hidden md:flex items-center gap-2 border-2 border-primary rounded-xl px-4 py-2 text-primary"
              >
                <Image
                  src="/images/profile.svg"
                  alt="profile"
                  width={24}
                  height={24}
                />
                <span>ورود</span>
                <div className="w-px h-4 bg-primary"></div>
                <span>ثبت نام</span>
              </button>

              <Image
                onClick={toggleModal}
                className="flex md:hidden"
                src="/images/sign in buttom.svg"
                alt="signin"
                width={45}
                height={45}
              />
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        >
          {/* Drawer that open from right side */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="fixed top-0 right-0 h-screen w-56 bg-white rounded-l-xl shadow-xl z-50 p-6 transition-all duration-300"
          >
            <Menu mobile />
          </div>
        </div>
      )}

    </div>
  );
}

export default Header;

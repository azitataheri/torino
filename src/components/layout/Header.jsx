import { useState } from "react";
import AuthModal from "../modules/auth/AuthModal";
import Image from "next/image";
import Menu from "../modules/Menu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div>
      <div className="w-full font-bakh flex items-center justify-around py-3 md:shadow-md">
        <div className="w-[1600px] flex justify-between items-center mx-5 md:mx-0 ">
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
            <Image
              src="/images/Torino.svg"
              alt="torino logo"
              width={120}
              height={40}
            />
            {/* Desktop Menu */}
            <Menu />
          </div>

          {/* Login */}
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
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        >
          {/* Drawer */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="fixed top-0 right-0 h-screen w-56 bg-white rounded-l-xl shadow-xl z-50 p-6 transition-all duration-300"
          >
            <Menu mobile />
          </div>
        </div>
      )}

      {/*Render modal of mobile and otp */}
      {isOpen && <AuthModal onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default Header;

// import Header from "./Header";
// import Footer from "./Footer";

// function Layout({ children }) {
//   return (
//     <div className="p-5 md:p-0 min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-1">{children}</main>
//       <Footer />
//     </div>
//   );
// }

// export default Layout;


import Header from "./Header";
import Footer from "./Footer";
import AuthModal from "../modules/auth/AuthModal";
import { useAuthModal } from "@/context/AuthModalContext";

function Layout({ children }) {
  const {isOpen, setIsOpen} = useAuthModal()

  return (
    <div className="p-0 min-h-screen flex flex-col">
      <Header setIsOpen={setIsOpen} />

      <main className="flex-1 selection:bg-green-300 p-5 md:p-0">{children}</main>

      <Footer />

      {isOpen && (
        <AuthModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default Layout;

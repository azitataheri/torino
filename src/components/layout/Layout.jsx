import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="p-5 md:p-0 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

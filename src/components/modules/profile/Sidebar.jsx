import Image from "next/image";

function Sidebar({ activeTab, setActiveTab }) {
  // Array of sidebar items
  const sides = [
    {
      id: 1,
      title: "پروفایل",
      img: "/images/profile.svg",
      slug: "profile",
    },
    {
      id: 2,
      title: "تورهای من",
      img: "/images/sun-fog.svg",
      slug: "tours",
    },
    {
      id: 3,
      title: "تراکنش ها",
      img: "/images/convert-card.svg",
      slug: "transaction",
    },
  ];

  return (
    <div className="flex md:block md:rounded-xl border-b border-b-gray-400 md:border md:border-gray-300 text-sm md:text-base">
      {sides.map((side) => (
        <div
          key={side.id}
          // Handle styles when active an item in both of mobile and desktop status
          className={`${
            side.slug === activeTab
              ? side.slug === "profile"
                ? "border-b-2 border-b-primary md:bg-primary-300 md:rounded-t-xl"
                : side.slug === "transaction"
                  ? "border-b-2 border-b-primary md:bg-primary-300 md:rounded-b-xl"
                  : "border-b-2 border-b-primary md:bg-primary-300 md:rounded-none"
              : "border-b-primary md:bg-transparent"
          } flex items-center justify-center md:justify-normal md:border-b md:last:border-b-0 md:border-b-gray-300 px-4 py-5 cursor-pointer`}
          onClick={() => setActiveTab(side.slug)}
        >
          <Image src={side.img} width={20} height={20} alt="sidebar icons" />
          <p
            className={
              side.slug === activeTab ? "text-primary pr-2" : "text-black pr-2"
            }
          >
            {side.title}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Sidebar;

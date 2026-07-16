import Image from "next/image";

function Sidebar({ activeTab, setActiveTab }) {
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
    <div className="rounded-xl border border-gray-300">
      {sides.map((side) => (
        <div
          key={side.id}
          className={`${
            side.slug === activeTab
              ? side.slug === "profile"
                ? "bg-primary-300 rounded-t-xl"
                : side.slug === "transaction"
                  ? "bg-primary-300 rounded-b-xl"
                  : "bg-primary-300 rounded-none"
              : "bg-transparent"
          } flex items-center border-b last:border-b-0 border-b-gray-300 px-4 py-5 cursor-pointer`}
          onClick={() => setActiveTab(side.slug)}
        >
          <Image src={side.img} width={20} height={20} alt="sidebar icons" />
          <p
            className={side.slug === activeTab ? "text-primary pr-2" : "text-black pr-2"}
          >
            {side.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;

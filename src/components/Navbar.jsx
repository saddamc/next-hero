"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(null); // Track which menu is open
  const [closeTimeout, setCloseTimeout] = useState(null); // Track timeout for closing

  const links = [
    {
      title: "Post",
      path: "/posts"
    },
    {
      title: "Meals",
      path: "/meals"
    },
    {
      title: "Gallery",
      path: "/gallery"
    },
    {
      title: "About",
      path: "/about",
    },
    // {
    //   title: "Service",
    //   path: "/service",
    // },
    // {
    //   title: "Contacts",
    //   path: "/contacts",
    // },
    // {
    //   title: "Categories",
    //   path: "/categories",
    // },
    // {
    //   title: "Blogs",
    //   path: "/blogs",
    //   submenu: [
    //     {
    //       title: "Special Blog",
    //       path: "/blogs/special-blog",
    //     },
    //   ],
    // },
  ];

  const handler = () => {
    router.push("/login");
  };

  const handleMouseOver = (path) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout); // Clear any existing timeout
    }
    setOpenMenu(path); // Open the menu
  };

  const handleMouseOut = () => {
    const timeout = setTimeout(() => {
      setOpenMenu(null); // Close the menu after 2 seconds
    }, 2000);
    setCloseTimeout(timeout); // Save the timeout ID
  };

  // Layout
  if (pathName.includes("dashboard"))
    return <div className="bg-green-400">Dashboard Layout</div>;

  return (
    <nav className="bg-red-500 px-6 py-4 flex justify-between items-center">
      <Link href={"/"} >
        <h6 className="text-3xl">
          Next <span className="text-cyan-500"> Hero</span>
        </h6>
      </Link>

      <ul className="flex justify-between items-center space-x-4">
        {links?.map((link) => (
          <li
            key={link.path}
            className="relative"
            onMouseOver={() => handleMouseOver(link.path)}
            onMouseOut={handleMouseOut}
          >
            <Link
              className={`${
                pathName === link.path && "text-cyan-300 font-bold"
              }`}
              href={link.path}
            >
              {link.title}
            </Link>
            {link.submenu && openMenu === link.path && (
              <ul className="absolute top-full left-0 bg-white w-[130px] shadow-lg rounded-md mt-2">
                {link.submenu.map((submenuItem) => (
                  <li
                    key={submenuItem.path}
                    className="px-4 py-2 hover:bg-gray-200"
                  >
                    <Link href={submenuItem.path}>{submenuItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <button
        onClick={handler}
        className="bg-white text-cyan-400 p-4 cursor-pointer rounded-xl text-xl"
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;

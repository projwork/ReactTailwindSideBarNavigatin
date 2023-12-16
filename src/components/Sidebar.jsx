import React, { useState } from "react";
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsFillImageFill,
  BsPerson,
  BsReverseLayoutTextSidebarReverse,
  BsSearch,
} from "react-icons/bs";
import {
  AiFillEnvironment,
  AiFillHome,
  AiOutlineBarChart,
  AiOutlineContacts,
  AiOutlineFileText,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineMail,
  AiOutlineSetting,
} from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { SiGnuprivacyguard } from "react-icons/si";
import { RiDashboardFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export function Sidebar({ children }) {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", path: "/" },
    { title: "Home", icon: <AiFillHome />, path: "/home" },
    { title: "About", icon: <FcAbout />, path: "/about" },
    { title: "Login", icon: <AiOutlineLogin />, path: "/login" },
    { title: "Signup", icon: <SiGnuprivacyguard />, path: "/signup" },
    { title: "Contact", icon: <AiOutlineContacts />, path: "/contact" },
  ];

  return (
    <>
      <div className="flex">
        <div
          className={`bg-dark-purple h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } relative`}
        >
          <BsArrowLeftShort
            className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex">
            <AiFillEnvironment
              className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-2xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              CRM
            </h1>
          </div>

          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <React.Fragment key={index}>
                <NavLink
                  to={menu.path}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                    menu.spacing ? "mt-9" : "mt-2"
                  }`}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <RiDashboardFill />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && open && (
                    <BsChevronDown
                      className={`${submenuOpen && "rotate-180"}`}
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                    />
                  )}
                </NavLink>

                {menu.submenu && submenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        key={index}
                        className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md"
                      >
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>

        <main className="p-7">{children}</main>
      </div>
    </>
  );
}

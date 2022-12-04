import { NextPage } from "next";
import FametalLogo from "../../assets/FametalLogo.png";
import Image from "next/image";
import { useState } from "react";
import s from "./navBar.module.css";

const links = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "Nosotros",
    link: "",
  },
  {
    name: "Obras",
    link: "",
  },
  {
    name: "Sectores",
    link: "",
  },
  {
    name: "Contacto",
    link: "",
  },
];

const NavBar: NextPage = () => {
  const [menu, setMenu] = useState(false);
  const openMenu = (): void => {
    setMenu(!menu);
    console.log("Status:", menu);
  };
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b-blue-500 border-b-[.5px]">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <Image
            priority
            src={FametalLogo}
            className="h-[100px] w-[100px] bg-red-transparent absolute"
            alt="Fametal Logo"
          />
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="border border-sky-400 text-sky-400 font-normal bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-transparent "
          >
            Log In
          </button>
          <button
            onClick={() => openMenu()}
            id={menu ? s.menu : ""}
            className="flex flex-col w-[30px] h-[3rem] bg-transparent gap-[9.4px] pt-[15px] md:hidden"
          >
            <div
              className={`bg-black h-[1.5px] w-full rounded duration-[.5s] origin-left`}
            ></div>
            <div
              className={`bg-black h-[1.5px] w-full rounded duration-[.5s] origin-left `}
            ></div>
            <div
              className={`bg-black h-[1.5px] w-full rounded duration-[.5s] origin-left`}
            ></div>
          </button>
        </div>
        <div
          className={`md:flex md:items-center absolute md:pb-0 pb-12 md:static bg-transparent z-[-1] left-0 w-full h-full md:w-auto transition-all duration-500 ease-in ${
            menu ? "top-16" : "top-[-490px]"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-3 z-[-1] text-center rounded-lg md:flex-row md:space-x-10 md:text-sm md:font-blond md:border-0 bg-white">
            {links.map((l, i) => (
              <li key={i}>
                <a
                  href={l.link}
                  className="hover:cursor-pointer pointer block py-2 pl-3 pr-4 text-black md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

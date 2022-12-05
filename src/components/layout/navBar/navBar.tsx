import { NextPage } from "next";
import FametalLogo from "../../../assets/FametalLogo.png";
import Image from "next/image";
import { useState } from "react";
import Links from "./links";
import MenuIcon from "./menuIcon";
import Cookies from "universal-cookie";
import FlagsIcon from "./flagsLenguaje";
import { useRouter } from "next/router";

const NavBar: NextPage = () => {
  // ------->   Constants  <-------
  const { push } = useRouter();
  // -------> Local states <-------
  const [menu, setMenu] = useState(false);
  const [lenguaje, setLenguaje] = useState("ES");
  const cookie = new Cookies();
  // -------> Functions <-------
  const openMenu = (): void => {
    setMenu(!menu);
  };
  const setLenguajes = async () => {
    setLenguaje(lenguaje == "ES" ? "EN" : "ES");
    cookie.set("Lenguaje", lenguaje, { path: "/" });
    push("/");
  };
  cookie.set("Lenguaje", lenguaje, { path: "/" });
  return (
    <nav className="bg-[#5261EA]/80 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b-blue-500 border-b-[.5px] backrop-blur-xl">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <Image
            priority
            src={FametalLogo}
            className="h-[100px] w-[100px] bg-red-transparent absolute"
            alt="Fametal Logo"
          />
        </a>
        <div className="flex md:order-3 gap-3">
          <button
            type="button"
            className="border border-white text-white font-normal bg-blue-white focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Log In
          </button>
          <FlagsIcon setLenguajes={setLenguajes} />
          <MenuIcon menu={menu} openMenu={openMenu} />
        </div>
        <Links menu={menu} />
      </div>
    </nav>
  );
};

export default NavBar;

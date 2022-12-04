import { NextPage } from "next";
import Image from "next/image";
import FametalLogo from "../../../assets/FametalLogo.png";
import List from "./list";
import Lists from "./lists";
import RightsSection from "./rigthsSection";

const Footer: NextPage = () => {
  return (
    <footer className="p-4 sm:p-6 mt-10 border-t border-t-blue-800 bg-[#5261EA]">
      <div className="md:flex md:justify-between relative">
        <div className="md:mb-0 w-full md:w-fit grid place-items-center">
          <a href="https://flowbite.com/" className="flex items-center">
            <Image
              src={FametalLogo}
              className="mr-3 md:absolute bottom-[10px]"
              alt="FlowBite Logo"
              priority
            />
          </a>
        </div>
        <Lists />
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <RightsSection />
    </footer>
  );
};

export default Footer;

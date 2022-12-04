import SocialNetworkIcon from "../../iconRedNetwork";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const icons = [
  <BsInstagram className="text-2xl hover:text-3xl duration-75" />,
  <BsFacebook className="text-2xl hover:text-3xl duration-75" />,
];

const RightsSection = () => {
  return (
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
      <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <ul className="flex gap-6">
          {icons.map((i, index) => (
            <SocialNetworkIcon name={i} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightsSection;

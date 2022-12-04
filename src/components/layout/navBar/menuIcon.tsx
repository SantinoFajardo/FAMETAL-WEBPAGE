import s from "./navBar.module.css";

export default function MenuIcon({
  menu,
  openMenu,
}: {
  menu: boolean;
  openMenu: Function;
}) {
  return (
    <button
      onClick={() => openMenu()}
      id={menu ? s.menu : ""}
      className="flex flex-col w-[30px] h-[3rem] bg-transparent gap-[9.4px] pt-[15px] lg:hidden"
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
  );
}

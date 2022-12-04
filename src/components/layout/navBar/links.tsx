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

export default function Links({ menu }: { menu: any }) {
  return (
    <div
      className={`hidden lg:flex md:items-center absolute md:pb-0 pb-12 md:static bg-transparent z-[-1] left-0 w-full h-full md:w-auto transition-all duration-500 ease-in ${
        menu ? "top-16" : "top-[-490px]"
      }`}
      id="navbar-sticky"
    >
      <ul className="flex flex-col hover:cursor-pointer p-3 z-[-1] text-center rounded-lg md:flex-row md:space-x-10 md:text-sm md:font-blond md:border-0 bg-white">
        {links.map((l, i) => (
          <li key={i}>
            <a
              href={l.link}
              className="hover:cursor-pointer text-lg pointer block py-2 pl-3 pr-4 text-black md:bg-transparent md:p-0"
              aria-current="page"
            >
              {l.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

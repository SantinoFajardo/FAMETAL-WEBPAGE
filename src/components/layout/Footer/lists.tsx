import List from "./list";

const resources = [
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

const followUs = [
  {
    name: "Facebook",
    link: "",
  },
  {
    name: "Instagram",
    link: "",
  },
];

const contact = [
  {
    name: "Whatsapp/Daniel",
    link: "",
  },
  {
    name: "Whatsapp/Carlos",
    link: "",
  },

  {
    name: "Gmail",
    link: "",
  },
];

const Lists = () => {
  return (
    <div className="grid grid-cols-3 sm:text-center sm:gap-6 sm:grid-cols-3">
      <div>
        <h2 className="mb-6 text-sm font-semibold uppercase text-white">
          Resources
        </h2>
        <ul className="text-white">
          {resources.map((r, i) => (
            <List list={r.name} key={i} />
          ))}
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-white uppercase">
          Follow us
        </h2>
        <ul className="text-white">
          {followUs.map((f, i) => (
            <List list={f.name} key={i} />
          ))}
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-white uppercase">
          Contact
        </h2>
        <ul className="text-white">
          {contact.map((c, i) => (
            <List list={c.name} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lists;

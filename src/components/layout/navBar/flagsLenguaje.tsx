import Image from "next/image";
import ArgentinaFlag from "../../../assets/ArgentinaFlag.png";
import UsaFlag from "../../../assets/usaflag.png";

const FlagsIcon = ({
  lenguaje,
  setLenguajes,
}: {
  lenguaje: string;
  setLenguajes: Function;
}) => {
  return (
    <button onClick={() => setLenguajes()}>
      <Image
        src={lenguaje == "ES" ? ArgentinaFlag : UsaFlag}
        alt={"Flag"}
        className="w-10"
      />
    </button>
  );
};

export default FlagsIcon;

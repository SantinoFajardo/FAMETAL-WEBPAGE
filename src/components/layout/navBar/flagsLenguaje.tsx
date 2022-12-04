import Image from "next/image";
import ArgentinaFlag from "../../../assets/ArgentinaFlag.png";
import UsaFlag from "../../../assets/usaflag.png";
import Cookies from "universal-cookie";

const FlagsIcon = ({ setLenguajes }: { setLenguajes: Function }) => {
  const cookie = new Cookies();
  const idiom = cookie.get("Lenguaje");
  return (
    <button onClick={() => setLenguajes()}>
      <Image
        src={idiom == "ES" ? ArgentinaFlag : UsaFlag}
        alt={"Flag"}
        className="w-10"
        priority
      />
    </button>
  );
};

export default FlagsIcon;

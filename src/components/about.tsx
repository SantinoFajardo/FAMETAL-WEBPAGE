import { NextPage } from "next";
import Cookies from "universal-cookie";
import lenguajes from "../utils/lenguajes";

const About: NextPage = () => {
  const cookie = new Cookies();
  const idiom = cookie.get("Lenguaje");
  return (
    <div>
      <h1 className="text-center uppercase text-3xl">
        {idiom == "ES" ? lenguajes.about.title.es : lenguajes.about.title.en}
      </h1>
      <div>
        <button onClick={() => console.log(idiom)}>adsfsdf</button>
      </div>
    </div>
  );
};

export default About;

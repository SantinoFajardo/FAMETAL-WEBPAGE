import { NextPage } from "next";
import Image from "next/image";
import Cookies from "universal-cookie";
import lenguajes from "../utils/lenguajes";
import FametalLogo from "../assets/Fametal-logo.png";

const About: NextPage = () => {
  const cookie = new Cookies();
  const idiom = cookie.get("Lenguaje");
  return (
    <div>
      <h1 className="text-center uppercase text-2xl sm:text-3xl">
        {idiom == "ES" ? lenguajes.about.title.es : lenguajes.about.title.en}
      </h1>
      <div className="py-[30px] flex-wrap flex justify-center gap-10">
        <Image src={FametalLogo} alt="Fametal" className="w-[300px]" />
        <div className="md:w-2/4 text-center md:text-start p-8">
          {lenguajes.about.paragraphs.map((p, i) => (
            <div className="my-4">
              <h3 className="text-center md:text-start">
                <b>{idiom == "ES" ? p.titleEs : p.titleEn}</b>
              </h3>
              <p>{idiom == "ES" ? p.contentEs : p.contentEn}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

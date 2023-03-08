import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="rolam" className="scroll-mt-20 sm:px-10">
      <div className="mx-auto my-5 max-w-7xl  rounded-2xl  bg-pink-400 bg-gradient-to-r from-violet-400 p-4 shadow-md sm:my-20  sm:p-10 ">
        <div className="mx-auto my-10 max-w-6xl ">
          <div className="w-full items-center gap-10 lg:flex">
            <div className="relative mx-auto mb-10 w-80 lg:mb-0 lg:w-2/6">
              <Image src={"/assets/ximena.jpg"} alt="Kovács Ximena" title="" width={665} height={830} objectFit="fill" className="rounded-xl"></Image>
            </div>
            <div className="relative rounded-lg border-2 border-white p-4 pt-8  shadow-xl sm:p-10 lg:w-4/6">
              <div className=" absolute -top-6 ">
                <h1 className="rounded-xl border-2 border-white bg-white py-2 px-8 text-xl font-bold tracking-wider text-violet-600">Rólam</h1>
              </div>
              <div className="w text-justify font-semibold text-white sm:text-lg">
                Kovács Ximena vagyok, Erdélyben Nagyváradon születtem. Gárdony- Dinnyés településen élek a Velencei tó csodás környékén. Saját magam
                készítem a mandaláimat, emellett mandala élményfestő műhelyt tartok Velencei tó körül és itt Dinnyésen. A másik nagy szerelem
                foglalkozásom a Hangterápia. A hangok és a rezgések egész életemben ott lakoztak bennem, amelyek most bontakoztak ki igazán.
                Gyerekkorom óta az életküldetésemnek érzem azt, hogy segítsek az embereknek és az embereken. 15 éven keresztül más munkában próbáltam
                megtalálni önmagam, de aztán a hangterápia világában találtam igazán magamra. A mandalákra úgy találtam rá, hogy az egyik kedves
                ismerősömnél láttam meg egy csodálatos mandalát és csak ámultam, hogy egy ember, hogy képes egy ilyen csodát összehozni. Azonnal el is
                kezdetem utána járni, hogy hogyan kell mandalát készíteni. Napokig csak videókat néztem róla és próbáltam saját magam is. Azután már
                nem is volt szükségem mintákra csak csináltam. A ceruzából körök jöttek, aztán a körökből mandalák.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

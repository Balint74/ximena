import Image from "next/image";
import React from "react";

const Mandala = () => {
  return (
    <section className="bg-gray-100 p-3 sm:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col rounded-xl bg-white  p-5 shadow-xl sm:p-10 md:flex-row">
          <div className="relative mx-auto h-72 overflow-hidden rounded-xl md:w-1/3">
            <Image src={"/assets/4.jpg"} alt="Mandalafestés" title="" width={300} height={300} objectFit="cover"></Image>
          </div>
          <div className="w-full py-5 text-justify md:px-20">
            <h2 className="mb-10 text-center text-3xl tracking-wide underline decoration-pink-600">Mandala</h2>
            <p className="">
              A mandala szó a klasszikus indiai nyelvből a szanszkrit-ből származik, jelentése: kör, ív, körszelet vagy korong. Más vélemény szerint
              jelentése az elmével is kapcsolatban áll (manas jelentése ”elme”). Tehát a mandala sokkal több mint egy egyszerű geometriai alak. A
              buddhista és hindu kultúrában hatalmas szimbolikus jelentéssel bír. A mandalákról úgy vélik, hogy a világegyetem különböző aspektusait
              képviselik. Kínában, Japánban és Tibetben a meditáció és az imádság szimbólumaiként használják leginkább.
            </p>
          </div>
        </div>
        <div className="mt-10  rounded-xl bg-white p-7 shadow-xl sm:p-10">
          <h2 className="mb-10 text-center text-3xl tracking-wide underline decoration-pink-600">Mandalák jelentése és színei:</h2>
          <div className="flex-row justify-center md:flex md:space-x-10">
            <ul className=" ">
              <li className="relative z-0 my-4 rounded-md px-4 py-4 shadow-md ">
                <div className="absolute -top-3 -left-3 z-10 h-8 w-8 rounded-full border-2 bg-white shadow-lg"></div>
                Fehér: nyugalom, tökéletesedés, megkönnyebbülés, együttérzés
              </li>
              <li className="relative z-0 my-4 rounded-md border-2 border-black px-4 py-4 shadow-md">
                <div className="absolute -top-3 -left-3 z-10 h-8 w-8 rounded-full  bg-black shadow-lg"></div>
                Fekete: belátás, megérzés, újjászületés, titok
              </li>
              <li className="relative z-0 my-4 rounded-md border-2 px-4 py-4 shadow-md ">
                <div className="absolute -top-3 -left-3 z-10 h-8 w-8 rounded-full  bg-gray-200 shadow-lg"></div>
                Szürke: szeretet, szelídség, hűség, lelki gyógyulás
              </li>
              <li className="relative z-0 my-4 rounded-md border-2 border-yellow-300 px-4 py-4 shadow-sm">
                <div className="absolute -top-3 -left-3 z-10 h-8 w-8 rounded-full  bg-yellow-300 shadow-lg"></div>
                Sárga: természet, fogékonyság, intelligencia, barátságosság
              </li>
              <li className="relative z-0 my-4 rounded-md border-2 border-blue-500 px-4 py-4 shadow-md">
                <div className="absolute -top-3 -left-3 z-10 h-8 w-8 rounded-full  bg-blue-500 shadow-lg"></div>
                Kék: harmónia, ellazulás, elégedettség
              </li>
              <li className="relative z-0 my-4 rounded-md border-2 border-red-600 px-4 py-4 shadow-md">
                <div className="absolute -top-3 -left-3 z-10 h-8 w-8 rounded-full  bg-red-600 shadow-lg"></div>
                Tűzpiros: változás, hatalom, szerelem, rettenthetetlenség
              </li>
            </ul>
            <ul>
              <li className="relative z-0 my-4 rounded-md border-2 border-[#aa04aa] px-4 py-4 shadow-md">
                <div className="absolute -top-3 -left-3 z-10 h-8 w-8 rounded-full  bg-[#800080] shadow-lg"></div>
                Bíbor: bölcsesség, idealizmus, emberszeretet
              </li>
              <li className="relative z-0 my-4 rounded-md border-2 border-pink-400 px-4 py-4 shadow-md">
                <div className="absolute -top-3 -left-3 z-10 h-8 w-8 rounded-full  bg-pink-400 shadow-lg"></div>
                Rózsaszín: egyetemes gyógyulás, a “belső” gyógyulása, érzékenység
              </li>
              <li className="relative z-0 my-4 rounded-md border-2 border-orange-500 px-4 py-4 shadow-md">
                <div className="absolute -top-3 -left-3 z-10 h-8 w-8 rounded-full  bg-orange-500 shadow-lg"></div>
                Narancs: becsvágy, vitalitás, megérzés, önkontroll
              </li>
              <li className="relative z-0 my-4 rounded-md border-2 border-green-500 px-4 py-4 shadow-md">
                <div className="absolute -top-3 -left-3 z-10 h-8 w-8 rounded-full  bg-green-500 shadow-lg"></div>
                Zöld: gyógyulás, bizalom, nyugalom, növekedés, kapcsolat
              </li>
              <li className="relative z-0 my-4 rounded-md border-2 border-[#ad5702] px-4 py-4 shadow-md">
                <div className="absolute -top-3 -left-3 z-10 h-8 w-8 rounded-full  bg-[#964B00] shadow-lg"></div>
                Barna: tudatos kötődés a környezethez, stabilitás, földközeliség
              </li>
              <li className="relative z-0 my-4 rounded-md px-4 py-4 shadow-md">
                <div className="tobg-[#D3D3D3] absolute -top-3 -left-3 z-10 h-8 w-8   rounded-full bg-gradient-to-r from-gray-200 shadow-lg"></div>
                Ezüst: áradó érzelmek, érzékfölötti, természetfölötti képességek, jólét
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mandala;

import Image from "next/image";
import React from "react";

const Workshop = () => {
  return (
    <div id="foglalkozas" className="bg-gray-100 py-10 px-4 sm:px-10 scroll-mt-20">
      <div className="mx-auto flex  max-w-7xl flex-col space-x-10 sm:flex-row">
        <div className="w-full">
          <h1 className="text-3xl  underline decoration-violet-500 ">
            Foglalkozás
          </h1>
          <p className="my-5 text-justify">
            A Mandala csodálatos ereje, a színekben és formákban tükröződik
            vissza. Elkészítése ráhangolódást és elmélyülést hoz, annak a
            szépségére amit szeretnél megteremteni a mindennapjaidban. Rezgése
            harmonizálja a teret, feltölt energiával, szépsége gyönyörködtet.
            Megajándékozhatod magadat, vagy készítheted Anyukádnak,
            Nagymamádnak, Testvérednek, Gyermekednek... Akár magadnak készíted,
            akár egy szeretett személyt szeretnél vele megajándékozni, biztosan
            örömet szerzel vele. Személyes ajándék. Minden eszközt biztosítunk,
            ha még soha nem festettél, nem akadály. Vegyél részt bátran a
            MANDALA festésen, az élmény nem marad el.
          </p>
          <div className="divide-y-2  rounded-md border-2 border-violet-300 bg-white px-3">
            <div className="flex  p-3 py-5">
              <div className=" flex flex-col items-center sm:flex-row sm:gap-4">
                <Image
                  src={"/assets/canvas.svg"}
                  alt=""
                  width={30}
                  height={30}
                ></Image>
                <div className="mt-4 sm:mt-0 text-center sm:text-left">
                  {" "}
                  A mandalát 30x30-as vászonra készítjük.<span>-</span> Minden
                  eszközt biztosítunk.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center p-3 py-5  sm:flex-row sm:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="mt-4 sm:mt-0 text-center sm:text-left">
                Helyszín: Ximena - Mandala Egészségközpont: 2485
                Gárdony-Dinnyés, Gárdonyi utca 47.
              </div>
            </div>
            <div className=" flex items-center justify-between gap-4 p-3 py-5 flex-col sm:flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
             <p className="text-center sm:text-left"> Jelentkezni: a 06-70-3395698-as telefon számon vagy a
              nagyximena75@gmail.hu email címen tudod megtenni.</p>
            </div>
            <div className=" flex sm:justify-start items-center justify-center gap-4 p-3 py-5 ">
              <div className="flex sm:gap-4 flex-col sm:flex-row justify-start sm:items-start items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                <p className="mt-4 sm:mt-0">A foglalkozás ára: 9900 Ft</p>
                <span>-</span>
                <p className="text-center sm:text-left"> Helyedet 3000 Ft előleg utalásával biztosíthatod.</p>
              </div>
            </div>
            <div className=" flex items-center  gap-4 p-3 py-5 flex-col sm:flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <div className="text-center sm:text-left">
                <p >
                  K&H: 10405066-66535449-54571022 <span>-</span> Kovács Ximena
                  Gizella
                </p>
                <p className="text-gray-600">
                  A megjegyzésbe, kérlek írd be, a nevedet és a mandala szót.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative sm:w-3/5 ">
          <Image
            src={"/assets/work.jpg"}
            alt=""
            title=""
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Workshop;

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hangmasszazs = () => {
  return (
    <main className="relative">
      <Head>
        <title>Peter Hess féle Hangmasszázs, Hangterápia - Ximena</title>
        <meta
          name="description"
          content="Élvezd a harmóniát Peter Hess féle Hangmasszázzsal! Mély meditáció, gyerekeknek is ideális. Tapasztald meg a hangterápia gyógyító hatását!"
        />
        <meta name="robots" content="index, follow" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <nav className="fixed top-0 left-0 right-0 z-30">
        <div className=" flex items-center justify-center p-5 sm:justify-between">
          <Link href="/" passHref classname="">
            <div className="ml-5 hidden cursor-pointer text-4xl font-bold tracking-widest text-white sm:block">Ximena</div>
          </Link>
          <div className="flex gap-5 text-lg font-semibold md:gap-10 lg:mr-20 lg:gap-32">
            <Link href="/" passHref>
              <button className=" rounded-lg bg-white/40 py-1 px-4 font-semibold text-gray-900 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 hover:text-amber-600 hover:shadow-2xl">
                Főoldal
              </button>
            </Link>
            <Link href="/kristalyok" passHref>
              <button className=" rounded-lg bg-white/40 py-1 px-4 font-semibold text-gray-900 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 hover:text-amber-600 hover:shadow-2xl">
                Kristályok
              </button>
            </Link>
            <Link href="/#kapcsolat" passHref>
              <button className=" rounded-lg bg-white/50 py-1 px-4 font-semibold text-gray-900 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 hover:text-amber-700 hover:shadow-2xl">
                Kapcsolat
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {/* HERO */}
      <section className="relative h-[90vh] pt-20">
        <Image src={"/assets/hangtal-1.jpg"} priority={true} alt="Hangtál" layout="fill" objectFit="cover" className="z-10 opacity-90"></Image>.
        <div className="relative z-20 sm:m-10 sm:ml-auto xl:w-2/5 ">
          <h1 className="decoration-3 text-center text-4xl font-bold tracking-wider text-white underline decoration-amber-500 md:text-6xl">
            HANGMASSZÁZS
          </h1>
          <p className="mt-5 rounded-md bg-white/30 p-10 text-center text-2xl font-semibold text-white sm:bg-transparent md:text-justify md:text-3xl">
            Lazuljon el Kovács Ximena, Peter Hess féle hangmasszőr foglalkozásán, melyen test ismét harmóniába kerülhet, egészségessé válhat.
          </p>
          <div className="text-center">
            <Link href="/#kapcsolat" passHref>
              <button className="mt-5 rounded-lg bg-amber-500 py-3 px-7 text-xl font-semibold text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl sm:mt-0">
                Kapcsolat
              </button>
            </Link>
          </div>
          <div className="mx-auto mt-10 w-[250px] rounded-md bg-white/50 p-5">
            <Image src={"/assets/logo.png"} alt="Peter Hess" width={400} height={300}></Image>
          </div>
        </div>
      </section>
      {/* HERO */}
      {/* Features */}
      <section className="bg-[#fff4de] pt-20 pb-56">
        <h1 className=" mb-28 text-center text-3xl font-bold tracking-wider text-amber-500">A HANGMASSZÁZS LEGJELLEMZŐBB HATÁSAI</h1>
        <div className="">
          <div className="mx-5 flex flex-wrap items-stretch justify-around gap-5">
            <div className="relative w-[420px]  self-start rounded-md   bg-white p-5 shadow-lg">
              <div className="absolute -top-8 left-0 right-0 mx-auto h-16 w-16 rounded-full bg-amber-500 p-2 text-white">
                <Image src={"/assets/yoga.svg"} alt="yoga icon" width={120} height={120} />
              </div>
              <div className=" my-5">
                <h2 className="text-xl font-semibold text-gray-700">Ellazulás</h2>
                <div className="mt-3 border-b"></div>
                <p className="mt-4 text-justify text-lg ">
                  A hang megszólítja az emberben rejlő eredeti ősbizalmat. Ezáltal gyorsan kialakul a mély ellazultság, az ún. alfa állapot.
                </p>
              </div>
            </div>
            <div className="relative w-[420px]  rounded-md border-2 border-amber-500 bg-white p-8 shadow-lg">
              <div className="absolute -top-8 left-0 right-0 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 p-2">
                <div className="-translate-x-[1px] translate-y-[4px]">
                  <Image src={"/assets/ying.svg"} alt="zen icon" width={60} height={60} />
                </div>
              </div>
              <div className=" my-5">
                <h2 className="text-xl font-semibold text-gray-700">Lélek</h2>
                <div className="mt-3 border-b"></div>
                <p className="mt-4 text-justify text-lg ">
                  Ebben a hang-ellazulásban megtörténik az ELENGEDÉS. A test, a lélek és a szellem el tudják engedni a felgyülemlett hétköznapi
                  stresszt, a problémákat, a feszültségeket, a gondokat és a bizonytalanságot. Megtörténhet az újrarendeződés, a test ismét harmóniába
                  kerülhet, egészségessé válhat.
                </p>
              </div>
            </div>
            <div className="relative w-[420px]  self-start rounded-md  bg-white p-5 shadow-lg">
              <div className="absolute -top-8 left-0 right-0 mx-auto h-16 w-16 rounded-full bg-amber-500 p-3">
                <Image src={"/assets/sound.svg"} alt="sound icon" width={80} height={80} />
              </div>
              <div className=" my-5">
                <h2 className="text-xl font-semibold text-gray-700">Sejtmasszázst</h2>
                <div className="mt-3 border-b"></div>
                <p className="mt-4 text-justify text-lg ">
                  Minden egyes sejt lágy hangmasszázst (sejtmasszázst) él át, és így visszatalál az eredeti rendjéhez.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      {/* Kid */}
      <section className="bg-[#e8debe] py-10 pb-20">
        <div className="mx-auto -mt-36 max-w-6xl rounded-lg bg-white py-20 px-5 md:px-16">
          <div className="flex flex-col-reverse gap-10 md:flex-row ">
            <div className="mx-auto text-lg md:w-4/6">
              <h1 className="mb-7 text-center text-3xl font-semibold text-gray-700">Hangtálfoglalkozás gyermekeknek</h1>
              <p className="text-justify ">
                A hangtálak segítségével új irányt vehet a gyermekek fejlesztése, mely sok területen képes javulást elérni. A hangmasszázs terápia
                lényege maga a hang/hangrezgés, mely a speciális, erre a célra kifejlesztett terápiás hangtálak segítségével szólal meg. A fejlesztést
                kizárólag a „Peter Hess – féle” terápiás hangtálakkal végzi az a szakember, aki a „Peter Hess Akadémián” végezte tanulmányait és
                képzett hangmasszőr oklevelet szerzett. A terápiás tálak segítségével végzett hangmasszázs tehát egy új módszer, mely nagyon jó
                eredménnyel hasznosítható különféle fejlesztések során. Segíthet:
              </p>

              <div className="mt-4 flex items-center gap-4">
                <div className="rounded-full bg-gray-100 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-green-600"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>viselkedési rendellenességek, magatartási zavarok estén</div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="rounded-full bg-gray-100 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-green-600"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>tanulási nehézségek esetén</div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="rounded-full bg-gray-100 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-green-600"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>figyelem, koncentrálóképesség zavara esetén,</div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="rounded-full bg-gray-100 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-green-600"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>kommunikációs zavarok esetén, a logopédiai terápiában (pl. dadogás, mutizmus)</div>
              </div>
              <div className="mt-5">
                <Link href="/#kapcsolat" passHref>
                  <button className=" rounded-lg bg-amber-400 py-1 px-4 text-lg font-semibold text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl sm:mt-0">
                    Kapcsolat
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative mx-auto h-96 w-64 overflow-hidden rounded-lg md:h-auto md:w-2/6">
              <Image src={"/assets/hangtal-2.png"} alt="hangtál" layout="fill" objectFit="cover"></Image>
            </div>
          </div>
        </div>
      </section>
      {/* Kid */}
      <section className="my-32">
        <h1 className="text-center text-3xl font-semibold text-gray-700 underline decoration-amber-400 decoration-2">Oklevelek</h1>
        <div className="mt-10 flex flex-wrap justify-center gap-20">
          <div className="shadow-lg transition-transform hover:scale-125">
            <Image src={"/assets/Beolvasás.jpg"} alt="Oklevél" width={210} height={297}></Image>
          </div>
          <div className="shadow-lg transition-transform hover:scale-125">
            <Image src={"/assets/Beolvasás 1.jpg"} alt="Oklevél" width={210} height={297}></Image>
          </div>
          <div className="shadow-lg transition-transform hover:scale-125">
            <Image src={"/assets/Beolvasás 2.jpg"} alt="Oklevél" width={210} height={297}></Image>
          </div>
          <div className="shadow-lg transition-transform hover:scale-125">
            <Image src={"/assets/Beolvasás 3.jpg"} alt="Oklevél" width={210} height={297}></Image>
          </div>
        </div>
      </section>
      <div className="mb-36">
        <h1 className="text-center text-3xl font-semibold text-amber-500">Részvételi feltételek</h1>
        <ul className="mx-10 mt-7 max-w-3xl list-disc text-lg md:mx-auto">
          <li>
            Szívritmus szabályzó használata, epilepsziára való hajlam, a terhesség első három hónapjában, lázas esetben vagy gyulladás esetén nem
            javasolt a részvétel a kezelésen.
          </li>
          <li>Műtétileg, vagy egyéb módon alkalmazott fém eszközök, implantátumok, spirál használatáról tájékoztatást kérünk.</li>
          <li>
            A gongok intenzíven hatnak a fizikai testre, és az érzelmeinkre. Ez okozhat fizikai tüneteket, illetve megjelenhetnek érzelmi
            megnyilvánulások.
          </li>
          <div className="mt-5">
            <a
              href="/assets/Információs adatlap.pdf"
              target={"_blank"}
              className="rounded border-2 border-amber-400 px-3 py-1 shadow-md hover:bg-gray-50"
            >
              További információk
            </a>
          </div>
        </ul>
      </div>
    </main>
  );
};

export default Hangmasszazs;

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden pt-28 sm:pt-40 ">
      <motion.div
        animate={{ rotate: 0, x: 0 }}
        initial={{ rotate: -20, x: 500 }}
        transition={{ duration: 2.3 }}
        className="absolute top-0 z-0 h-full w-full select-none bg-[url('/assets/mandala.svg')] bg-[length:100%]  bg-right-top bg-no-repeat  sm:bg-[length:80%] xl:bg-[length:65%] "
      ></motion.div>
      <div className="relative z-10">
        <h1 className="font-roboto text-center text-4xl font-bold leading-tight text-gray-800 sm:text-6xl sm:font-semibold">
          Egyedi személyreszabott <br className="" />
          mandala készítés
        </h1>
        <p className="font-roboto mx-auto mt-10 p-3 text-center text-xl text-gray-700 sm:mt-14 sm:p-0 sm:font-bold lg:w-[700px]">
          A mandala a kozmosz, illetve különféle istenek hindu vagy buddhista
          vallási ábrázolása. Elkészítési folyamata maga is egyfajta meditatív
          szertartás.
        </p>

        <div className="mt-5 flex justify-center space-x-10 sm:mt-16">
          <Link href="#kapcsolat" passHref>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="rounded-xl bg-pink-700 py-2 px-3 text-lg font-semibold tracking-wider text-white hover:bg-pink-800 hover:shadow-xl sm:rounded-full sm:py-4 sm:px-8"
            >
              Mandala rendelés
            </motion.a>
          </Link>
          <Link href="#foglalkozas" passHref>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="rounded-xl border-2  border-pink-700 bg-pink-50 py-2 px-3 text-lg font-bold tracking-wider text-pink-700 hover:bg-pink-100 hover:shadow-xl sm:rounded-full sm:py-4 sm:px-8"
            >
              Foglalkozás
            </motion.a>
          </Link>
        </div>
        <div className="mx-auto mt-16 mb-5 flex max-w-4xl flex-col justify-center sm:mt-28 sm:mb-20 sm:flex-row">
          <div className="relative mx-auto h-40 w-5/6 overflow-hidden rounded-xl sm:mx-0 sm:h-52 sm:w-96">
            <Image
              alt="crystal"
              src={"/assets/c.jpg"}
              layout={"fill"}
              objectFit="cover"
            ></Image>
          </div>
          <div className="mx-10 my-5 sm:w-72 ">
            <div className="font-roboto mb-5 text-center text-xl tracking-wider underline decoration-pink-800 sm:text-left">
              Ajándék kristályok
            </div>
            <p className="text-center sm:text-left">
              Tökéletes ajándék lehet szeretteink, barátaink számára. Kapható
              ékszerek, kiegészítők és díszek formájában.
            </p>
            <div className=" flex justify-center sm:mb-0 sm:justify-start">
              <Link href="/kristalyok" passHref>
                <button className="mt-5 rounded-md bg-violet-400 px-4 py-1 font-semibold tracking-wide text-white hover:bg-violet-500 hover:shadow-xl">
                  Kristályok
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

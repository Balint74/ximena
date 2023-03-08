import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarCrystal from "../components/NavbarCrystal";

export default function Kristalyok() {
  return (
    <div className=" bg-[url('/assets/cbg.jpg')] bg-cover bg-fixed bg-no-repeat">
      <Head>
        <title>Ximena - Ajándék kristályok</title>
        <meta name="description" content="Kapható ajándék kristályok, dekorációk és ékszerek formájában." />
      </Head>
      <NavbarCrystal></NavbarCrystal>

      <div className="font-roboto mx-auto max-w-7xl pt-40 text-center text-4xl font-semibold  text-purple-900">
        <h1>Ajándék Kristályok</h1>
      </div>
      <div className="mx-auto mt-20 flex max-w-4xl flex-col items-center justify-center space-y-10 sm:flex-row sm:items-start sm:justify-around sm:space-y-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-80 overflow-hidden rounded-md bg-white/90 shadow-xl"
        >
          <div className="relative h-56 w-80">
            <Image src={"/assets/bracelet.jpg"} width={324} height={224} alt="" objectFit="cover"></Image>
          </div>
          <div className="py-5 px-5">
            <h2 className="font-roboto text-lg font-semibold text-gray-700">Kristály ékszerek</h2>
            <p className="pt-3 text-justify">
              Karkötőink amellett, hogy gyógyító erőt hordoznak, kiváló kiegészítői mindennapjainknak, letisztult stílusukkal pedig remekül
              illeszkednek bármilyen megjelenéshez.
            </p>
            <Link href="/#kapcsolat" passHref>
              <button className="mt-4 rounded-lg bg-purple-700 px-4 py-2 text-white transition hover:bg-purple-800 hover:shadow-lg">Érdekel</button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-80 overflow-hidden rounded-md bg-white/90 shadow-xl"
        >
          <div className="relative h-56 w-80">
            <Image src={"/assets/decor.jpg"} width={324} height={224} alt="" objectFit="cover"></Image>
          </div>
          <div className="py-5 px-5">
            <h2 className="font-roboto text-lg font-semibold text-gray-700">Kristály dekorációk</h2>
            <p className="pt-3 text-justify">
              Kapható: kristály gömbök, csúcsok, mandala képekre képekre helyezett kristályok, amelyket a tértisztító hatással rendelkeznek. Ezek
              mellett megfelelő kiegészítői lakásunknak.
            </p>
            <Link href="/#kapcsolat" passHref>
              <button className="mt-4 rounded-lg bg-purple-700 px-4 py-2 text-white transition hover:bg-purple-800 hover:shadow-lg">Érdekel</button>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="mx-auto  mt-40 max-w-7xl bg-white/60 ">
        <div className="mb-10 py-5">
          <h1 className=" text-center text-3xl tracking-wide underline decoration-purple-800 ">Kristály dekorációk</h1>
        </div>

        <div className="grid gap-y-5 px-10 pb-14  sm:grid-cols-2 sm:gap-x-20 sm:gap-y-20 md:grid-cols-3">
          <motion.div
            whileHover={{
              scale: 1.3,
              transition: { duration: 0.7 },
            }}
            className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
          >
            <Image src={"/assets/cr1.jpg"} alt="Mandala" width={300} height={300} className="rounded-xl shadow-2xl" objectFit="cover"></Image>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.3,
              transition: { duration: 0.7 },
            }}
            className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
          >
            <Image src={"/assets/cr2.jpg"} alt="Mandala" width={300} height={300} className="rounded-xl shadow-2xl" objectFit="cover"></Image>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.3,
              transition: { duration: 0.7 },
            }}
            className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
          >
            <Image src={"/assets/cr3.jpg"} alt="Mandala" width={300} height={300} className="rounded-xl shadow-2xl"></Image>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.3,
              transition: { duration: 0.7 },
            }}
            className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
          >
            <Image src={"/assets/cr4.jpg"} alt="Mandala" width={300} height={300} className="rounded-xl shadow-2xl" objectFit="cover"></Image>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.3,
              transition: { duration: 0.7 },
            }}
            className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
          >
            <Image src={"/assets/cr5.jpg"} alt="Mandala" width={300} height={300} className="rounded-xl shadow-2xl" objectFit="cover"></Image>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.3,
              transition: { duration: 0.7 },
            }}
            className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
          >
            <Image src={"/assets/cr6.jpg"} alt="Mandala" width={300} height={300} className="rounded-xl shadow-2xl" objectFit="cover"></Image>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

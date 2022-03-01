import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
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
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, type: "spring", bounce: 0.5 }}
        className={`fixed right-0 left-0 top-0 z-50 mt-4 hidden p-4 sm:block  ${
          scrollY > 50 ? "mt-0 bg-white shadow-md" : "shadow-none"
        }`}
      >
        <div className={`mx-auto  flex max-w-7xl items-center justify-between`}>
          <Link href="/" passHref>
            <div
              className={` ml-10 cursor-pointer text-4xl font-handwritten font-extrabold tracking-wider text-pink-700 ${
                scrollY > 50 ? "mr-0" : ""
              }`}
            >
              Ximena
            </div>
          </Link>
          <div className="flex space-x-4 text-base font-semibold ">
            <Link href="#rolam" passHref>
              <a className="cursor-pointer rounded-lg px-2 py-2 transition hover:bg-white hover:shadow-xl">
                Rólam
              </a>
            </Link>
            <Link href="#foglalkozas" passHref>
              <a className="cursor-pointer rounded-lg px-2 py-2 transition hover:bg-white hover:shadow-xl">
                Foglalkozás
              </a>
            </Link>
            <Link href="#munkaim" passHref>
              <a className="cursor-pointer rounded-lg px-2 py-2 transition hover:bg-white hover:shadow-xl">
                Munkáim
              </a>
            </Link>
            <Link href="#kapcsolat" passHref>
              <a className="cursor-pointer rounded-lg px-2 py-2 transition hover:bg-white hover:shadow-xl">
                Kapcsolat
              </a>
            </Link>
            <Link href="/kristalyok" passHref>
              <a className="cursor-pointer rounded-lg bg-violet-400 px-3 py-2 text-white transition hover:shadow-xl">
                Kristályok
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
      <div
        className={`fixed right-0 left-0 top-0 z-50 mt-2 block p-4 sm:hidden  ${
          scrollY > 50 ? "mt-0 bg-white shadow-md" : "shadow-none"
        }`}
      >
        <Link href="/" passHref>
          <div
            className={` ml-2 cursor-pointer text-2xl font-bold tracking-wider text-pink-700 ${
              scrollY > 50 ? "mr-0" : ""
            }`}
          >
            Ximena
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;

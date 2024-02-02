import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);

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
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, type: "spring", bounce: 0.5 }}
        className={`fixed right-0 left-0 top-0 z-50 mt-4 hidden p-4 md:block  ${
          scrollY > 50 ? "mt-0 bg-white shadow-md" : "shadow-none"
        }`}
      >
        <div className={`mx-auto  flex max-w-7xl items-center justify-between`}>
          <Link href="/" passHref>
            <div
              className={` font-handwritten ml-10 cursor-pointer text-4xl font-extrabold tracking-wider text-pink-700 ${
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
            <Link href="/hangmasszazs" passHref>
              <a className="cursor-pointer rounded-lg bg-amber-300 px-3 py-2 text-white transition hover:shadow-xl">
                Hangmasszázs
              </a>
            </Link>
          </div>
        </div>
      </motion.nav>

      <div
        className={`fixed right-0 left-0 top-0 z-50 block p-4 md:hidden ${
          scrollY > 50 ? "mt-0 bg-white shadow-md" : "shadow-none"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" passHref>
            <div
              className={` ml-2 cursor-pointer text-2xl font-bold tracking-wider text-pink-700 ${
                scrollY > 50 ? "mr-0" : ""
              }`}
            >
              Ximena
            </div>
          </Link>
          <div>
            <div
              onClick={() => {
                setOpen(!open);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={`${open ? "mt-3 flex flex-col bg-white" : "hidden"}`}>
          <Link href="#rolam" passHref>
            <a
              className="cursor-pointer rounded-lg px-2 py-2 transition hover:bg-white hover:shadow-xl"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Rólam
            </a>
          </Link>
          <Link href="#foglalkozas" passHref>
            <a
              className="cursor-pointer rounded-lg px-2 py-2 transition hover:bg-white hover:shadow-xl"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Foglalkozás
            </a>
          </Link>
          <Link href="#munkaim" passHref>
            <a
              className="cursor-pointer rounded-lg px-2 py-2 transition hover:bg-white hover:shadow-xl"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Munkáim
            </a>
          </Link>
          <Link href="#kapcsolat" passHref>
            <a
              className="cursor-pointer rounded-lg px-2 py-2 transition hover:bg-white hover:shadow-xl"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Kapcsolat
            </a>
          </Link>
          <Link href="/kristalyok" passHref>
            <a
              className="cursor-pointer rounded-lg border-2 border-violet-400 px-3 py-2  transition hover:shadow-xl"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Kristályok
            </a>
          </Link>
          <Link href="/hangmasszazs" passHref>
            <a
              className="cursor-pointer rounded-lg border-2 border-amber-400 px-3 py-2  transition hover:shadow-xl"
              onClick={() => {
                setOpen(!open);
              }}
            >
            Hangmasszázs  
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

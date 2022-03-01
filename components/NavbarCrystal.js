import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const NavbarCrystal = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, type: "spring", bounce: 0.5 }}
      className={`fixed right-0 left-0 top-0 z-50 mt-4 p-4 `}
    >
      <div className={`mx-auto flex max-w-7xl items-baseline justify-between`}>
        <Link passHref href="/">
          <a
            className={` ml-10 text-3xl font-extrabold tracking-wider font-handwritten  text-purple-800`}
          >
             Ximena
          </a>
        </Link>
        <Link href="/" passHref>
          <div className="px-4 py-2 text-xl font-semibold text-gray-700 transition-all hover:cursor-pointer hover:shadow-md">
            Mandalák
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default NavbarCrystal;

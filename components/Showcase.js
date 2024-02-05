import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Showcase = () => {
  return (
    <section id="munkaim" className="mx-auto my-10 max-w-7xl scroll-mt-20 sm:my-20">
      <h2 className="mb-5 text-center text-3xl tracking-wide underline decoration-pink-600 sm:mb-20">Munkáim</h2>

      <div className="grid gap-y-5 px-10 pb-14 shadow-lg sm:grid-cols-2 sm:gap-x-20 sm:gap-y-20 md:grid-cols-3">
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
        >
          <Image src={"/assets/m7.jpg"} alt="Festett mandala" width={500} height={500} className="rounded-xl shadow-2xl"></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
        >
          <Image src={"/assets/m8.jpg"} alt="Festett mandala" width={500} height={500} className="rounded-xl shadow-2xl"></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
        >
          <Image src={"/assets/m9.jpg"} alt="Festett mandala" width={500} height={500} className="rounded-xl shadow-2xl"></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
        >
          <Image src={"/assets/m10.jpg"} alt="Festett mandala" width={500} height={500} className="rounded-xl shadow-2xl"></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
        >
          <Image src={"/assets/m11.jpg"} alt="Festett mandala" width={500} height={500} className="rounded-xl shadow-2xl"></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
        >
          <Image src={"/assets/m1.jpg"} alt="Festett mandala" width={500} height={500} className="rounded-xl shadow-2xl"></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
        >
          <Image src={"/assets/m2.jpg"} alt="Festett mandala" width={500} height={500} className="rounded-xl shadow-2xl"></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
        >
          <Image src={"/assets/m3.jpg"} alt="Festett mandala" width={500} height={500} className="rounded-xl shadow-2xl"></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
        >
          <Image src={"/assets/m4.jpg"} alt="Festett mandala" width={500} height={500} className="rounded-xl shadow-2xl"></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
        >
          <Image src={"/assets/m5.jpg"} alt="Festett mandala" width={500} height={500} className="rounded-xl shadow-2xl"></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="relative z-10 mx-auto flex h-64 w-64 items-center justify-center shadow-2xl hover:z-40 lg:h-72 lg:w-72"
        >
          <Image src={"/assets/m6.jpg"} alt="Festett mandala" width={500} height={500} className="rounded-xl shadow-2xl"></Image>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;

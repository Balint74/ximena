import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Showcase = () => {
  return (
    <section id="munkaim" className="mx-auto my-10 sm:my-20 max-w-7xl scroll-mt-20">
      <h1 className="mb-5 sm:mb-20 text-center text-3xl tracking-wide underline decoration-pink-600">
        Munkáim
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-20 gap-y-5 sm:gap-y-20 px-10 pb-14 shadow-lg">
      <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="hover:z-40 z-10 relative mx-auto flex h-64 w-64 lg:h-72 lg:w-72 items-center justify-center shadow-2xl"
        >
          <Image
            src={"/assets/m7.jpg"}
            alt="Mandala"
            width={500}
            height={500}
            className="rounded-xl shadow-2xl"
          ></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="hover:z-40 z-10 relative mx-auto flex h-64 w-64 lg:h-72 lg:w-72 items-center justify-center shadow-2xl"
        >
          <Image
            src={"/assets/m8.jpg"}
            alt="Mandala"
            width={500}
            height={500}
            className="rounded-xl shadow-2xl"
          ></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="hover:z-40 z-10 relative mx-auto flex h-64 w-64 lg:h-72 lg:w-72 items-center justify-center shadow-2xl"
        >
          <Image
            src={"/assets/m9.jpg"}
            alt="Mandala"
            width={500}
            height={500}
            className="rounded-xl shadow-2xl"
          ></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="hover:z-40 z-10 relative mx-auto flex h-64 w-64 lg:h-72 lg:w-72 items-center justify-center shadow-2xl"
        >
          <Image
            src={"/assets/m10.jpg"}
            alt="Mandala"
            width={500}
            height={500}
            className="rounded-xl shadow-2xl"
          ></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="hover:z-40 z-10 relative mx-auto flex h-64 w-64 lg:h-72 lg:w-72 items-center justify-center shadow-2xl"
        >
          <Image
            src={"/assets/m11.jpg"}
            alt="Mandala"
            width={500}
            height={500}
            className="rounded-xl shadow-2xl"
          ></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="hover:z-40 z-10 relative mx-auto flex h-64 w-64 lg:h-72 lg:w-72 items-center justify-center shadow-2xl"
        >
          <Image
            src={"/assets/m1.jpg"}
            alt="Mandala"
            width={500}
            height={500}
            className="rounded-xl shadow-2xl"
          ></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="hover:z-40 z-10 relative mx-auto flex h-64 w-64 lg:h-72 lg:w-72 items-center justify-center shadow-2xl"
        >
          <Image
            src={"/assets/m2.jpg"}
            alt="Mandala"
            width={500}
            height={500}
            className="rounded-xl shadow-2xl"
          ></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="hover:z-40 z-10 relative mx-auto flex h-64 w-64 lg:h-72 lg:w-72 items-center justify-center shadow-2xl"
        >
          <Image
            src={"/assets/m3.jpg"}
            alt="Mandala"
            width={500}
            height={500}
            className="rounded-xl shadow-2xl"
          ></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="hover:z-40 z-10 relative mx-auto flex h-64 w-64 lg:h-72 lg:w-72 items-center justify-center shadow-2xl"
        >
          <Image
            src={"/assets/m4.jpg"}
            alt="Mandala"
            width={500}
            height={500}
            className="rounded-xl shadow-2xl"
          ></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="hover:z-40 z-10 relative mx-auto flex h-64 w-64 lg:h-72 lg:w-72 items-center justify-center shadow-2xl"
        >
          <Image
            src={"/assets/m5.jpg"}
            alt="Mandala"
            width={500}
            height={500}
            className="rounded-xl shadow-2xl"
          ></Image>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.7 },
          }}
          className="hover:z-40 z-10 relative mx-auto flex h-64 w-64 lg:h-72 lg:w-72 items-center justify-center shadow-2xl"
        >
          <Image
            src={"/assets/m6.jpg"}
            alt="Mandala"
            width={500}
            height={500}
            className="rounded-xl shadow-2xl"
          ></Image>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
